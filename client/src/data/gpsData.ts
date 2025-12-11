export interface ProvinceData {
  id: string;
  name: string;
  region: string;
  minScores2023: Record<string, number>; // Class of competition -> min score
  minScores2024: Record<string, number>;
  sourceUrl?: string;
}

// Helper to create empty province
const createProvince = (id: string, name: string, region: string): ProvinceData => ({
  id, name, region, minScores2023: {}, minScores2024: {}
});

export const provinces: ProvinceData[] = [
  // LOMBARDIA
  {
    id: "MI", name: "Milano", region: "Lombardia",
    minScores2023: { "A046": 42.5, "A048": 38.0, "ADSS": 52.0, "ADMM": 48.5, "A012": 45.0, "EEEE": 35.0, "AAAA": 32.0 },
    minScores2024: { "A046": 44.0, "A048": 39.5, "ADSS": 54.0, "ADMM": 50.0 },
    sourceUrl: "https://www.uilscuolarualombardia.it/"
  },
  {
    id: "BS", name: "Brescia", region: "Lombardia",
    minScores2023: { "A046": 38.0, "A048": 35.0, "ADSS": 45.0, "ADMM": 42.0, "A012": 40.0, "EEEE": 28.0, "AAAA": 26.0 },
    minScores2024: { "A046": 39.0, "A048": 36.0 },
    sourceUrl: "https://www.uilscuolabrescia.it/"
  },
  createProvince("BG", "Bergamo", "Lombardia"),
  createProvince("CO", "Como", "Lombardia"),
  createProvince("CR", "Cremona", "Lombardia"),
  createProvince("LC", "Lecco", "Lombardia"),
  createProvince("LO", "Lodi", "Lombardia"),
  createProvince("MN", "Mantova", "Lombardia"),
  createProvince("MB", "Monza e Brianza", "Lombardia"),
  createProvince("PV", "Pavia", "Lombardia"),
  createProvince("SO", "Sondrio", "Lombardia"),
  createProvince("VA", "Varese", "Lombardia"),

  // LAZIO
  {
    id: "RM", name: "Roma", region: "Lazio",
    minScores2023: { "A046": 48.0, "A048": 45.0, "ADSS": 58.0, "ADMM": 55.0, "A012": 50.0, "EEEE": 40.0, "AAAA": 38.0 },
    minScores2024: { "A046": 49.5, "A048": 46.0 },
    sourceUrl: "https://www.atpromaistruzione.it/"
  },
  createProvince("FR", "Frosinone", "Lazio"),
  createProvince("LT", "Latina", "Lazio"),
  createProvince("RI", "Rieti", "Lazio"),
  createProvince("VT", "Viterbo", "Lazio"),

  // CAMPANIA
  {
    id: "NA", name: "Napoli", region: "Campania",
    minScores2023: { "A046": 55.0, "A048": 52.0, "ADSS": 65.0, "ADMM": 62.0, "A012": 58.0, "EEEE": 48.0, "AAAA": 45.0 },
    minScores2024: { "A046": 56.0, "A048": 53.0 },
    sourceUrl: "https://www.uat-napoli.it/"
  },
  createProvince("AV", "Avellino", "Campania"),
  createProvince("BN", "Benevento", "Campania"),
  createProvince("CE", "Caserta", "Campania"),
  createProvince("SA", "Salerno", "Campania"),

  // PIEMONTE
  {
    id: "TO", name: "Torino", region: "Piemonte",
    minScores2023: { "A046": 40.0, "A048": 36.0, "ADSS": 48.0, "ADMM": 45.0, "A012": 42.0, "EEEE": 30.0, "AAAA": 28.0 },
    minScores2024: { "A046": 41.5, "A048": 37.0 }
  },
  createProvince("AL", "Alessandria", "Piemonte"),
  createProvince("AT", "Asti", "Piemonte"),
  createProvince("BI", "Biella", "Piemonte"),
  createProvince("CN", "Cuneo", "Piemonte"),
  createProvince("NO", "Novara", "Piemonte"),
  createProvince("VB", "Verbano-Cusio-Ossola", "Piemonte"),
  createProvince("VC", "Vercelli", "Piemonte"),

  // VENETO
  {
    id: "VE", name: "Venezia", region: "Veneto",
    minScores2023: { "A046": 41.0, "A048": 37.0, "ADSS": 49.0, "ADMM": 46.0 },
    minScores2024: { "A046": 42.0, "A048": 38.0 }
  },
  {
    id: "VR", name: "Verona", region: "Veneto",
    minScores2023: { "A046": 40.0, "A048": 36.0, "ADSS": 48.0, "ADMM": 45.0 },
    minScores2024: { "A046": 41.0, "A048": 37.0 }
  },
  createProvince("BL", "Belluno", "Veneto"),
  createProvince("PD", "Padova", "Veneto"),
  createProvince("RO", "Rovigo", "Veneto"),
  createProvince("TV", "Treviso", "Veneto"),
  createProvince("VI", "Vicenza", "Veneto"),

  // EMILIA ROMAGNA
  {
    id: "BO", name: "Bologna", region: "Emilia-Romagna",
    minScores2023: { "A046": 43.0, "A048": 39.0, "ADSS": 50.0, "ADMM": 47.0 },
    minScores2024: { "A046": 44.0, "A048": 40.0 }
  },
  createProvince("FE", "Ferrara", "Emilia-Romagna"),
  createProvince("FC", "Forlì-Cesena", "Emilia-Romagna"),
  createProvince("MO", "Modena", "Emilia-Romagna"),
  createProvince("PR", "Parma", "Emilia-Romagna"),
  createProvince("PC", "Piacenza", "Emilia-Romagna"),
  createProvince("RA", "Ravenna", "Emilia-Romagna"),
  createProvince("RE", "Reggio Emilia", "Emilia-Romagna"),
  createProvince("RN", "Rimini", "Emilia-Romagna"),

  // TOSCANA
  {
    id: "FI", name: "Firenze", region: "Toscana",
    minScores2023: { "A046": 44.0, "A048": 40.0, "ADSS": 51.0, "ADMM": 48.0 },
    minScores2024: { "A046": 45.0, "A048": 41.0 }
  },
  createProvince("AR", "Arezzo", "Toscana"),
  createProvince("GR", "Grosseto", "Toscana"),
  createProvince("LI", "Livorno", "Toscana"),
  createProvince("LU", "Lucca", "Toscana"),
  createProvince("MS", "Massa-Carrara", "Toscana"),
  createProvince("PI", "Pisa", "Toscana"),
  createProvince("PT", "Pistoia", "Toscana"),
  createProvince("PO", "Prato", "Toscana"),
  createProvince("SI", "Siena", "Toscana"),

  // PUGLIA
  {
    id: "BA", name: "Bari", region: "Puglia",
    minScores2023: { "A046": 52.0, "A048": 50.0, "ADSS": 60.0, "ADMM": 58.0 },
    minScores2024: { "A046": 53.0, "A048": 51.0 }
  },
  createProvince("BT", "Barletta-Andria-Trani", "Puglia"),
  createProvince("BR", "Brindisi", "Puglia"),
  createProvince("FG", "Foggia", "Puglia"),
  createProvince("LE", "Lecce", "Puglia"),
  createProvince("TA", "Taranto", "Puglia"),

  // SICILIA
  {
    id: "PA", name: "Palermo", region: "Sicilia",
    minScores2023: { "A046": 54.0, "A048": 51.0, "ADSS": 63.0, "ADMM": 60.0 },
    minScores2024: { "A046": 55.0, "A048": 52.0 }
  },
  {
    id: "CT", name: "Catania", region: "Sicilia",
    minScores2023: { "A046": 53.0, "A048": 50.0, "ADSS": 62.0, "ADMM": 59.0 },
    minScores2024: { "A046": 54.0, "A048": 51.0 }
  },
  createProvince("AG", "Agrigento", "Sicilia"),
  createProvince("CL", "Caltanissetta", "Sicilia"),
  createProvince("EN", "Enna", "Sicilia"),
  createProvince("ME", "Messina", "Sicilia"),
  createProvince("RG", "Ragusa", "Sicilia"),
  createProvince("SR", "Siracusa", "Sicilia"),
  createProvince("TP", "Trapani", "Sicilia"),

  // LIGURIA
  {
    id: "GE", name: "Genova", region: "Liguria",
    minScores2023: { "A046": 41.0, "A048": 37.0, "ADSS": 49.0, "ADMM": 46.0 },
    minScores2024: { "A046": 42.0, "A048": 38.0 }
  },
  createProvince("IM", "Imperia", "Liguria"),
  createProvince("SP", "La Spezia", "Liguria"),
  createProvince("SV", "Savona", "Liguria"),

  // FRIULI VENEZIA GIULIA
  createProvince("GO", "Gorizia", "Friuli-Venezia Giulia"),
  createProvince("PN", "Pordenone", "Friuli-Venezia Giulia"),
  createProvince("TS", "Trieste", "Friuli-Venezia Giulia"),
  createProvince("UD", "Udine", "Friuli-Venezia Giulia"),

  // TRENTINO ALTO ADIGE
  createProvince("BZ", "Bolzano", "Trentino-Alto Adige"),
  createProvince("TN", "Trento", "Trentino-Alto Adige"),

  // VALLE D'AOSTA
  createProvince("AO", "Aosta", "Valle d'Aosta"),

  // MARCHE
  createProvince("AN", "Ancona", "Marche"),
  createProvince("AP", "Ascoli Piceno", "Marche"),
  createProvince("FM", "Fermo", "Marche"),
  createProvince("MC", "Macerata", "Marche"),
  createProvince("PU", "Pesaro e Urbino", "Marche"),

  // UMBRIA
  createProvince("PG", "Perugia", "Umbria"),
  createProvince("TR", "Terni", "Umbria"),

  // ABRUZZO
  createProvince("CH", "Chieti", "Abruzzo"),
  createProvince("AQ", "L'Aquila", "Abruzzo"),
  createProvince("PE", "Pescara", "Abruzzo"),
  createProvince("TE", "Teramo", "Abruzzo"),

  // MOLISE
  createProvince("CB", "Campobasso", "Molise"),
  createProvince("IS", "Isernia", "Molise"),

  // BASILICATA
  createProvince("MT", "Matera", "Basilicata"),
  createProvince("PZ", "Potenza", "Basilicata"),

  // CALABRIA
  createProvince("CZ", "Catanzaro", "Calabria"),
  createProvince("CS", "Cosenza", "Calabria"),
  createProvince("KR", "Crotone", "Calabria"),
  createProvince("RC", "Reggio Calabria", "Calabria"),
  createProvince("VV", "Vibo Valentia", "Calabria"),

  // SARDEGNA
  createProvince("CA", "Cagliari", "Sardegna"),
  createProvince("NU", "Nuoro", "Sardegna"),
  createProvince("OR", "Oristano", "Sardegna"),
  createProvince("SS", "Sassari", "Sardegna"),
  createProvince("SU", "Sud Sardegna", "Sardegna")
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
