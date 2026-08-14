# TODO - MONDO SCUOLA GPS Calculator

## Sezione Corsi eCampus + Pannello Admin - PRIORITÀ ALTA

- [x] Ricerca informazioni ufficiali MIM su 30/36/60 CFU (normativa, requisiti, a cosa servono)
- [x] Ricerca offerta corsi eCampus (dettagli, costi, durata, modalità)
- [x] Creare schema database per corsi eCampus
- [x] Creare schema database per richieste info corsi
- [x] Creare pagina pubblica "Corsi" con informazioni dettagliate:
  * Certificazioni C2 British Institutes (dettagli completi, 6 punti GPS)
  * CLIL eCampus (metodologia, requisiti, punteggio GPS)
  * Certificazioni informatiche (EIPASS, PEKIT, ecc.)
  * Master L2 (didattica italiano L2, requisiti, sbocchi)
  * CFU 30/36/60 (cosa sono, normativa MIM, a cosa servono, come ottenerli)
- [x] Implementare form "Richiedi Info" per ogni corso con campi: nome, email, telefono, corso interesse, messaggio
- [x] Creare API POST /api/admin/corsi per gestione corsi (solo admin)
- [x] Creare API GET /api/corsi per elenco corsi pubblico
- [x] Creare API POST /api/richieste-info per salvare richieste utenti
- [x] Creare API GET /api/admin/richieste-info per visualizzare lead (solo admin)
- [x] Creare pannello admin protetto /admin/corsi per gestione corsi e lead
- [x] Aggiungere link "Corsi" nel menu principale
- [x] Menzionare eCampus e British Institutes senza enfatizzare
- [x] Testare tutto il flusso end-to-end
- [ ] Creare checkpoint v6.0

## Checkpoint Precedenti

- [x] v5.5 - 3 Miglioramenti Navigazione e Contenuti (Confronta Classi, Breadcrumb, FAQ)
- [x] v5.4.1 - Rimozione Script Popup PopAds
- [x] v5.4 - 4 Miglioramenti UX (Guida Punteggio, Animazioni, Confronto, Tooltip)
- [x] v5.3.1 - Fix Scroll Automatico
- [x] v5.3 - Fix Problema N/D Risultati GPS
- [x] v5.2 - Ottimizzazione Mobile e UX Trova Classe
- [x] v5.1.1 - Pulizia Progetto (rimozione script Python)
- [x] v5.1 - Integrazione Sistema Completo 40+ Titoli GPS


## Miglioramenti Post v6.0 - Richiesta Utente

- [x] Popolare database corsi iniziale con script SQL (10 corsi inseriti)
- [x] Implementare middleware autenticazione admin per proteggere /admin/corsi
- [x] Implementare notifiche email automatiche per nuove richieste info
- [x] Testare autenticazione e notifiche (11 test passati)
- [ ] Creare checkpoint v6.1


## Sistema Login Admin - v6.2

- [x] Creare pagina /login con form email/password
- [x] Implementare API autenticazione (login, logout, me)
- [x] Creare hook useAuth per gestione autenticazione frontend
- [x] Proteggere pannello admin con redirect a /login se non autenticato
- [x] Aggiungere pulsante Logout nel pannello admin con info utente
- [x] Testare flusso completo login -> admin -> logout (19 test passati)
- [x] Creare checkpoint v6.2

## Revisione sito - Agosto 2026

- [x] Verificare navigazione, calcolatore GPS, ricerca classi e pagine pubbliche in produzione e anteprima
- [x] Verificare usabilità e layout sui dispositivi mobili nel viewport tablet ristretto (888 px)
- [x] Documentare criticità prioritarie e proporre interventi correttivi
- [x] Correggere collegamento privacy del modulo corsi
- [ ] Completare informativa privacy con i dati reali del titolare
- [x] Rimuovere tonalità viola e correggere responsive menu, card corsi e moduli sotto i 1024 px
- [x] Aggiungere test di regressione per palette, responsive e collegamento privacy
- [ ] Uniformare denominazioni del brand e i contenuti istituzionali, legali e normativi
- [x] Uniformare il nome del servizio nei termini pubblici al brand MONDO SCUOLA
- [x] Eseguire audit finale delle pagine pubbliche routate per escludere residui viola o indaco
- [x] Verificare in preview i breakpoint sotto 1024 px per menu, card corsi e moduli principali
- [x] Verificare il menu hamburger sotto 1024 px su una pagina pubblica e registrarne l’esito
- [x] Verificare il modulo Richiedi Informazioni dei corsi sotto 1024 px senza tagli o sovrapposizioni
- [x] Eseguire test esplicito a 900 px con menu hamburger aperto e modulo corsi aperto
- [x] Verificare a 900 px la griglia delle card corsi senza overflow o tagli
- [x] Verificare a 900 px il modulo contatti pubblico senza sovrapposizioni o campi tagliati

## Archiviazione asset statici

- [x] Trasferire le quattro immagini statiche oltre 1 MB nello spazio asset del progetto
- [x] Sostituire i riferimenti locali con URL statici e rimuovere le copie dalla cartella pubblica
- [x] Aggiungere ed eseguire un test del proxy per gli asset persistenti
- [x] Verificare l’aspetto delle pagine coinvolte e la raggiungibilità degli asset tramite proxy
- [x] Salvare il checkpoint
