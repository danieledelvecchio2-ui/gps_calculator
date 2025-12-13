import { Link } from "wouter";
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, Info, Calendar, Users, FileText, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function NewsGPS2026() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Torna alla Home
          </motion.button>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Novità <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">GPS 2026/28</span>
            </h1>
            <p className="text-xl text-white/70">
              Tutte le novità dell'aggiornamento Graduatorie Provinciali per le Supplenze 2026-2028
            </p>
          </div>

          {/* Alert Box - Scadenze */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <Calendar className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">⏰ Attenzione alle Scadenze!</h3>
                <p className="text-white/80 leading-relaxed mb-3">
                  L'aggiornamento GPS 2026/28 sarà <strong>anticipato a febbraio 2026</strong>. 
                  Questo significa che i titoli conseguiti in primavera (master, CLIL, certificazioni) 
                  <strong> NON potranno essere inseriti</strong> e dovranno attendere il prossimo aggiornamento.
                </p>
                <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4">
                  <p className="text-sm text-orange-200">
                    <strong>Consiglio:</strong> Se stai conseguendo titoli, assicurati di completarli entro gennaio 2026!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Changes Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Nuovo Algoritmo */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Nuovo Algoritmo "Ripescaggio"</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    L'algoritmo per l'assegnazione delle supplenze cambierà: chi non ottiene incarico per mancanza 
                    di sedi disponibili verrà <strong>ripreso in considerazione</strong> finché ci sono posti residui. 
                    Questo riduce la casualità che penalizzava docenti con punteggio alto.
                  </p>
                </div>
              </div>
            </div>

            {/* Sanzioni */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-xl flex-shrink-0">
                  <AlertCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Sanzioni Più Severe</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    Chi <strong>non prende servizio</strong> su una supplenza da GAE/GPS sarà escluso da tutte 
                    le fasi successive per l'intero biennio. In caso di <strong>abbandono</strong>, 
                    il blocco riguarderà qualsiasi tipologia di supplenza per 2 anni.
                  </p>
                </div>
              </div>
            </div>

            {/* TFA e INDIRE */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl flex-shrink-0">
                  <Users className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">TFA e INDIRE Equiparati</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    I percorsi <strong>TFA ordinario</strong> e <strong>TFA INDIRE</strong> avranno lo stesso punteggio. 
                    Possibilità di inserimento in prima fascia <strong>con riserva</strong> (scioglimento tra giugno e luglio).
                  </p>
                </div>
              </div>
            </div>

            {/* Spezzoni */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Aggregazione Spezzoni</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    Gli Uffici Scolastici Territoriali <strong>aggregheranno gli spezzoni orari</strong> (anche ≤6 ore) 
                    per costituire posti-orario più consistenti e aumentare le opportunità di supplenza.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificazioni Informatiche - Sezione Importante */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <h2 className="text-2xl font-bold">Certificazioni Informatiche: Nuove Regole</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h4 className="font-bold text-cyan-200 mb-2">✅ Certificazioni Valide</h4>
                <p className="text-white/70 text-sm mb-3">
                  Saranno valutate <strong>solo le certificazioni rilasciate da enti accreditati Accredia</strong> 
                  che seguono i framework europei:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>DigComp 2.2:</strong> 0.5 punti ciascuna (max 4 certificazioni = 2 punti)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <span><strong>DigCompEdu:</strong> 1 punto ciascuna (max 2 certificazioni = 2 punti)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <h4 className="font-bold text-red-200 mb-2">❌ Certificazioni NON Più Valide</h4>
                <p className="text-white/70 text-sm mb-3">
                  Anche se rilasciate da enti accreditati, queste certificazioni <strong>non valgono più</strong>:
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Certificazioni LIM (Lavagna Interattiva Multimediale)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Certificazioni Tablet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Certificazioni Coding</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span>Altre certificazioni non allineate ai framework DigComp</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                <h4 className="font-bold text-green-200 mb-2">💾 Certificazioni Già Dichiarate</h4>
                <p className="text-white/70 text-sm">
                  <strong>Buone notizie:</strong> Le certificazioni già dichiarate e valutate nei precedenti 
                  aggiornamenti GPS <strong>mantengono la loro validità</strong>. Questa regola vale solo per 
                  nuove certificazioni da conseguire.
                </p>
              </div>
            </div>
          </div>

          {/* Altre Novità */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Info className="w-6 h-6 text-purple-400" />
              Altre Novità Importanti
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Equiparazione Punteggi ITP</p>
                  <p className="text-white/70 text-sm">
                    I punteggi di abilitazione per gli Insegnanti Tecnico-Pratici vengono equiparati.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Punteggi Aumentati</p>
                  <p className="text-white/70 text-sm">
                    Incremento punteggi per: dottorato di ricerca, assegni di ricerca, 
                    abilitazione scientifica nazionale, graduatorie AFAM.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Servizio con Riserva</p>
                  <p className="text-white/70 text-sm">
                    Possibilità di dichiarare con riserva l'anno di servizio in corso (2025/26), 
                    utile ai fini del punteggio.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Divieto Supplenze Brevi</p>
                  <p className="text-white/70 text-sm">
                    Introdotto divieto generalizzato di nomina supplenti per assenze temporanee fino a 10 giorni.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Esclusione per Mancata Domanda</p>
                  <p className="text-white/70 text-sm">
                    Chi non presenta domanda GPS o 150 preferenze sarà <strong>escluso per l'intero biennio</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-purple-400" />
              Timeline Aggiornamento GPS 2026
            </h2>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center font-bold">
                    1
                  </div>
                  <div className="w-0.5 h-full bg-purple-500/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <p className="font-bold text-purple-200">Gennaio 2026</p>
                  <p className="text-white/70 text-sm">Completa tutti i titoli che vuoi inserire (ultimo mese utile!)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center font-bold">
                    2
                  </div>
                  <div className="w-0.5 h-full bg-purple-500/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <p className="font-bold text-purple-200">Febbraio 2026</p>
                  <p className="text-white/70 text-sm">Apertura domande aggiornamento GPS 2026/28</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-purple-500/20 border-2 border-purple-400 flex items-center justify-center font-bold">
                    3
                  </div>
                  <div className="w-0.5 h-full bg-purple-500/20 mt-2"></div>
                </div>
                <div className="pb-8">
                  <p className="font-bold text-purple-200">Giugno-Luglio 2026</p>
                  <p className="text-white/70 text-sm">Scioglimento riserve (TFA, INDIRE, servizio)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 border-2 border-green-400 flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div>
                  <p className="font-bold text-green-200">Agosto 2026</p>
                  <p className="text-white/70 text-sm">Pubblicazione graduatorie definitive e inizio assegnazioni</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-6">
              Hai dubbi sulle nuove regole GPS 2026 o vuoi informazioni sui corsi per aumentare il tuo punteggio?
            </p>
            <Link href="/contatti">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                Contattaci per Maggiori Informazioni
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
