# Revisione sito — 14 agosto 2026

## Evidenze raccolte

- La home page pubblica su `infogps2026.it` è raggiungibile e tutte le voci principali del menu sono presenti.
- Nel viewport desktop ristretto (888 px) il menu superiore conserva tutte le dieci voci sulla stessa riga: l’area risulta molto densa e richiede una verifica/ottimizzazione responsive con menu compatto prima del breakpoint tablet.
- La pagina `/calcola-gps` è raggiungibile e il suo tema blu scuro è applicato correttamente.
- Il menu di selezione della classe di concorso nel calcolatore si apre correttamente nel browser di verifica e visualizza il campo ricerca e l’elenco delle classi. Il precedente difetto non è riprodotto in questa sessione.
- La ricerca del selettore filtra correttamente l’elenco: la query `A-28` restituisce l’opzione corrispondente e la selezione viene applicata al form.
- La pagina `/trova-classe` mostra l’archivio delle 154 classi, la ricerca per classe e il pannello dei titoli di accesso. La selezione di `A-28` aggiorna correttamente il pannello a destra, con i relativi titoli di accesso e il comando per i dettagli.
- Nella visualizzazione desktop ristretta, la testata della pagina Trova Classe è parzialmente compressa dal menu fisso e il menu orizzontale rimane affollato: è una criticità responsive da trattare con priorità media.
- La pagina di dettaglio `/classe/A-28` è raggiungibile, presenta il breadcrumb, i requisiti di accesso, gli istituti/materie, le classi correlate e un invito al calcolatore. La gerarchia visiva è ordinata e la pagina apre dall’inizio, rendendo evidente il cambio di contenuto.
- La pagina `/corsi` è raggiungibile e propone nove percorsi informativi con un pulsante di richiesta informazioni per ciascuno. La prima visualizzazione mostra tre card in una singola riga con testo molto piccolo a 888 px: serve una griglia a due colonne per tablet e una colonna per telefono, con card più leggibili.
- I contenuti presentano riferimenti terminologici non omogenei al ministero; occorre uniformare le denominazioni e verificare periodicamente tutti i testi normativi prima della pubblicazione di nuovi aggiornamenti.
- Il pulsante `Richiedi Informazioni` apre correttamente un modulo contestuale, già associato al corso selezionato. Sono presenti nome, email, telefono, messaggio, collegamento alla privacy, chiusura e annullamento; non è stata inviata alcuna richiesta di prova. Sul viewport testato il modulo è funzionale ma denso, quindi va ottimizzato per schermi mobili.
- Il collegamento alla privacy inserito nel modulo usa `/privacy-policy`, che restituisce una pagina 404. Il link deve puntare alla pagina esistente `/privacy` oppure deve essere aggiunta una route di reindirizzamento.
- La pagina `/privacy` è raggiungibile, ma contiene segnaposto non compilati per titolare, indirizzo, email e telefono. Poiché il sito raccoglie nominativi, contatti e dati relativi ai titoli, questa è una criticità bloccante da correggere prima di campagne o raccolte lead. Il design di questa pagina include inoltre tonalità viola, incoerenti con la palette richiesta per il sito.
- La pagina `/contatti` rende disponibile un modulo con campi essenziali e un messaggio sui tempi di risposta. La testata e il pulsante usano però un gradiente viola, che non rispetta il vincolo grafico concordato di escludere il viola dal sito.
- La pagina `/cookie-policy` è raggiungibile dal footer e non presenta segnaposto; prima della pubblicazione definitiva va comunque allineata ai cookie effettivamente installati e alle preferenze/consensi realmente gestiti nel sito.
- La pagina `/termini-condizioni` è disponibile dal footer. Nel testo il prodotto viene ancora chiamato `GPS Calculator`, mentre il marchio pubblico è `MONDO SCUOLA`: va uniformata la denominazione su tutte le pagine legali e informative.

## Sintesi di priorità

| Priorità | Intervento | Motivo |
| --- | --- | --- |
| Bloccante | Completare l’informativa privacy con dati reali del titolare e riparare il link `/privacy-policy`. | I form raccolgono dati personali e oggi conducono anche a una pagina non trovata. |
| Alta | Rimuovere tutte le tonalità viola da Contatti e Privacy. | Non rispetta l’identità grafica richiesta per MONDO SCUOLA. |
| Alta | Rendere il menu e le card corsi responsivi sotto i 1024 px. | A 888 px il menu è affollato e le card hanno testo troppo piccolo. |
| Media | Aggiornare e uniformare i testi istituzionali, legali e di brand. | Sono presenti denominazioni e riferimenti non coerenti tra pagine. |
| Positivo | Calcolatore, ricerca/selezione classe, archivio classi e moduli informativi funzionano nei flussi verificati. | I principali percorsi dell’utente risultano operativi nel browser di controllo. |

## Archiviazione tecnica

Le quattro immagini statiche che impedivano l’archiviazione sono state trasferite nello spazio asset persistente. È stato introdotto un proxy server-side per servirle in modo sicuro; la home e l’asset di sfondo sono stati verificati nella preview dopo la migrazione.
