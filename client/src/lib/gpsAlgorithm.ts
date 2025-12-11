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
  hasData: boolean;
}

export function calculateScore(data: {
  votoLaurea: number;
  lode: boolean;
  numC2: number;
  numClil: number;
  numBiannale: number;
  hasMasterL2: boolean; // Master universitario in L2 (3 punti, massimo 1)
  numDigComp22: number; // Certificazioni in linea al DigComp 2.2 (0.5 punti ciascuna)
  numDigCompEdu: number; // Certificazioni in linea al DigComp Edu (1 punto ciascuna)
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
  
  // 2. Titoli Culturali
  const c2Score = data.numC2 * 6;
  const clilScore = data.numClil * 3;
  const biannaleScore = data.numBiannale * 2;
  const masterL2Score = data.hasMasterL2 ? 3 : 0; // Massimo 1 master L2
  const titoliCulturaliScore = c2Score + clilScore + biannaleScore + masterL2Score;

  // 3. Informatica (massimo 2 punti)
  // DigComp 2.2: 0.5 punti ciascuna
  // DigComp Edu: 1 punto ciascuna
  const digComp22Score = data.numDigComp22 * 0.5;
  const digCompEduScore = data.numDigCompEdu * 1.0;
  const informaticaScoreRaw = digComp22Score + digCompEduScore;
  // Cap massimo a 2 punti
  const informaticaScore = Math.min(informaticaScoreRaw, 2);

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
    const min2024 = province.minScores2024[classeConcorso] || null;
    const min2025 = province.minScores2025[classeConcorso] || null;
    const hasData = min2024 !== null || min2025 !== null;
    
    let probability: "Alta" | "Media" | "Bassa" | "N/D" = "N/D";
    let probabilityScore = 0;
    let trend: "stable" | "increasing" | "decreasing" | "unknown" = "unknown";

    // Determine trend
    if (min2024 !== null && min2025 !== null) {
      if (min2025 > min2024 + 2) trend = "increasing";
      else if (min2025 < min2024 - 2) trend = "decreasing";
      else trend = "stable";
    }

    // Determine probability based on the most recent data (2025 preferred, then 2024)
    const referenceScore = min2025 !== null ? min2025 : min2024;

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
    } else {
      // No data available
      probabilityScore = -1; // Push to bottom
    }

    // Default source URL if not provided
    const sourceUrl = province.sourceUrl || `https://www.voglioinsegnare.it/graduatorie-gps`;

    return {
      provinceId: province.id,
      provinceName: province.name,
      region: province.region,
      minScore2023: min2024,
      minScore2024: min2025,
      probability,
      probabilityScore,
      trend,
      sourceUrl,
      hasData
    };
  }).sort((a, b) => b.probabilityScore - a.probabilityScore);
}
