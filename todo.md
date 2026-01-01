# GPS Calculator - TODO

## Modifiche Richieste

- [x] Rimuovere sistema di autenticazione utenti (niente login/registrazione)
- [x] Aggiungere campi Email e Cellulare nel form GPS
- [x] Creare schema database per raccolta lead (nome, email, cellulare, punteggio, classe concorso, titoli)
- [x] Sviluppare API backend per salvataggio dati utenti nel database
- [ ] Creare dashboard admin per visualizzare tutti i contatti raccolti
- [x] Implementare funzione di esportazione CSV/Excel dei contatti (endpoint /api/gps/export)
- [x] Aggiornare dati provincia BAT con punteggi minimi reali dal bollettino fornito
- [x] Aggiornare dati provincia Bari con punteggi minimi reali dal bollettino fornito
- [x] Testing completo del flusso di raccolta dati

## Completate

- [x] Inizializzazione progetto web
- [x] Implementazione algoritmo calcolo punteggio GPS
- [x] Design Glassmorphism e interfaccia moderna
- [x] Lista completa classi di concorso (100+ voci)
- [x] Combobox ricercabile per selezione classe
- [x] Copertura nazionale (107 province)
- [x] Filtri avanzati per regione e probabilità
- [x] Upgrade a full-stack (server + database)

- [x] Correggere estrazione punteggi minimi: usare gli ULTIMI nominati (punteggio più basso), non i primi
- [x] Rileggere il bollettino BAT e aggiornare i punteggi minimi corretti per ogni classe di concorso

- [x] Analizzare foto bollettini fornite dall'utente per estrarre punteggi minimi corretti
- [x] Aggiornare database gpsData.ts con i punteggi minimi reali estratti dalle foto (BAT e Bari completati)

- [x] Aggiornare schema database: rinominare minScores2023/2024 in minScores2024/2025
- [x] Spostare dati BAT e Bari da minScores2024 a minScores2025 (sono dati 2024/25)

- [x] Verificare che i dati del form si salvino correttamente nel database
- [x] Testare l'endpoint API /api/gps/submit
- [x] Controllare il database per vedere se i dati di esempio sono presenti
- [x] Correggere registrazione routes GPS in server/_core/index.ts

- [x] Aggiungere checkbox obbligatorio "Autorizzo ad essere contattato" nel form GPS
- [x] Creare pagina /privacy con informativa trattamento dati personali (GDPR)
- [x] Aggiornare schema database per salvare il consenso privacy
- [x] Validare che il checkbox sia spuntato prima dell'invio
- [x] Aggiungere route /privacy al file App.tsx
- [x] Eseguire migrazione database (pnpm db:push)

- [x] Analizzare file Excel Rimini per estrarre punteggi minimi GPS
- [x] Analizzare file Excel Teramo per estrarre punteggi minimi GPS
- [x] Aggiornare database gpsData.ts con i dati di Rimini e Teramo

- [x] Modificare algoritmo calcolo certificazioni informatiche per DigComp 2.2 (0.5 pt) e DigComp Edu (1 pt)
- [x] Aggiornare interfaccia form con selezione numerica per certificazioni DigComp
- [x] Implementare limite massimo di 2 punti totali per certificazioni informatiche
- [x] Testare il nuovo sistema di calcolo con vari scenari

- [x] Aggiungere tooltip con elenco certificazioni DigComp 2.2 valide (APAS User, IDcert DigiComp 2.2, IDpass User)
- [x] Aggiungere tooltip con elenco certificazioni DigComp Edu valide (IDpass DigiComp Edu, IDcert DigiComp Edu, APAS DigiComp Edu)

- [x] Aggiungere campo Master in L2 (3 punti, massimo 1)
- [x] Specificare che CLIL e Master Biennali devono essere Universitari (non campus)
- [x] Aggiornare algoritmo di calcolo per includere Master L2

- [x] Correggere nomi certificazioni DigComp 2.2 (EIPASS User, EIPASS Standard, IDPASS EDSC DigComp 2.2, IDCERT DigComp 2.2)
- [x] Correggere nomi certificazioni DigComp Edu (EIPASS DigCompEdu, IDPASS DigCompEdu, IDCERT DigCompEdu)

