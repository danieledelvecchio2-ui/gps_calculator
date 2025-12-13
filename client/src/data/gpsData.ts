// Dati GPS Province Italiane - Generato automaticamente
// Fonte: Bollettini ufficiali primo turno 2024/2025 e 2025/2026

export interface ProvinceData {
  id: string;
  name: string;
  region: string;
  minScores2024: Record<string, number>;
  minScores2025: Record<string, number>;
  sourceUrl?: string;
}

export const provinces: ProvinceData[] = [
  // ABRUZZO
  {
    id: "CH",
    name: "Chieti",
    region: "Abruzzo",
    minScores2024: {"A021": 191.0, "A054": 136.0, "A012": 135.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzionechietipescara.it/2024/08/30/personale-docente-esito-primo-processo-ins-per-nomine-a-tempo-determinato-a-s-2024-25/"
  },
  {
    id: "AQ",
    name: "L'Aquila",
    region: "Abruzzo",
    minScores2024: {},
    minScores2025: {"A011 (F1)": 80.0, "A028 (F1)": 65.0, "ADSS (F1)": 30.0, "B014 (F1)": 13.0},
    sourceUrl: "https://lnx.csalaquila.it/wp/2025/08/30/bollettino-n-1-nomine-a-tempo-determinato-gps-3/"
  },
  {
    id: "PE",
    name: "Pescara",
    region: "Abruzzo",
    minScores2024: {},
    minScores2025: {"A023": 31.0, "A026": 37.0, "A027": 36.0, "A028": 85.0, "A034": 36.0},
    sourceUrl: "https://www.istruzionechietipescara.it/2025/08/30/bollettino-n-1-nomine-a-tempo-determinato-a-s-2025-26/"
  },
  {
    id: "TE",
    name: "Teramo",
    region: "Abruzzo",
    minScores2024: {"A054": 38.0, "A034": 43.0, "A027": 50.0},
    minScores2025: {},
    sourceUrl: "https://www.csateramo.it/wpusp/archive/pubblicazione-esiti-nomine-da-gae-e-da-gps-a-s-20242025-processo-n-2-del-30082024"
  },

  // BASILICATA
  {
    id: "MT",
    name: "Matera",
    region: "Basilicata",
    minScores2024: {},
    minScores2025: {"A015": 41.5, "A027": 45.0, "A026": 46.0, "A018": 47.0, "A021": 68.0},
    sourceUrl: "https://www.istruzionematera.it/i-bollettino-nomine-a-t-d-a-s-2025-26/"
  },
  {
    id: "PZ",
    name: "Potenza",
    region: "Basilicata",
    minScores2024: {},
    minScores2025: {"A015": 70.0, "A060": 111.0, "ADAA": 10.0, "ADEE": 10.0, "AM12": 89.0, "AM48": 50.5, "B011": 30.0, "B014": 30.0, "EEEE": 13.0, "EEEM": 40.5},
    sourceUrl: "https://www.istruzionepotenza.it/wp-content/uploads/2025/12/9_Bollettino-nomine-a-t.d.-PRIVACY.pdf"
  },

  // CALABRIA
  {
    id: "CZ",
    name: "Catanzaro",
    region: "Calabria",
    minScores2024: {"A018": 178.0, "AO55": 171.0, "A045": 166.0, "B012": 162.0, "AI24": 162.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzione.calabria.it/catanzaro/personale-docente-supplenze-annuali-sino-al-termine-della-attivita-didattiche-pubblicazione-primo-bollettino/"
  },
  {
    id: "CS",
    name: "Cosenza",
    region: "Calabria",
    minScores2024: {"A046": 121.0, "A022": 29.0, "ADSS": 26.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzione.calabria.it/cosenza/aoouspcs14029-20240906/"
  },
  {
    id: "KR",
    name: "Crotone",
    region: "Calabria",
    minScores2024: {"A015": 153.5, "B020": 153.0, "B024": 142.0, "AM56": 140.0, "AAAA": 139.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzione.calabria.it/crotone/individuazioni-per-contratti-a-tempo-determinato-personale-docente-da-gae-e-da-gps/"
  },
  {
    id: "RC",
    name: "Reggio Calabria",
    region: "Calabria",
    minScores2024: {"A011": 3.0, "A028": 11.5, "ADSS": 7.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzioneatprc.it/wp-content/uploads/2024/09/all-15041-Nomine-Bollettino.pdf"
  },
  {
    id: "VV",
    name: "Vibo Valentia",
    region: "Calabria",
    minScores2024: {},
    minScores2025: {"A011": 125.5, "A013": 102.5, "A016": 113.5, "A019": 92.0, "A028": 55.0, "ADAA": 36.0, "ADSS": 122.0},
    sourceUrl: "https://www.istruzione.calabria.it/vibovalentia/personale-docente-decreto-di-conferimento-incarichi-a-tempo-determinato-a-s-2025-26-i-bollettino/"
  },

  // CAMPANIA
  {
    id: "AV",
    name: "Avellino",
    region: "Campania",
    minScores2024: {},
    minScores2025: {"A003": 87.5, "A011": 53.0, "A027": 54.0, "A028": 54.0, "A040": 73.0, "A045": 151.0, "A060": 75.5, "ADAA": 133.0, "ADMM": 96.0},
    sourceUrl: "https://atavellino.it/elenco-degli-aspiranti-risultati-assegnatari-di-incarico-a-tempo-determinato-da-gae-e-gps-per-la-s-2025-26-prospetto-dei-posti-disponibili-aggiornato-con-linserimento-di-nuove-catt/"
  },
  {
    id: "BN",
    name: "Benevento",
    region: "Campania",
    minScores2024: {"A066": 2015.0, "AK55": 1935.0, "B003": 1865.0, "AW55": 1655.0, "AC55": 1415.0},
    minScores2025: {},
    sourceUrl: "https://www.uspbenevento.it/uat/2024/09/14/procedure-di-nomina-del-personale-docente-a-tempo-determinato-da-gae-e-gps-a-s-2024-25-ins-informatizzazione-nomine-supplenze-pubblicazione-primo-bollettino-aggiornato/"
  },
  {
    id: "CE",
    name: "Caserta",
    region: "Campania",
    minScores2024: {},
    minScores2025: {"A002 F1": 109.0, "A002 F2": 68.0, "A005 F2": 42.0, "A007 F1": 101.0, "A008 F1 S": 92.0, "A010 F2": 78.0, "A011 F1": 115.5, "A013 F1 S": 101.5, "A014 F2": 47.0, "A018 F1 S": 181.5, "A019 F1": 101.0, "A020 F2": 117.5, "A021 F1": 80.0, "A023 F2": 35.0, "A026 F1 S": 55.0, "A027 F1 S": 132.5, "A028 F1": 99.0, "A031 F2": 21.0, "A034 F2": 70.0, "A037 F1 S": 98.0},
    sourceUrl: "https://www.uat-caserta.it/2025/09/01/bollettino-totale-delle-nomine-generato-dal-sistema-informativo-del-ministero-contenente-i-nominativi-dei-soggetti-destinatari-di-una-proposta-di-contratto-a-tempo-determinato/"
  },
  {
    id: "NA",
    name: "Napoli",
    region: "Campania",
    minScores2024: {},
    minScores2025: {"A007": 1.0, "A015": 1.0, "A020": 1.0, "A031": 1.0, "A040": 1.0},
    sourceUrl: "https://www.uat-napoli.it/graduatorie-provinciali-di-supplenza-nomine-a-tempo-determinato-2025-2026-ogni-ordine-e-grado-napoli-e-provincia/"
  },
  {
    id: "SA",
    name: "Salerno",
    region: "Campania",
    minScores2024: {"A022": 27.0, "A028": 6.5, "ADSS": 20.0},
    minScores2025: {},
    sourceUrl: "https://uat-salerno.it/Documenti/CIRCOLARI/Personale-Docente-Pubblicazione-nomine-supplenze-2025-26-1-bollettino"
  },

  // EMILIA-ROMAGNA
  {
    id: "BO",
    name: "Bologna",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {"A026": 140.0, "A037": 131.0, "A046": 63.0, "ADSS": 42.0, "B020": 5.0},
    sourceUrl: "https://bo.istruzioneer.gov.it/2025/08/30/nomine-a-t-d-aspiranti-docenti-ogni-ordine-e-grado-1-turno-gps-as-2025-26/"
  },
  {
    id: "FE",
    name: "Ferrara",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {"A011": 39.5, "A020": 49.0, "A028": 67.0},
    sourceUrl: "https://fe.istruzioneer.gov.it/2025/09/01/nomine-a-td-da-gps-docenti-di-ogni-ordine-e-grado-a-s-2024-25-i-turno-2/"
  },
  {
    id: "FC",
    name: "Forlì-Cesena",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://fc.istruzioneer.gov.it/2025/08/30/supplenze-personale-docente-ed-educativo-a-s-2025-2026-turno-30-08-2025/"
  },
  {
    id: "MO",
    name: "Modena",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {"A053": 116.0, "A063": 115.5, "A061": 93.5, "B006": 73.5, "A060": 58.0},
    sourceUrl: "https://mo.istruzioneer.gov.it/2025/08/30/esiti-nomine-a-tempo-determinato-personale-docente-a-s-2025-26-i-bollettino/"
  },
  {
    id: "PR",
    name: "Parma",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {"A010": 5.0, "A011": 7.0, "A019": 10.0, "A020": 56.0, "A021": 2.0, "A026": 8.0},
    sourceUrl: "https://pr.istruzioneer.gov.it/2025/09/01/esiti-nomine-a-tempo-determinato-da-gps-a-s-2025-26-turno-del-01-09-2025/"
  },
  {
    id: "PC",
    name: "Piacenza",
    region: "Emilia-Romagna",
    minScores2024: {"A022": 13.0, "A042": 275.0, "A045": 4.0, "A052": 206.0, "A060": 272.0, "B017": 6.0, "B021": 188.0, "B026": 8.0},
    minScores2025: {},
    sourceUrl: "https://pc.istruzioneer.gov.it/2024/09/09/esiti-nomine-a-tempo-determinato-personale-docente-a-s-2024-25-i-turno/"
  },
  {
    id: "RA",
    name: "Ravenna",
    region: "Emilia-Romagna",
    minScores2024: {"A011": 147.0, "A022": 58.0, "A012": 69.0, "A013": 69.0, "A018": 234.5, "A020": 234.5, "A021": 234.5, "ADSS": 38.0, "ADEE": 10.0, "EE": 10.0},
    minScores2025: {},
    sourceUrl: "https://ra.istruzioneer.gov.it/2024/09/07/nomine-a-tempo-determinato-da-gps-personale-docente-2024-25-i-turno/"
  },
  {
    id: "RE",
    name: "Reggio Emilia",
    region: "Emilia-Romagna",
    minScores2024: {"A001 F1": 35.0, "A010 F1": 89.0, "ADAA F2": 92.0, "ADSS F2": 109.0},
    minScores2025: {},
    sourceUrl: "https://re.istruzioneer.gov.it/2024/09/07/nomine-a-tempo-determinato-personale-docente-ed-educativo-a-s-2024-2025-prima-fase/"
  },
  {
    id: "RN",
    name: "Rimini",
    region: "Emilia-Romagna",
    minScores2024: {},
    minScores2025: {"A028": 48.0, "ADSS": 76.5, "A009": 163.0, "EEEE": 7.0},
    sourceUrl: "https://rn.istruzioneer.gov.it/2025/12/11/docenti-ultimi-nominati-da-gae-gps-a-s-2025-2026-aggiornato-all11-12-2025/"
  },

  // FRIULI-VENEZIA GIULIA
  {
    id: "GO",
    name: "Gorizia",
    region: "Friuli-Venezia Giulia",
    minScores2024: {"A022": 59.0, "A026": 34.0, "A028": 80.0, "ADSS": 92.0},
    minScores2025: {},
    sourceUrl: "https://usrfvg.gov.it/it/home/menu/uffici/ufficio-territoriale-di-gorizia/notizie/ESITO-NOMINE-DOCENTI-A-T.D.-DA-GPS-A.S.-2024-25-AT-Gorizia/"
  },
  {
    id: "PN",
    name: "Pordenone",
    region: "Friuli-Venezia Giulia",
    minScores2024: {"ADEE": 70.5, "ADMM": 102.0, "ADSS": 206.0},
    minScores2025: {},
    sourceUrl: "https://usrfvg.gov.it/it/home/menu/uffici/ufficio-territoriale-di-pordenone/notizie/article/DL-19.03.2024-n.-19-art.-14-comma-1-lettera-c-bis.-Individuazione-dei-destinatari-della-proposta-di-stipula-del-contratto-a-tempo-determinato./"
  },
  {
    id: "TS",
    name: "Trieste",
    region: "Friuli-Venezia Giulia",
    minScores2024: {},
    minScores2025: {"A013": 69.0, "A018": 43.5, "A020": 38.0, "A026": 52.0, "A027": 33.5, "A028": 39.0},
    sourceUrl: "https://usrfvg.gov.it/it/home/menu/uffici/ufficio-territoriale-di-trieste/notizie/article/Bollettino-nomine-a-tempo-determinato-a.s.-2025-26-personale-docente/"
  },
  {
    id: "UD",
    name: "Udine",
    region: "Friuli-Venezia Giulia",
    minScores2024: {"B015": 5.0, "B020": 6.5, "EEEE": 7.0},
    minScores2025: {},
    sourceUrl: "https://usrfvg.gov.it/export/sites/default/it/home/menu/uffici/ufficio-territoriale-di-udine/allegati/2024-09-04_10919_AOOUSPUD_assunzioni-td-doc_Bollettino_TotaleNomine_definitivo.pdf"
  },

  // LAZIO
  {
    id: "FR",
    name: "Frosinone",
    region: "Lazio",
    minScores2024: {},
    minScores2025: {"A045": 25.0, "A063": 14.0, "ADEE": 31.0, "ADMM": 19.0},
    sourceUrl: "https://www.uspistruzione.fr.it/wp2/primo-bollettino-nomine-da-gps-della-provincia-di-frosinone-per-lanno-scolastico-2025-2026.html"
  },
  {
    id: "LT",
    name: "Latina",
    region: "Lazio",
    minScores2024: {},
    minScores2025: {"A001": 92.0, "A007": 120.0, "ADSS": 120.0, "A022": 120.0, "A046": 120.0},
    sourceUrl: "https://www.csalatina.it/jclub/images/stories/Allegato_1_-_Nomina_Tempo_Determinato_da_GPS_-_Turno_1_A.S._2025-26.pdf"
  },
  {
    id: "RI",
    name: "Rieti",
    region: "Lazio",
    minScores2024: {},
    minScores2025: {"ADMM": 45.0, "AS12": 78.0, "B020": 47.5, "EEEE": 15.0},
    sourceUrl: "https://www.usp-rieti.it/2025/11/21/personale-docente-bollettino-ins-incarichi-t-d-a-s-25-26-4/"
  },
  {
    id: "RM",
    name: "Roma",
    region: "Lazio",
    minScores2024: {},
    minScores2025: {"AS01": 0.0, "B021": 0.0, "A028": 4.0},
    sourceUrl: "https://www.atpromaistruzione.it/atp/2025/08/conferimento-incarichi-a-t-d-a-s-2025-2026-i-turno/"
  },
  {
    id: "VT",
    name: "Viterbo",
    region: "Lazio",
    minScores2024: {"AA25": 164.5, "AAAA": 48.5, "AB24": 115.5, "AB25": 60.5, "ADAA": 48.5},
    minScores2025: {},
    sourceUrl: "https://www.provveditoratostudiviterbo.it/DOCENTI/2024/Bollettino_TotaleNomine_INS_13.09.pdf"
  },

  // LIGURIA
  {
    id: "GE",
    name: "Genova",
    region: "Liguria",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.istruzionegenova.gov.it/pagine/gps-2024---i-turno---assegnazioni"
  },
  {
    id: "SP",
    name: "La Spezia",
    region: "Liguria",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.istruzionelaspezia.gov.it/pagine/individuazione-destinatari-nomine-per-supplenza-da-gps---i-turno--"
  },
  {
    id: "SV",
    name: "Savona",
    region: "Liguria",
    minScores2024: {},
    minScores2025: {"AC55 - STRUMENTO MUSICALE NEGLI ISTITUTI DI ISTRUZIONE SECONDARIA DI II GRADO (CLARINETTO)": 167.0, "A053 - STORIA DELLA MUSICA E DELLA DANZA": 132.0, "BC02 - CONVERSAZIONE IN LINGUA STRANIERA (SPAGNOLO)": 128.0},
    sourceUrl: "https://www.istruzionesavona.gov.it/pagine/nomine-per-supplenze-finalizzate-al-ruolo-2-as-20252026-"
  },

  // LOMBARDIA
  {
    id: "BG",
    name: "Bergamo",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "N/D"
  },
  {
    id: "BS",
    name: "Brescia",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A020": 27.5, "A045": 74.5, "A019": 131.0},
    sourceUrl: "https://www.mim.gov.it/web/brescia/-/nomine-a-tempo-determinato-da-gae-e-gps-esito-conferimento-nomine-a-t-d-da-di-i-e-ii-fascia-2"
  },
  {
    id: "CO",
    name: "Como",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.mim.gov.it/web/como/home"
  },
  {
    id: "CR",
    name: "Cremona",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A011": 70.0, "A028": 40.0, "A045": 58.5, "A034": 12.0},
    sourceUrl: "https://www.mim.gov.it/web/cremona/-/nomine-a-tempo-determinato-a-s-2025-26"
  },
  {
    id: "LC",
    name: "Lecco",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.voglioinsegnare.it/graduatorie-gps/gps-Lecco"
  },
  {
    id: "LO",
    name: "Lodi",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A028 F1": 92.0, "A028 F2": 34.0, "A019 F1": 93.0, "A019 F2": 82.0},
    sourceUrl: "https://www.mim.gov.it/web/lodi/-/decreto-pubblicazione-individuazione-dei-destinatari-di-contratto-a-tempo-determinato-da-gps-a-s-2025-2026-personale-docente-e-educativo"
  },
  {
    id: "MN",
    name: "Mantova",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A009": 84.0, "A011": 73.0, "ADSS": 32.0, "ADMM": 47.0},
    sourceUrl: "https://www.mim.gov.it/web/mantova/-/nomine-a-tempo-determinato-da-gps-a-s-25-26-esito-conferimento-nomine-da-i-e-ii-fascia-1"
  },
  {
    id: "MI",
    name: "Milano",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A040": 102.0, "A028": 68.0, "A019": 57.0, "A046": 41.0, "B012": 38.0},
    sourceUrl: "https://www.mim.gov.it/web/milano/-/nomina-a-tempo-determinato-da-gps-a-s-2025-2026-esito-conferimento-nomine-da-i-e-ii-fascia-"
  },
  {
    id: "MB",
    name: "Monza e Brianza",
    region: "Lombardia",
    minScores2024: {"A022": 40.0, "A028": 9.0, "ADSS": 20.0, "AAAA": 4.0},
    minScores2025: {},
    sourceUrl: "https://www.voglioinsegnare.it/graduatorie-gps/gps-monza%20e%20della%20brianza"
  },
  {
    id: "PV",
    name: "Pavia",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.mim.gov.it/web/pavia/albo-pretorio"
  },
  {
    id: "SO",
    name: "Sondrio",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A009": 192.0, "A010": 74.0, "A011": 54.5},
    sourceUrl: "https://www.cislscuolasondrio.it/2025/08/29/disponibilita-per-le-gps/"
  },
  {
    id: "VA",
    name: "Varese",
    region: "Lombardia",
    minScores2024: {},
    minScores2025: {"A020": 65.0, "A028": 9.0, "ADSS": 9.0, "A010": 24.0, "A045": 18.0, "A018": 35.0, "A019": 12.0, "A026": 25.0, "A046": 23.0, "A047": 10.0},
    sourceUrl: "https://www.mim.gov.it/web/varese/-/decreto-pubblicazione-individuazione-dei-destinatari-di-contratto-a-tempo-determinato-da-gae-e-gps-a-s-2025-2026-personale-docente-e-educativo-bolle-1"
  },

  // MARCHE
  {
    id: "AN",
    name: "Ancona",
    region: "Marche",
    minScores2024: {"A011": 70.0, "A012": 81.0, "A018": 104.0, "ADSS": 38.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzione-ancona.it/decreto-nomine-a-tempo-determinato-da-g-a-e-e-g-p-s-2024-25/"
  },
  {
    id: "AP",
    name: "Ascoli Piceno",
    region: "Marche",
    minScores2024: {"ADAA": 165.0, "ADEE": 67.5, "ADMM": 141.0, "ADSS": 122.5},
    minScores2025: {},
    sourceUrl: "https://www.uspascolipiceno.it/wordpress/decreto-prot-9217-del-21-agosto-2024-202408211900-decreto-nomine-gps-dm-111-2024-usp-ascoli-piceno-e-fermo/"
  },
  {
    id: "FM",
    name: "Fermo",
    region: "Marche",
    minScores2024: {"ADAA": 165.0, "ADEE": 67.5, "ADMM": 141.0, "ADSS": 122.5},
    minScores2025: {},
    sourceUrl: "https://www.uspascolipiceno.it/wordpress/decreto-prot-9217-del-21-agosto-2024-202408211900-decreto-nomine-gps-dm-111-2024-usp-ascoli-piceno-e-fermo/"
  },
  {
    id: "MC",
    name: "Macerata",
    region: "Marche",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://nuvola.madisoft.it/file/api/public-file-preview/MCIC820004/9c13dd74-caae-4bce-92fc-770b85a1c173"
  },
  {
    id: "PU",
    name: "Pesaro e Urbino",
    region: "Marche",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "http://www.usppesarourbino.it/"
  },

  // MOLISE
  {
    id: "CB",
    name: "Campobasso",
    region: "Molise",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://atcampobasso.it/argomento/nomine/"
  },
  {
    id: "IS",
    name: "Isernia",
    region: "Molise",
    minScores2024: {},
    minScores2025: {"A023": 29.0, "A041": 42.0, "ADSS": 146.0, "ADAA": 65.0},
    sourceUrl: "https://atpisernia.it/conferimento-nomine-a-tempo-determinato-su-posti-curriculari-e-posti-di-sostegno-del-personale-docente-da-gae-e-da-gps-a-s-2025-2026-scuola-dellinfanzia-primaria-seco"
  },

  // PIEMONTE
  {
    id: "AL",
    name: "Alessandria",
    region: "Piemonte",
    minScores2024: {"A022": 74.0, "A028": 23.0, "ADSS": 94.0, "ADEE": 12.0, "A046": 12.0},
    minScores2025: {},
    sourceUrl: "https://www.voglioinsegnare.it/graduatorie-gps/gps-Alessandria"
  },
  {
    id: "AT",
    name: "Asti",
    region: "Piemonte",
    minScores2024: {},
    minScores2025: {"AO55": 171.0, "AS2C": 139.0, "B023": 135.0, "AI55": 118.0, "AJ55": 116.0},
    sourceUrl: "https://www.istruzionepiemonte.it/alessandria-asti/gps-pubblicazione-esiti-fase1-asti/"
  },
  {
    id: "BI",
    name: "Biella",
    region: "Piemonte",
    minScores2024: {"ADEE": 7.0, "ADAA": 14.0, "EEEE": 24.0, "AA25": 33.0, "A048": 35.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzionepiemonte.it/biella/personale-docente-pubblicazione-esito-primo-turno-di-nomina-da-gps-ogni-ordine-e-grado/"
  },
  {
    id: "CN",
    name: "Cuneo",
    region: "Piemonte",
    minScores2024: {},
    minScores2025: {"ADAA": 39.5, "ADEE": 61.0, "ADMM": 89.0, "ADSS": 42.0},
    sourceUrl: "https://www.istruzionepiemonte.it/cuneo/nomine-gps-fase-1-2/"
  },
  {
    id: "NO",
    name: "Novara",
    region: "Piemonte",
    minScores2024: {},
    minScores2025: {"A008": 38.0, "A011": 64.0, "A015": 57.0, "A018": 70.0, "A020": 38.5, "A028": 44.0},
    sourceUrl: "https://www.istruzionepiemonte.it/novara/procedura-informatizzata-supplenze-esito-conferimento-incarichi-a-tempo-determinato-candidati-inseriti-nelle-graduatorie-provinciali-supplenze-gps-primo-turno-a-s-2025-2026/"
  },
  {
    id: "TO",
    name: "Torino",
    region: "Piemonte",
    minScores2024: {"AB24": 5.0, "A037": 5.5, "B021": 6.5, "A030": 7.0, "B015": 7.0},
    minScores2025: {},
    sourceUrl: "https://www.istruzionepiemonte.it/torino/2024/08/31/nota-14760-31-08-2024-primo-bollettino-di-nomine-per-supplenze-a-tempo-determinato-a-s-2024-2025-personale-docente-ed-educativo/"
  },
  {
    id: "VB",
    name: "Verbano-Cusio-Ossola",
    region: "Piemonte",
    minScores2024: {"A022": 25.5, "A028": 20.5, "ADSS": 16.5},
    minScores2025: {},
    sourceUrl: "https://www.voglioinsegnare.it/graduatorie-gps/gps-Verbano-cusio-ossola"
  },
  {
    id: "VC",
    name: "Vercelli",
    region: "Piemonte",
    minScores2024: {"A022": 127.5, "A027": 107.5, "ADSS": 49.0, "A018": 6.0},
    minScores2025: {},
    sourceUrl: "https://www.voglioinsegnare.it/graduatorie-gps/gps-Vercelli"
  },

  // PUGLIA
  {
    id: "BA",
    name: "Bari",
    region: "Puglia",
    minScores2024: {"A001": 35.0, "A012": 29.0, "A013": 41.0},
    minScores2025: {},
    sourceUrl: "https://www.uspbari.it/usp/individuazione-destinatari-della-proposta-di-stipula-del-contratto-a-tempo-determinato-da-gps-della-t-di-bari-per-la-s-20242025-turno-i.html"
  },
  {
    id: "BT",
    name: "Barletta-Andria-Trani",
    region: "Puglia",
    minScores2024: {},
    minScores2025: {"A010": 80.0, "A028": 31.0, "AAAA": 10.0},
    sourceUrl: "https://www.istruzionebat.it/2025/09/01/individuazione-destinatari-della-proposta-di-stipula-del-contratto-a-tempo-determinato-da-gpsdella-t-di-bari-per-la-s-2025-2026-turno-i/"
  },
  {
    id: "BR",
    name: "Brindisi",
    region: "Puglia",
    minScores2024: {},
    minScores2025: {"A028": 122.0, "A026": 55.0, "ADEE": 143.0, "A046": 148.0},
    sourceUrl: "https://www.istruzionebrindisi.it/primo-turno-supplenze-da-gps-posti-comuni-e-di-sostegno-tutti-gli-ordini-e-gradi-di-scuola-della-provincia-di-brindisi-a-s-2025-2026/?download=49757"
  },
  {
    id: "FG",
    name: "Foggia",
    region: "Puglia",
    minScores2024: {},
    minScores2025: {"AAAA": 166.0, "EEEE": 113.5, "ADAA": 77.0, "ADEE": 30.0, "ADSS": 118.0, "A027": 56.0},
    sourceUrl: "https://www.ustfoggia.it/2025/09/01/conferimento-delle-supplenze-da-g-a-e-e-da-g-p-s-per-la-s-2025-2026-i-turno/"
  },
  {
    id: "LE",
    name: "Lecce",
    region: "Puglia",
    minScores2024: {"ADSS": 92.0, "A012": 85.5, "A022": 85.5},
    minScores2025: {},
    sourceUrl: "https://www.ustlecce.it/index.php/personale-docente"
  },
  {
    id: "TA",
    name: "Taranto",
    region: "Puglia",
    minScores2024: {"A028": 24.0, "A012": 33.0, "A011": 71.0, "ADSS": 75.0, "A019": 96.0},
    minScores2025: {},
    sourceUrl: "https://www.usptaranto.it/2024/09/09/decreto-pubblicazione-esiti-nomine-a-t-d-gps-di-ogni-ordine-e-grado-posti-comuni-e-di-sostegno/"
  },

  // SARDEGNA
  {
    id: "CA",
    name: "Cagliari",
    region: "Sardegna",
    minScores2024: {},
    minScores2025: {"BB02": 300.0, "B016": 191.0, "AP55": 187.5},
    sourceUrl: "https://www.uspcagliari.it/bollettino_totalenomine-1-9-25h1457privacy/"
  },
  {
    id: "NU",
    name: "Nuoro",
    region: "Sardegna",
    minScores2024: {},
    minScores2025: {"ADEE": 10.0, "EEIL": 10.0, "EEEE": 10.0, "AM12": 12.0},
    sourceUrl: "https://www.mim.gov.it/web/nuoro/-/conferimenti-dei-contratti-a-tempo-determinato-a-s-2025-2026-turno-i_supplenze-scuola-infanzia-e-primaria-secondaria-di-primo-e-secondo-grado--1"
  },
  {
    id: "SS",
    name: "Sassari",
    region: "Sardegna",
    minScores2024: {},
    minScores2025: {"ADAA (Sostegno Infanzia)": 65.0, "ADEE (Sostegno Primaria)": 46.0, "ADMM (Sostegno I Grado)": 117.0, "EEEE (Posto Comune Primaria)": 46.0},
    sourceUrl: "https://www.mim.gov.it/web/sassari/-/operazioni-di-supplenza-da-gps-terza-rettifica-al-primo-turno-di-nomina-a-s-2025-26-2"
  },

  // SICILIA
  {
    id: "AG",
    name: "Agrigento",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://ag.usr.sicilia.it/conferimento-delle-supplenze-annuali-e-o-fino-al-termine-delle-attivita-didattiche-del-personale-docente-di-ogni-ordine-e-grado-a-s-2024-2025/"
  },
  {
    id: "CL",
    name: "Caltanissetta",
    region: "Sicilia",
    minScores2024: {"A034": 18.5, "A022": 79.0, "ADMM": 143.0},
    minScores2025: {},
    sourceUrl: "https://cl-en.usr.sicilia.it/conferimento-delle-supplenze-annuali-e-o-fino-al-termine-delle-attivita-didattiche-del-personale-docente-di-ogni-ordine-e-grado-a-s-2024-2025/"
  },
  {
    id: "CT",
    name: "Catania",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"A009": 56.0, "A027": 36.0, "A040": 41.0, "A060": 47.0, "ADAA": 76.0, "ADEE": 66.5, "ADMM": 66.0},
    sourceUrl: "https://www.uilscuolacatania.it/site/wp-content/uploads/2025/10/ELENCO-INDIVIDUAZIONE-NOMINE-DOCENTI-A-T.D.-A.S.-2025-2026-1.pdf"
  },
  {
    id: "EN",
    name: "Enna",
    region: "Sicilia",
    minScores2024: {"A011": 41.0, "A012": 23.0, "A027": 66.0, "A041": 76.5, "A045": 67.0},
    minScores2025: {},
    sourceUrl: "https://cl-en.usr.sicilia.it/conferimento-delle-supplenze-annuali-e-o-fino-al-termine-delle-attivita-didattiche-del-personale-docente-di-ogni-ordine-e-grado-a-s-2024-2025/"
  },
  {
    id: "ME",
    name: "Messina",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"A015": 151.0, "A045": 344.0, "A028": 97.0, "ADSS": 114.0},
    sourceUrl: "https://me.usr.sicilia.it/personale-docente-gae-gps-decreto-di-conferimento-incarichi-a-tempo-determinato-del-personale-docente-a-s-2025-26-i-turno-di-nomine/"
  },
  {
    id: "PA",
    name: "Palermo",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"A046": 26.0, "A028": 47.0, "ADSS": 33.0},
    sourceUrl: "https://pa.usr.sicilia.it/supplenze-docenti-da-gae-e-gps-a-s-2025-2026-individuazione-e-assegnazione-delle-sedi/"
  },
  {
    id: "RG",
    name: "Ragusa",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"A028 - MATEMATICA E SCIENZE": 122.0, "A011 - DISCIPLINE LETTERARIE E LATINO": 80.0},
    sourceUrl: "https://rg.usr.sicilia.it/conferimento-incarichi-annuali-e-o-fino-al-termine-delle-attivita-didattiche-del-personale-docente-di-scuola-secondaria-di-i-e-ii-grado-a-s-2025-26/"
  },
  {
    id: "SR",
    name: "Siracusa",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"AM48": 8.0, "ADEE": 8.5, "EEEM": 12.0, "EEEE": 14.0, "ADAA": 22.0},
    sourceUrl: "https://sr.usr.sicilia.it/personale-docente-decreto-di-conferimento-incarichi-a-tempo-determinato-del-personale-docente-a-s-2025-26-i-turno-di-nomina/"
  },
  {
    id: "TP",
    name: "Trapani",
    region: "Sicilia",
    minScores2024: {},
    minScores2025: {"A028": 51.5, "A026": 49.0, "ADSS": 100.0, "ADEE": 89.0, "A011": 47.0},
    sourceUrl: "https://tp.usr.sicilia.it/pubblicazione-bollettino-totale-n-1-nomine-a-tempo-determinato-personale-docente-di-ogni-ordine-e-grado-da-gps-a-s-2025-2026/"
  },

  // TOSCANA
  {
    id: "AR",
    name: "Arezzo",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"ADEE": 19.0, "A054": 22.0, "A042": 25.0, "A028": 34.0, "ADSS": 92.0},
    sourceUrl: "https://www.arezzoistruzione.it/usparezzo/index.php/docenti/graduatorie/g-p-s/1247-pubblicazione-bollettino-turno-1-gps"
  },
  {
    id: "FI",
    name: "Firenze",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"ADAA": 192.0, "A020": 181.0, "A051": 174.0, "AS48": 134.5, "AM12": 132.0},
    sourceUrl: "https://www.ust.fi.it/pubblicazione-bollettino-turno-1/"
  },
  {
    id: "GR",
    name: "Grosseto",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"B003": 217.5, "AL55": 206.0, "A018": 176.0, "A028": 53.0, "ADSS": 8.0},
    sourceUrl: "https://www.ufficioscolasticogrosseto.it/uff7/index.php/pubblicazioni/3856-30-08-2025-decreto-pubblicazione-individuazione-dei-destinatari-di-contratto-a-tempo-determinato-da-gps-a-s-2025-26-personale-docente-ed-educativo-bollettino-n-1"
  },
  {
    id: "LI",
    name: "Livorno",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"ADSS": 9.0, "AS2B": 9.0, "ADEE": 12.0},
    sourceUrl: "https://www.ustli.it/usp_livorno/index.php/docenti/gps/2102-decreto-nomine-da-gps-1-turno"
  },
  {
    id: "LU",
    name: "Lucca",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"A028": 28.5, "A018": 32.0, "A011": 51.5, "ADSS": 102.0},
    sourceUrl: "http://www.ustlucca.it/2025/08/30/personale-docente-nomine-gps-a-tempo-determinato-turno-1-a-s-2025-26-del-30-08-2025/"
  },
  {
    id: "MS",
    name: "Massa-Carrara",
    region: "Toscana",
    minScores2024: {"A022": 92.5, "ADSS": 55.0},
    minScores2025: {},
    sourceUrl: "http://www.ustlucca.it/2024/09/04/esiti-nomine-a-t-d-personale-docente-a-s-2024-25-i-turno-gps/"
  },
  {
    id: "PI",
    name: "Pisa",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"A011": 62.0, "A026": 13.0, "ADSS": 34.5},
    sourceUrl: "https://www.toscana-istruzione.it/atpisa/2025/08/30/incarichi-a-tempo-determinato-primo-turno-nomine-da-gps-a-s-2025-26/"
  },
  {
    id: "PT",
    name: "Pistoia",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://www.ufficioscolasticoprovinciale.pistoia.it/"
  },
  {
    id: "PO",
    name: "Prato",
    region: "Toscana",
    minScores2024: {},
    minScores2025: {"A005": 227.0, "A009": 89.0, "A011": 165.0, "A015": 85.0, "A018": 36.0, "A020": 99.0, "A026": 53.0, "A027": 68.0, "A028": 49.0},
    sourceUrl: "https://www.ufficioscolasticoprovinciale.prato.it/esiti-i-turno-di-nomina-gps-a-s-2025-26/"
  },
  {
    id: "SI",
    name: "Siena",
    region: "Toscana",
    minScores2024: {"AJ55 - STRUMENTO MUSICALE NEGLI ISTITUTI DI ISTRUZIONE SECONDARIA DI II GRADO (PIANOFORTE)": 253.0, "A053 - EX STORIA DELLA MUSICA": 242.0, "A054 - STORIA DELL'ARTE": 173.0},
    minScores2025: {},
    sourceUrl: "https://www.uspsi.it/?p=4024"
  },

  // TRENTINO-ALTO ADIGE
  {
    id: "TN",
    name: "Trento",
    region: "Trentino-Alto Adige",
    minScores2024: {},
    minScores2025: {"EEEE (Scuola Primaria Posto Comune)": 65.25},
    sourceUrl: "https://www.vivoscuola.it/vivoscuola/tags_view/Tematiche/Lavorare+nella+scuola/Assunzioni+a+tempo+determinato/Chiamata+unica+TD"
  },
  {
    id: "BZ",
    name: "Bolzano",
    region: "Trentino-Alto Adige",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://scuola-italiana.provincia.bz.it/it/lavorare-sistema-scolastico/operazioni-nomine"
  },

  // UMBRIA
  {
    id: "PG",
    name: "Perugia",
    region: "Umbria",
    minScores2024: {"ADSS": 4.0, "A001": 45.0, "A003": 121.0, "A005": 120.0},
    minScores2025: {},
    sourceUrl: "https://istruzione.umbria.it/ambito-territoriale-perugia/nomine-a-t-d-personale-docente-ed-educativo-a-s-2024-2025-provincia-di-perugia/"
  },
  {
    id: "TR",
    name: "Terni",
    region: "Umbria",
    minScores2024: {"AD25": 271.5, "AP55": 218.0, "A042": 99.0, "A020": 96.5, "A022": 27.0},
    minScores2025: {},
    sourceUrl: "https://istruzione.umbria.it/ambito-territoriale-terni/esiti-nomine-a-t-d-personale-docente-a-s-2024-25-provincia-di-terni/"
  },

  // VALLE D'AOSTA
  {
    id: "AO",
    name: "Aosta",
    region: "Valle d'Aosta",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://scuole.vda.it/graduatorie-regionali-supplenze-grs/biennio-anni-scolastici-2024-2025-e-2025-2026"
  },

  // VENETO
  {
    id: "BL",
    name: "Belluno",
    region: "Veneto",
    minScores2024: {},
    minScores2025: {"A028": 30.0, "A040": 18.0, "A041": 21.5, "A042": 24.0, "A044": 29.0},
    sourceUrl: "https://belluno.istruzioneveneto.gov.it/news/area-amministrativa/proposte-di-stipula-di-contratto-a-tempo-determinato-docenti-ed-educativo-da-graduatorie-provinciali-per-le-supplenze-g-p-s-di-cui-allart-2-comma-5-lettera-a-e-b-dello-m-8/"
  },
  {
    id: "PD",
    name: "Padova",
    region: "Veneto",
    minScores2024: {"A022": 33.0, "A012": 33.5, "ADSS": 34.0},
    minScores2025: {},
    sourceUrl: "https://padova.istruzioneveneto.gov.it/2024/09/06/supplenze-docenti-2024-2025-gps-bollettino-delle-assegnazioni/"
  },
  {
    id: "RO",
    name: "Rovigo",
    region: "Veneto",
    minScores2024: {},
    minScores2025: {},
    sourceUrl: "https://rovigo.istruzioneveneto.gov.it/"
  },
  {
    id: "TV",
    name: "Treviso",
    region: "Veneto",
    minScores2024: {"B016 F2": 13.5, "B017 F2": 15.0, "B014 F1": 20.5, "ADIO F1": 20.5, "A017 F1": 24.0},
    minScores2025: {},
    sourceUrl: "https://treviso.istruzioneveneto.gov.it/esito-primo-turno-di-nomine-a-tempo-determinato-docenti/"
  },
  {
    id: "VE",
    name: "Venezia",
    region: "Veneto",
    minScores2024: {},
    minScores2025: {"A002": 40.0, "A019": 187.0, "A028": 58.0, "AAAA": 11.0, "AJ56S": 36.0},
    sourceUrl: "https://www.cislscuolavenezia.it/wp-content/uploads/2025/08/BOLLETTINO-TOTALE-NOMINE-PRIMO-TURNO-SUPPLENZE-29.08.2025.pdf"
  },
  {
    id: "VR",
    name: "Verona",
    region: "Veneto",
    minScores2024: {},
    minScores2025: {"ADEE": 36.0, "ADMM": 39.0},
    sourceUrl: "https://verona.istruzioneveneto.gov.it/index.php/conferimento-supplenze-a-s-2025-2026/"
  },
  {
    id: "VI",
    name: "Vicenza",
    region: "Veneto",
    minScores2024: {},
    minScores2025: {"ADAA": 30.0, "ADEE": 30.0},
    sourceUrl: "https://vicenza.istruzioneveneto.gov.it/2025/08/30/nomine-supplenti-individuazione-dei-docenti-destinatari-per-lanno-scolastico-2025-2026-di-una-proposta-di-stipula-di-contratto-a-tempo-determinato-tutti-gli-ordini-di-scuola/"
  },

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
