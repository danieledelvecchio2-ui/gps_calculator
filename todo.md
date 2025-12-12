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
