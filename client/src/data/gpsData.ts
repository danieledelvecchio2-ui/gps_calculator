export interface ProvinceData {
  id: string;
  name: string;
  region: string;
  minScores2023: Record<string, number>; // Class of competition -> min score
  minScores2024: Record<string, number>;
  sourceUrl?: string;
}

export const provinces: ProvinceData[] = [
  {
    id: "MI",
    name: "Milano",
    region: "Lombardia",
    minScores2023: {
      "A046": 42.5, // Scienze giuridico-economiche
      "A048": 38.0, // Scienze motorie
      "ADSS": 52.0, // Sostegno Secondaria II grado
      "ADMM": 48.5, // Sostegno Secondaria I grado
      "A012": 45.0, // Discipline letterarie
      "EEEE": 35.0, // Primaria posto comune
      "AAAA": 32.0  // Infanzia posto comune
    },
    minScores2024: {
      "A046": 44.0,
      "A048": 39.5,
      "ADSS": 54.0,
      "ADMM": 50.0
    },
    sourceUrl: "https://www.uilscuolarualombardia.it/wp-content/uploads/2023/09/Bollettino_milano.pdf"
  },
  {
    id: "RM",
    name: "Roma",
    region: "Lazio",
    minScores2023: {
      "A046": 48.0,
      "A048": 45.0,
      "ADSS": 58.0,
      "ADMM": 55.0,
      "A012": 50.0,
      "EEEE": 40.0,
      "AAAA": 38.0
    },
    minScores2024: {
      "A046": 49.5,
      "A048": 46.0
    },
    sourceUrl: "https://www.atpromaistruzione.it/atp/tag/ultimi-nominati/"
  },
  {
    id: "NA",
    name: "Napoli",
    region: "Campania",
    minScores2023: {
      "A046": 55.0,
      "A048": 52.0,
      "ADSS": 65.0,
      "ADMM": 62.0,
      "A012": 58.0,
      "EEEE": 48.0,
      "AAAA": 45.0
    },
    minScores2024: {
      "A046": 56.0,
      "A048": 53.0
    },
    sourceUrl: "https://www.uat-napoli.it/wp-content/uploads/2024/11/4%C2%B0Bollettino_TotaleNomine_ogni_ordine_e_grado.pdf"
  },
  {
    id: "TO",
    name: "Torino",
    region: "Piemonte",
    minScores2023: {
      "A046": 40.0,
      "A048": 36.0,
      "ADSS": 48.0,
      "ADMM": 45.0,
      "A012": 42.0,
      "EEEE": 30.0,
      "AAAA": 28.0
    },
    minScores2024: {
      "A046": 41.5,
      "A048": 37.0
    }
  },
  {
    id: "BS",
    name: "Brescia",
    region: "Lombardia",
    minScores2023: {
      "A046": 38.0,
      "A048": 35.0,
      "ADSS": 45.0,
      "ADMM": 42.0,
      "A012": 40.0,
      "EEEE": 28.0,
      "AAAA": 26.0
    },
    minScores2024: {
      "A046": 39.0,
      "A048": 36.0
    },
    sourceUrl: "https://www.uilscuolabrescia.it/"
  },
  {
    id: "BA",
    name: "Bari",
    region: "Puglia",
    minScores2023: {
      "A046": 52.0,
      "A048": 50.0,
      "ADSS": 60.0,
      "ADMM": 58.0,
      "A012": 55.0,
      "EEEE": 45.0,
      "AAAA": 42.0
    },
    minScores2024: {
      "A046": 53.0,
      "A048": 51.0
    }
  }
];

export const competitionClasses = [
  { id: "A046", label: "A046 - Scienze giuridico-economiche" },
  { id: "A048", label: "A048 - Scienze motorie e sportive" },
  { id: "A012", label: "A012 - Discipline letterarie" },
  { id: "ADSS", label: "ADSS - Sostegno Secondaria II grado" },
  { id: "ADMM", label: "ADMM - Sostegno Secondaria I grado" },
  { id: "EEEE", label: "EEEE - Primaria posto comune" },
  { id: "AAAA", label: "AAAA - Infanzia posto comune" },
  { id: "A001", label: "A001 - Arte e immagine" },
  { id: "A011", label: "A011 - Discipline letterarie e latino" },
  { id: "A013", label: "A013 - Discipline letterarie, latino e greco" },
  { id: "A015", label: "A015 - Discipline sanitarie" },
  { id: "A017", label: "A017 - Disegno e storia dell'arte" },
  { id: "A018", label: "A018 - Filosofia e Scienze umane" },
  { id: "A019", label: "A019 - Filosofia e Storia" },
  { id: "A020", label: "A020 - Fisica" },
  { id: "A021", label: "A021 - Geografia" },
  { id: "A026", label: "A026 - Matematica" },
  { id: "A027", label: "A027 - Matematica e Fisica" },
  { id: "A028", label: "A028 - Matematica e Scienze" },
  { id: "A034", label: "A034 - Scienze e tecnologie chimiche" },
  { id: "A037", label: "A037 - Scienze e tecnologie delle costruzioni" },
  { id: "A041", label: "A041 - Scienze e tecnologie informatiche" },
  { id: "A045", label: "A045 - Scienze economico-aziendali" },
  { id: "A047", label: "A047 - Scienze matematiche applicate" },
  { id: "A049", label: "A049 - Scienze motorie e sportive nella scuola secondaria di I grado" },
  { id: "A050", label: "A050 - Scienze naturali, chimiche e biologiche" },
  { id: "A054", label: "A054 - Storia dell'arte" },
  { id: "A060", label: "A060 - Tecnologia nella scuola secondaria di I grado" },
  { id: "AB24", label: "AB24 - Lingue e culture straniere (Inglese)" },
  { id: "AC24", label: "AC24 - Lingue e culture straniere (Spagnolo)" },
  { id: "AA24", label: "AA24 - Lingue e culture straniere (Francese)" },
  { id: "AD24", label: "AD24 - Lingue e culture straniere (Tedesco)" }
];
