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