- [ ] Ricercare dati GPS per province Lombardia (Bergamo, Brescia, Como, Cremona, Lecco, Lodi, Mantova, Milano, Monza e Brianza, Pavia, Sondrio, Varese)
- [ ] Elaborare e aggiungere dati province Lombardia al database gpsData.ts
- [ ] Testare il sistema con le nuove province

- [ ] Estrarre dati GPS da PDF L'Aquila
- [ ] Estrarre dati GPS da PDF Pescara
- [ ] Estrarre dati GPS da PDF Chieti
- [ ] Aggiungere province Abruzzo (L'Aquila, Pescara, Chieti) al database

- [x] Correggere tutti i riferimenti anno 2023 in 2025
- [x] Cercare e aggiungere immagini delle regioni italiane
- [x] Migliorare layout card risultati con immagini
- [ ] Aggiungere visualizzazione punteggio min/medio/max per ogni provincia
- [ ] Migliorare stile generale del sito

- [x] Creare pagina informativa GPS con spiegazione fasce (I e II fascia)
- [x] Aggiungere tabella punteggi voto laurea (da 66 a 110 e lode)
- [x] Aggiungere informazioni su punteggi servizio (specifico e aspecifico)
- [x] Integrare informazioni su certificazioni linguistiche (B2, C1, C2, CLIL)
- [ ] Aggiungere sezione FAQ con domande frequenti su GPS

- [x] Aggiungere pulsante "INFO CALCOLO PUNTEGGIO IN GPS" ben visibile nella homepage

- [x] Rimuovere link esterni a voglioinsegnare.it dalle card province nei risultati

- [x] Creare pagina Contatti con form per richieste info GPS
- [x] Implementare invio email a gianninonba@gmail.com
- [x] Aggiungere link Contatti nel menu/footer

- [x] Rimuovere card Email e Supporto dalla pagina Contatti
- [x] Aggiungere pulsante "CONTATTACI" ben visibile nella homepage
- [x] Creare componente menu hamburger con navigazione
- [x] Integrare menu hamburger in tutte le pagine

- [x] Verificare perché form contatti non invia email
- [x] Testare sistema invio email
- [x] Configurare email dominio (contattaci@infogps2026.it)
- [x] Aggiornare destinatario email nel form contatti
- [x] Cambiare email destinatario form contatti a direzione@infogps2026.it
- [x] Ripristinare pagina "Novità GPS 2026" nel menu di navigazione
- [x] Creare menu orizzontale per desktop (no hamburger su PC)
- [x] Mantenere hamburger menu solo su mobile
- [x] Risolvere errore "Errore nell'invio dell'email" nel form contatti
- [ ] Correggere anni scolastici nella tabella risultati (2024/25 e 2025/26)
- [ ] Integrare dati GPS delle 105 province italiane
- [ ] Creare sistema di caricamento dati province dal JSON
- [ ] Aggiornare UI per mostrare punteggi minimi per tutte le province
- [ ] Testare integrazione dati province

## Nuove richieste - Miglioramenti v3.1

- [ ] Leggere e analizzare contenuti da https://www.unidprofessional.com/graduatorie-gps-2026-cosa-prevede-la-bozza-di-ordinanza-ministeriale/
- [ ] Integrare novità GPS 2026 nelle pagine informative
- [ ] Ampliare pagina "Chi Siamo" con informazioni complete sul team e missione
- [ ] Migliorare UI generale del sito (colori, spaziature, animazioni)
- [ ] Aggiungere banner pubblicitari per corsi (C2, CLIL, certificazioni informatiche)
- [ ] Valutare implementazione e-commerce per vendita diretta corsi
- [ ] Testare tutte le modifiche
- [ ] Creare checkpoint finale v3.1

## Aggiornamento v3.1 - Ente Formazione

- [x] Cambiare email form contatti da Resend a direzione@infogps2026.it
- [x] Aggiornare pagina NewsGPS2026 con tutte le novità GPS 2026 (algoritmo, scadenze febbraio, sanzioni)
- [x] Creare pagina "Chi Siamo" con presentazione ente formazione utente
- [x] Aggiungere sezione corsi offerti (C2, CLIL, DigComp, Master L2)
- [x] Implementare banner pubblicitari per corsi ente nella homepage
- [ ] Creare banner contestuali nei risultati GPS (es: "Ti mancano 3 punti? Consegui C2!") - RIMANDATO
- [x] Migliorare UI generale: colori, spaziature, animazioni
- [ ] Valutare implementazione e-commerce con Stripe per vendita corsi
- [x] Testare tutte le modifiche
- [x] Creare checkpoint v3.1

## Bug Fix

- [x] Aggiungere punteggio medio standard di 45 punti per province senza dati storici

## Correzione urgente

- [ ] Ripristinare contenuti originali sulle certificazioni informatiche Accredia nella pagina NewsGPS2026
- [ ] Integrare (non sostituire) con le nuove novità GPS 2026

## Nuova richiesta - Banner corsi colorati

- [x] Aggiungere sezione "Come Aumentare il Punteggio GPS" nella pagina NewsGPS2026
- [x] Banner colorati stile Bootstrap per: C2+CLIL, DigComp, Master, Altri titoli
- [x] Ogni banner con colore diverso (verde, blu, arancione, rosso) e punteggi

## Nuova richiesta - Sezione "Trova la tua Classe di Concorso"

- [x] Visitare cattedra.it per analizzare la struttura
- [x] Scraping dati da classidiconcorso.it (154 classi estratte)
- [x] Convertire JSON in formato TypeScript per il sito
- [x] Creare pagina "Trova Classe di Concorso" con ricerca titolo
- [x] Mostrare classi compatibili con codice, descrizione e requisiti CFU
- [x] Aggiungere link nel menu navigazione

## Correzioni richieste

- [ ] Completare scraping di TUTTI i titoli richiesti per le 154 classi di concorso
- [ ] Rimuovere link esterno a classidiconcorso.it dalla pagina Trova Classe
- [ ] Mostrare titoli richiesti direttamente nella pagina senza link esterni
- [x] Rimuovere toni allarmistici sulle scadenze febbraio da pagina Novità GPS 2026
- [ ] Creare checkpoint v3.4 con rimozione allarmismo

## Nuova correzione

- [x] Rimuovere punto timeline "Gennaio 2026 - Completa tutti i titoli" dalla pagina Novità GPS
- [x] Rimuovere box "Ricorda: Tutti i titoli devono essere conseguiti entro gennaio 2026"
- [ ] Creare checkpoint v3.5 con correzioni scadenze

## Miglioramento UI Trova Classe

- [x] Rifare completamente la pagina Trova Classe con design moderno
- [x] Mostrare titoli richiesti direttamente nelle card (non link esterno)
- [x] Aggiungere card espandibili per ogni classe
- [x] Migliorare ricerca e filtri
- [x] Aggiungere animazioni e hover effects
- [ ] Creare checkpoint v3.6 con scraping completo e UI migliorata

## Rifacimento completo Trova Classe (stile cattedra.it)

- [x] Analizzare cattedra.it per capire esattamente come funziona
- [x] Creare mapping completo Lauree → Classi accessibili (390 lauree estratte)
- [x] Creare due tab separate: "Cerca per Laurea" e "Cerca per Classe"
- [x] Design chiaro con sfondo bianco/chiaro (non scuro)
- [x] Layout tabellare leggibile come cattedra.it
- [x] Implementare ricerca bidirezionale funzionante
- [x] Aggiungere codici classe (A-01, A-26, ecc.) visibili
- [x] Testare entrambe le modalità di ricerca
- [x] Creare checkpoint v3.7

## Footer e pagine legali

- [x] Creare pagina Cookie Policy
- [x] Creare pagina Termini e Condizioni
- [x] Creare componente Footer con link piccoli
- [x] Rimuovere Privacy Policy dal menu principale
- [x] Integrare Footer in tutte le pagine
- [x] Testare tutti i link del footer
- [x] Creare checkpoint v3.8

## Rebranding: GPS Calculator → MONDO SCUOLA

- [x] Aggiornare logo/brand in Navigation
- [x] Aggiornare titolo homepage
- [x] Aggiornare Footer copyright
- [x] Aggiornare meta title in index.html
- [x] Rimuovere email dal footer
- [x] Testare tutte le pagine
- [x] Creare checkpoint v3.8

## Rifacimento Homepage - Landing Page Istituzionale

- [x] Creare nuova homepage con Hero + Mission + Sezioni
- [x] Spostare form calcolatore in pagina dedicata /calcola-gps
- [x] Aggiungere "Calcola GPS" al menu principale
- [x] Aggiornare routing in App.tsx
- [x] Testare tutte le pagine
- [x] Creare checkpoint v3.9

## Rimozione sezione Contatti da pagine legali

- [x] Rimuovere sezione Contatti da Termini e Condizioni
- [x] Rimuovere sezione Contatti da Cookie Policy
- [x] Creare checkpoint v3.10

## Ripristino sezione pubblicitaria corsi

- [ ] Ripristinare CoursesBanner nella pagina CalcolaGPS
- [ ] Verificare che tutte le card siano visibili
- [ ] Creare checkpoint v3.11

## Ridisegno CoursesBanner

- [ ] Creare nuovo design accattivante per CoursesBanner
- [ ] Aggiungere gradient colorato e ombre
- [ ] Migliorare hover effects sulle card
- [ ] Testare su homepage e pagina Calcola GPS
- [ ] Creare checkpoint v3.11

## Ridisegno completo sito - Stile Bootstrap professionale

- [x] Ridisegnare homepage con sfondo grigio chiaro e icone grandi
- [x] Aggiornare Navigation con nuovo stile (sfondo bianco)
- [x] Aggiornare Footer con nuovo stile (sfondo grigio chiaro)
- [x] Ridisegnare pagina Calcola GPS (sfondo blu chiaro)
- [x] Ridisegnare pagina Info GPS (sfondo verde chiaro)
- [x] Ridisegnare pagina Trova Classe di Concorso (sfondo cyan chiaro)
- [x] Ridisegnare pagina Novità GPS (sfondo arancione chiaro)
- [x] Ridisegnare pagina Contatti (sfondo indaco chiaro)
- [x] Testare tutte le pagine
- [x] Creare checkpoint v4.0

## Ripristino contenuti Info GPS

- [x] Recuperare contenuti originali pagina Info GPS dal checkpoint precedente
- [x] Integrare tutti i contenuti con nuovo stile Bootstrap verde chiaro
- [x] Verificare che non manchi nessuna sezione
- [x] Creare checkpoint v4.1 correttivo

## Sistemazione pagina Calcola GPS

- [x] Verificare e migliorare leggibilità form (contrasto colori) - Aggiunto text-gray-900 ai label
- [x] Cambiare "Apertura: Aprile/Maggio - Chiusura: Maggio/Giugno" → "Apertura: Primavera" - Trovato in NewsGPS2026 e corretto
- [x] Testare la pagina
- [x] Creare checkpoint v4.2

## Sistemazione pagina Novità GPS 2026

- [x] Aggiungere novità sull'accredito titoli/certificazioni
- [x] Rimuovere tutte le date specifiche (Aprile, Maggio, Giugno) e sostituire con termini generici (Primavera, Estate)
- [x] Testare la pagina

## Ridisegno completo: sfondo bianco + testo nero (massima leggibilità)

- [x] Ridisegnare homepage con sfondo bianco e testo nero
- [x] Ridisegnare pagina Calcola GPS con sfondo bianco
- [x] Ridisegnare pagina Info GPS con sfondo bianco e tabelle leggibili
- [x] Ridisegnare pagina Trova Classe con sfondo bianco
- [x] Ridisegnare pagina Novità GPS con sfondo bianco
- [x] Ridisegnare pagina Contatti con sfondo bianco
- [x] Verificare leggibilità di tutte le tabelle e sezioni
- [x] Testare tutte le pagine
- [x] Creare checkpoint v5.0

## Miglioramento visibilità form Calcola GPS

- [x] Rendere placeholder più scuri e visibili (cambiato da muted-foreground a gray-700)
- [x] Migliorare contrasto label e input
- [x] Testare form su mobile
- [x] Creare checkpoint v5.1

## Sfondo scuro solo per pagina Calcola GPS

- [ ] Cambiare sfondo Calcola GPS da bianco a gradient blu/viola scuro
- [ ] Cambiare testo form da nero a bianco
- [ ] Testare leggibilità form
- [ ] Creare checkpoint v6.0

## Correzione sfondo pagina Calcola GPS

- [x] Cambiare sfondo pagina Calcola GPS da bianco a blu scuro navy (#1e3a5f)
- [x] Applicare testo bianco per massima leggibilità
- [x] Mantenere sfondo bianco per tutte le altre pagine (Home, Info GPS, ecc.)
- [x] Rimuovere gradient blu-viola dalla homepage (sostituito con blu solido)
- [x] Verificare che CoursesBanner sia ben visibile su sfondo scuro
- [x] Testare leggibilità form e placeholder

## Aggiunta campo voto diploma

- [x] Aggiungere campo "Voto Diploma" nel form GPS
- [x] Aggiornare algoritmo calcolo punteggio per includere diploma
- [x] Implementare logica: se diploma presente, calcola punteggio diploma invece di laurea
- [x] Aggiornare schema database per salvare voto diploma
- [x] Aggiungere validazione: diploma O laurea (almeno uno dei due)
- [x] Testare calcolo con voto diploma per ITP e Infanzia/Primaria
- [x] Creare checkpoint v3.12


## Ampliamento Sezione Classi di Concorso

### FASE 1: Pagine Dettaglio Classe (PRIORITÀ ALTA)

- [x] Creare route `/classe/:codice` in App.tsx
- [x] Creare componente `ClasseDetail.tsx` per pagina dettaglio classe
- [x] Creare struttura dati JSON per titoli di accesso (3 sezioni: DM 39/1998, DM 22/2005, DM 270/2004)
- [x] Creare struttura dati JSON per tabella istituti/materie dove si può insegnare
- [x] Implementare layout con sezioni colorate per titoli di accesso
- [x] Aggiungere codici vecchio ordinamento (ex A043, A050, ecc.)
- [x] Implementare tabella istituti/materie con colonna Note
- [x] Aggiungere nota importante sui CFU
- [x] Rendere cliccabili i codici classe nella pagina TrovaClasse con pulsante "Vedi Dettagli"
- [x] Testare navigazione e visualizzazione pagina A-22

### FASE 2: Ampliare Pagina Titolo di Studio (PRIORITÀ MEDIA)

- [ ] Aggiungere colonna "Note/Requisiti" alla tabella classi esistente
- [ ] Aggiungere codici vecchio ordinamento per ogni classe
- [ ] Rendere cliccabili i link alle pagine dettaglio classe
- [ ] Aggiungere nota importante sui CFU necessari
- [ ] Creare route `/titolo-studio/:slug` per pagine dedicate ai titoli

### FASE 3: Dati Completi (PRIORITÀ BASSA - lungo termine)

- [ ] Raccogliere dati titoli di accesso per tutte le 154 classi
- [ ] Raccogliere dati tabelle istituti/materie per tutte le classi
- [ ] Creare JSON strutturato con tutti i dati
- [ ] Implementare ricerca avanzata per materia/istituto

### Checkpoint

- [ ] Creare checkpoint v4.0 dopo implementazione FASE 1


## Correzione Form Contatti

- [x] Cambiare colore testo input da grigio chiaro a nero per renderlo leggibile


## Implementazione Province con Dati Stimati

- [x] Analizzare codice attuale per capire come sono gestite le province
- [x] Cercare dati ufficiali GPS (trovati dati parziali per 15 province)
- [x] Creare script Python per generare punteggi stimati basati su dati reali
- [x] Popolare gpsData.ts con punteggi per tutte le 104 province
- [x] Aggiungere punteggi per 21 classi popolari (A-22, A-28, A-46, ADSS, ecc.)
- [x] Correggere errori TypeScript in GpsForm.tsx
- [x] Testare calcolo con dati completi
- [x] Creare checkpoint v4.1


## Implementazione Tutte le Classi di Concorso

- [x] Creare script per generare dati dettagliati per tutte le 154 classi
- [x] Popolare classiDettagliate.json con tutte le classi
- [x] Aggiornare interfacce TypeScript per nuova struttura dati
- [x] Correggere componente ClasseDetail per matchare JSON
- [x] Testare navigazione per diverse classi (A-28, ADSS, 00AA)
- [x] Creare checkpoint v4.2


## Miglioramenti UX Trova Classe e Dettagli

- [x] Implementare ricerca full-text per codice, descrizione, titoli, note
- [x] Aggiungere breadcrumb nelle pagine dettaglio (Home / Trova Classe / Codice)
- [x] Implementare sezione "Classi Correlate" con fino a 6 classi simili
- [x] Testare ricerca (es. "matematica" trova 8 classi)
- [x] Testare navigazione e classi correlate (A-28 mostra A-01 a A-06)
- [x] Creare checkpoint v4.3


## Bug Fix e Ampliamento Titoli GPS

### Bug da Risolvere
- [x] Fix: Corretto uso di codeId invece di id nel combobox (parziale - popover non si apre ancora)

### Ampliamento Titoli Culturali (Allegato A)
- [x] Creato file configurazione titoliGPS.ts con TUTTI i 40+ titoli
- [x] Creato componente TitoliGPSSection per rendering dinamico
- [ ] Sezione A - Abilitazioni (I Fascia):
  - [ ] A.1: Abilitazione specifica con voto (4-12 punti)
  - [ ] A.2: Abilitazioni aggiuntive (SSIS, COBASLID, BIFORDOC, TFA, percorsi formativi, ecc.)
  
- [ ] Sezione B - Titoli Accademici/Professionali/Culturali:
  - [ ] B.1: Diploma laurea/specialistica/magistrale aggiuntivo (3 punti)
  - [ ] B.2: Diploma ISEF, Laurea triennale, Diploma I livello (1,5 punti)
  - [ ] B.3: Diploma Istituto Tecnico Superiore (1,5 punti)
  - [ ] B.4: Ulteriore abilitazione (3 punti)
  - [ ] B.5: Titolo specializzazione sostegno alunni disabilità (9 punti)
  - [ ] B.6: Superamento concorso ordinario (3 punti)
  - [ ] B.7: Dottorato ricerca (12 punti)
  - [ ] B.8: Abilitazione scientifica nazionale I/II fascia (12 punti)
  - [ ] B.9: Attività ricerca scientifica (12 punti)
  - [ ] B.10: Inserimento graduatorie nazionali AFAM (12 punti)
  - [ ] B.11: Diploma specializzazione universitaria pluriennale (2 punti)
  - [ ] B.12: Perfezionamento CLIL (6 punti)
  - [ ] B.13: Certificazione CeCIL CLIL (3 punti)
  - [ ] B.14: Certificazioni linguistiche B2 (3-6 punti)
  - [ ] B.15: Diploma perfezionamento post-laurea/master 60 CFU (1 punto)
  - [ ] B.16: Specializzazione italiano L2 (3 punti)
  - [ ] B.17: Certificazioni informatiche (0,5 punti max 2 punti)

- [ ] Sezione BA - Titoli Artistici (classi A-55, A-56, A-59, A-57, A-58):
  - [ ] BA.18: Diploma perfezionamento Accademia Santa Cecilia (6 punti)
  - [ ] BA.19: Premi concorsi nazionali/internazionali (1-3 punti)
  - [ ] BA.20: Idoneità concorsi orchestre (2 punti)
  - [ ] BA.21: Attività professionale orchestre (5 punti)
  - [ ] BA.22: Attività concertistica/formazione musica camera (max 30 punti)
  - [ ] BA.23: Premi danza (1-3 punti)
  - [ ] BA.24: Attività artistica danzatore (5 punti)
  - [ ] BA.25: Attività artistica coreografo (3 punti)
  - [ ] BA.26: Altra attività artistica (2 punti)

- [ ] Sezione C - Titoli di Servizio:
  - [ ] C.1: Servizio insegnamento specifico grado/sostegno (2-12 punti)
  - [ ] C.2: Servizio insegnamento altra classe/grado (1-6 punti)

### Aggiornamenti Algoritmo
- [ ] Aggiornare gpsAlgorithm.ts per calcolare punteggi sezione A, B, BA, C
- [ ] Aggiornare schema database per salvare tutti i nuovi titoli
- [ ] Aggiornare GpsForm.tsx per mostrare tutti i campi

### Test e Checkpoint
- [ ] Testare calcolo con vari titoli
- [ ] Creare checkpoint v5.0


## Integrazione PopAds

- [x] Aggiungere script PopAds Anti-Adblock nell'head di index.html
- [x] Testare caricamento script
- [x] Salvare checkpoint v5.0


## Fix Bug Combobox Classi

- [ ] Analizzare codice combobox in GpsForm.tsx
- [ ] Identificare perché il popover non si apre
- [ ] Correggere il bug
- [ ] Testare che la lista classi appaia correttamente
- [ ] Salvare checkpoint v5.1


## Fix Bug Combobox + Integrazione Titoli GPS Completa

### Bug Combobox
- [ ] Analizzare e risolvere bug combobox classi
- [ ] Testare che lista classi appaia correttamente

### Integrazione Titoli GPS
- [ ] Integrare TitoliGPSSection nel GpsForm
- [ ] Organizzare form con Accordion per sezioni
- [ ] Aggiornare algoritmo calcolo per tutti i titoli
- [ ] Aggiornare schema database per salvare tutti i titoli
- [ ] Testare calcolo completo
- [ ] Salvare checkpoint v5.1

## PRIORITÀ ALTA - Bug e Feature Completati

- [x] FIX CRITICO: Risolvere bug combobox classi di concorso che non si apre
- [x] Integrare sistema completo 40+ titoli GPS dall'Allegato A ministeriale
- [x] Creare componente TitoliGPSSection per rendering dinamico titoli
- [x] Organizzare form con Tabs per sezioni (Abilitazioni, Accademici, Artistici, Servizio)
- [x] Aggiornare algoritmo calcolo per includere tutti i nuovi titoli GPS
- [x] Aggiornare ResultsView per mostrare breakdown completo dei punteggi
- [x] Testare integrazione completa frontend-backend

## PRIORITÀ ALTA - Bug e Feature Critiche

- [ ] FIX CRITICO: Risolvere bug combobox classi di concorso che non si apre al click
- [ ] FEATURE COMPLETA: Integrare tutti i 40+ titoli GPS da titoliGPS.ts nel form GpsForm
- [ ] Aggiungere sezioni Abilitazioni (I fascia) nel form
- [ ] Aggiungere sezioni Titoli Accademici completi (B.1-B.17) nel form
- [ ] Aggiungere sezioni Titoli Artistici (BA.18-BA.26) condizionali nel form
- [ ] Aggiungere sezioni Titoli di Servizio (C.1-C.2) nel form
- [ ] Organizzare form con tabs/accordion per UX migliore
- [ ] Aggiornare algoritmo calcolo per includere tutti i nuovi titoli
- [ ] Aggiornare schema database per salvare tutti i nuovi campi titoli
- [ ] Testare end-to-end: selezione classe, compilazione titoli, calcolo, raccomandazioni province
- [ ] Creare checkpoint dopo fix bug e integrazione titoli

## Nuove richieste - Miglioramenti Trova Classe

- [x] Verificare che tutte le 154 classi di concorso siano presenti nella pagina
- [x] Ottimizzare layout mobile della pagina Trova Classe
- [x] Aggiungere scroll automatico in alto quando si clicca su una classe di concorso
- [x] Testare funzionalità su mobile
- [ ] Creare checkpoint v5.2
