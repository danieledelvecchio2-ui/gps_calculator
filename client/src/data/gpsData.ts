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
  // INFANZIA E PRIMARIA
  { id: "AAAA", label: "AAAA - Infanzia posto comune" },
  { id: "EEEE", label: "EEEE - Primaria posto comune" },
  { id: "ADAA", label: "ADAA - Sostegno Infanzia" },
  { id: "ADEE", label: "ADEE - Sostegno Primaria" },
  { id: "EEEM", label: "EEEM - Educazione motoria nella primaria" },

  // SOSTEGNO SECONDARIA
  { id: "ADMM", label: "ADMM - Sostegno Secondaria I grado" },
  { id: "ADSS", label: "ADSS - Sostegno Secondaria II grado" },

  // TABELLA A (NUOVE CLASSI DI CONCORSO)
  { id: "A001", label: "A001 - Arte e immagine nella scuola secondaria di I grado" },
  { id: "A002", label: "A002 - Design dei metalli, dell'oreficeria, delle pietre dure e delle gemme" },
  { id: "A003", label: "A003 - Design della ceramica" },
  { id: "A004", label: "A004 - Design del libro" },
  { id: "A005", label: "A005 - Design del tessuto e della moda" },
  { id: "A006", label: "A006 - Design del vetro" },
  { id: "A007", label: "A007 - Discipline audiovisive" },
  { id: "A008", label: "A008 - Discipline geometriche, architettura, design d'arredamento e scenotecnica" },
  { id: "A009", label: "A009 - Discipline grafiche, pittoriche e scenografiche" },
  { id: "A010", label: "A010 - Discipline grafico-pubblicitarie" },
  { id: "A011", label: "A011 - Discipline letterarie e latino" },
  { id: "A012", label: "A012 - Discipline letterarie negli istituti di istruzione secondaria di II grado" },
  { id: "A013", label: "A013 - Discipline letterarie, latino e greco" },
  { id: "A014", label: "A014 - Discipline plastiche, scultoree e scenoplastiche" },
  { id: "A015", label: "A015 - Discipline sanitarie" },
  { id: "A016", label: "A016 - Disegno artistico e modellazione odontotecnica" },
  { id: "A017", label: "A017 - Disegno e storia dell'arte negli istituti di istruzione secondaria di II grado" },
  { id: "A018", label: "A018 - Filosofia e Scienze umane" },
  { id: "A019", label: "A019 - Filosofia e Storia" },
  { id: "A020", label: "A020 - Fisica" },
  { id: "A021", label: "A021 - Geografia" },
  { id: "A022", label: "A022 - Italiano, storia, geografia nella scuola secondaria di I grado" },
  { id: "A023", label: "A023 - Lingua italiana per discenti di lingua straniera" },
  { id: "A024", label: "A024 - Lingue e culture straniere negli istituti di istruzione s. di II grado (Cinese)" },
  { id: "A025", label: "A025 - Lingua inglese e seconda lingua comunitaria nella scuola secondaria di I grado" },
  { id: "A026", label: "A026 - Matematica" },
  { id: "A027", label: "A027 - Matematica e Fisica" },
  { id: "A028", label: "A028 - Matematica e Scienze" },
  { id: "A029", label: "A029 - Musica negli istituti di istruzione secondaria di II grado" },
  { id: "A030", label: "A030 - Musica nella scuola secondaria di I grado" },
  { id: "A031", label: "A031 - Scienze degli alimenti" },
  { id: "A032", label: "A032 - Scienze della geologia e della mineralogia" },
  { id: "A033", label: "A033 - Scienze e tecnologie aeronautiche" },
  { id: "A034", label: "A034 - Scienze e tecnologie chimiche" },
  { id: "A035", label: "A035 - Scienze e tecnologie della calzatura e della moda" },
  { id: "A036", label: "A036 - Scienze e tecnologie della logistica" },
  { id: "A037", label: "A037 - Scienze e tecnologie delle costruzioni, tecnologie e tecniche di rappresentazione grafica" },
  { id: "A038", label: "A038 - Scienze e tecnologie delle costruzioni aeronautiche" },
  { id: "A039", label: "A039 - Scienze e tecnologie delle costruzioni navali" },
  { id: "A040", label: "A040 - Scienze e tecnologie elettriche ed elettroniche" },
  { id: "A041", label: "A041 - Scienze e tecnologie informatiche" },
  { id: "A042", label: "A042 - Scienze e tecnologie meccaniche" },
  { id: "A043", label: "A043 - Scienze e tecnologie nautiche" },
  { id: "A044", label: "A044 - Scienze e tecnologie tessili, dell'abbigliamento e della moda" },
  { id: "A045", label: "A045 - Scienze economico-aziendali" },
  { id: "A046", label: "A046 - Scienze giuridico-economiche" },
  { id: "A047", label: "A047 - Scienze matematiche applicate" },
  { id: "A048", label: "A048 - Scienze motorie e sportive negli istituti di istruzione secondaria di II grado" },
  { id: "A049", label: "A049 - Scienze motorie e sportive nella scuola secondaria di I grado" },
  { id: "A050", label: "A050 - Scienze naturali, chimiche e biologiche" },
  { id: "A051", label: "A051 - Scienze, tecnologie e tecniche agrarie" },
  { id: "A052", label: "A052 - Scienze, tecnologie e tecniche di produzioni animali" },
  { id: "A053", label: "A053 - Storia della musica" },
  { id: "A054", label: "A054 - Storia dell'arte" },
  { id: "A055", label: "A055 - Strumento musicale negli istituti di istruzione secondaria di II grado" },
  { id: "A056", label: "A056 - Strumento musicale nella scuola secondaria di I grado" },
  { id: "A057", label: "A057 - Tecnica della danza classica" },
  { id: "A058", label: "A058 - Tecnica della danza contemporanea" },
  { id: "A059", label: "A059 - Tecniche di accompagnamento alla danza e teoria, pratica musicale per la danza" },
  { id: "A060", label: "A060 - Tecnologia nella scuola secondaria di I grado" },
  { id: "A061", label: "A061 - Tecnologie e tecniche delle comunicazioni multimediali" },
  { id: "A062", label: "A062 - Tecnologie e tecniche per la grafica" },
  { id: "A063", label: "A063 - Tecnologie musicali" },
  { id: "A064", label: "A064 - Teoria, analisi e composizione" },
  { id: "A065", label: "A065 - Teoria e tecnica della comunicazione" },
  { id: "A066", label: "A066 - Trattamento testi, dati ed applicazioni. Informatica" },

  // LINGUE STRANIERE (NUOVI CODICI)
  { id: "AA24", label: "AA24 - Lingue e culture straniere (Francese)" },
  { id: "AB24", label: "AB24 - Lingue e culture straniere (Inglese)" },
  { id: "AC24", label: "AC24 - Lingue e culture straniere (Spagnolo)" },
  { id: "AD24", label: "AD24 - Lingue e culture straniere (Tedesco)" },
  { id: "AE24", label: "AE24 - Lingue e culture straniere (Russo)" },
  { id: "AF24", label: "AF24 - Lingue e culture straniere (Arabo)" },
  { id: "AG24", label: "AG24 - Lingue e culture straniere (Cinese)" },
  { id: "AH24", label: "AH24 - Lingue e culture straniere (Giapponese)" },
  { id: "AI24", label: "AI24 - Lingue e culture straniere (Ebraico)" },
  { id: "AJ24", label: "AJ24 - Lingue e culture straniere (Persiano)" },
  { id: "AK24", label: "AK24 - Lingue e culture straniere (Serbo-Croato)" },
  { id: "AL24", label: "AL24 - Lingue e culture straniere (Albanese)" },
  { id: "AM24", label: "AM24 - Lingue e culture straniere (Neo-greco)" },
  { id: "AN24", label: "AN24 - Lingue e culture straniere (Portoghese)" },
  { id: "AO24", label: "AO24 - Lingue e culture straniere (Turco)" },
  { id: "AP24", label: "AP24 - Lingue e culture straniere (Polacco)" },
  { id: "AQ24", label: "AQ24 - Lingue e culture straniere (Rumeno)" },
  { id: "AR24", label: "AR24 - Lingue e culture straniere (Sloveno)" },

  // TABELLA B (ITP - INSEGNANTI TECNICO PRATICI)
  { id: "B001", label: "B001 - Attività pratiche speciali" },
  { id: "B002", label: "B002 - Conversazione in lingua straniera" },
  { id: "B003", label: "B003 - Laboratori di Fisica" },
  { id: "B004", label: "B004 - Laboratori di scienze e tecnologie delle costruzioni" },
  { id: "B005", label: "B005 - Laboratorio di logistica" },
  { id: "B006", label: "B006 - Laboratorio di odontotecnica" },
  { id: "B007", label: "B007 - Laboratorio di ottica" },
  { id: "B008", label: "B008 - Laboratori di produzioni industriali ed artigianali della ceramica" },
  { id: "B009", label: "B009 - Laboratori di scienze e tecnologie aeronautiche" },
  { id: "B010", label: "B010 - Laboratori di scienze e tecnologie delle costruzioni aeronautiche" },
  { id: "B011", label: "B011 - Laboratori di scienze e tecnologie agrarie" },
  { id: "B012", label: "B012 - Laboratori di scienze e tecnologie chimiche e microbiologiche" },
  { id: "B013", label: "B013 - Laboratori di scienze e tecnologie della calzatura e della moda" },
  { id: "B014", label: "B014 - Laboratori di scienze e tecnologie delle costruzioni" },
  { id: "B015", label: "B015 - Laboratori di scienze e tecnologie elettriche ed elettroniche" },
  { id: "B016", label: "B016 - Laboratori di scienze e tecnologie informatiche" },
  { id: "B017", label: "B017 - Laboratori di scienze e tecnologie meccaniche" },
  { id: "B018", label: "B018 - Laboratori di scienze e tecnologie nautiche" },
  { id: "B019", label: "B019 - Laboratori di servizi di ricettività alberghiera" },
  { id: "B020", label: "B020 - Laboratori di servizi enogastronomici, settore cucina" },
  { id: "B021", label: "B021 - Laboratori di servizi enogastronomici, settore sala e vendita" },
  { id: "B022", label: "B022 - Laboratori di tecnologie e tecniche delle comunicazioni multimediali" },
  { id: "B023", label: "B023 - Laboratori per i servizi socio-sanitari" },
  { id: "B024", label: "B024 - Laboratorio di scienze e tecnologie nautiche" },
  { id: "B025", label: "B025 - Laboratorio di scienze e tecnologie delle costruzioni navali" },
  { id: "B026", label: "B026 - Laboratorio di tecnologie del legno" },
  { id: "B027", label: "B027 - Laboratorio di tecnologie del marmo" },
  { id: "B028", label: "B028 - Laboratorio di tecnologie orafe" },
  { id: "B029", label: "B029 - Gabinetto fisioterapico" },
  { id: "B030", label: "B030 - Addetto all'ufficio tecnico" },
  { id: "B031", label: "B031 - Esercitazioni pratiche per ciechi" },
  { id: "B032", label: "B032 - Esercitazioni di pratica professionale" },
  { id: "B033", label: "B033 - Assistente di Laboratorio" }
];
