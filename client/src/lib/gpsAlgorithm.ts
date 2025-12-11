import { ProvinceData, provinces } from "@/data/gpsData";

export interface CalculationResult {
  totalScore: number;
  breakdown: {
    laurea: number;
    titoliCulturali: number;
    informatica: number;
  };
  provincesAnalysis: ProvinceAnalysis[];
}

export interface ProvinceAnalysis {
  provinceId: string;
  provinceName: string;
  region: string;
  minScore2023: number | null;
  minScore2024: number | null;
  probability: "Alta" | "Media" | "Bassa" | "N/D";
  probabilityScore: number; // 0-100 for sorting/visuals
  trend: "stable" | "increasing" | "decreasing" | "unknown";
  sourceUrl?: string;
}

export function calculateScore(data: {
  votoLaurea: number;
  lode: boolean;
  numC2: number;
  numClil: number;
  numBiannale: number;
  certificazioniInformatiche: boolean;
}): { totalScore: number; breakdown: any } {
  // 1. Calcolo Punteggio Laurea
  // Base 12 + 0.5 per ogni punto oltre 76
  let laureaScore = 12;
  if (data.votoLaurea > 76) {
    laureaScore += (data.votoLaurea - 76) * 0.5;
  }
  if (data.lode) {
    laureaScore += 4;
  }
  // Cap at 33 (110 e lode = 12 + 17 + 4 = 33)
  // But wait, 110 without lode is 29. 110 with lode is 33.
  // Formula above: 110 -> 12 + (34)*0.5 = 12 + 17 = 29. Correct.
  
  // 2. Titoli Culturali
  const c2Score = data.numC2 * 6;
  const clilScore = data.numClil * 3;
  const biannaleScore = data.numBiannale * 2;
  const titoliCulturaliScore = c2Score + clilScore + biannaleScore;

  // 3. Informatica
  const informaticaScore = data.certificazioniInformatiche ? 2 : 0;

  const totalScore = laureaScore + titoliCulturaliScore + informaticaScore;

  return {
    totalScore,
    breakdown: {
      laurea: laureaScore,
      titoliCulturali: titoliCulturaliScore,
      informatica: informaticaScore
    }
  };
}

export function analyzeProvinces(userScore: number, classeConcorso: string): ProvinceAnalysis[] {
  return provinces.map(province => {
    const min2023 = province.minScores2023[classeConcorso] || null;
    const min2024 = province.minScores2024[classeConcorso] || null;
    
    let probability: "Alta" | "Media" | "Bassa" | "N/D" = "N/D";
    let probabilityScore = 0;
    let trend: "stable" | "increasing" | "decreasing" | "unknown" = "unknown";

    // Determine trend
    if (min2023 !== null && min2024 !== null) {
      if (min2024 > min2023 + 2) trend = "increasing";
      else if (min2024 < min2023 - 2) trend = "decreasing";
      else trend = "stable";
    }

    // Determine probability based on the most recent data (2024 preferred, then 2023)
    const referenceScore = min2024 !== null ? min2024 : min2023;

    if (referenceScore !== null) {
      const diff = userScore - referenceScore;
      
      if (diff >= 5) {
        probability = "Alta";
        probabilityScore = 90;
      } else if (diff >= 0) {
        probability = "Media";
        probabilityScore = 60;
      } else if (diff >= -5) {
        probability = "Bassa";
        probabilityScore = 30;
      } else {
        probability = "Bassa";
        probabilityScore = 10;
      }
    }

    return {
      provinceId: province.id,
      provinceName: province.name,
      region: province.region,
      minScore2023: min2023,
      minScore2024: min2024,
      probability,
      probabilityScore,
      trend,
      sourceUrl: province.sourceUrl
    };
  }).sort((a, b) => b.probabilityScore - a.probabilityScore);
}
