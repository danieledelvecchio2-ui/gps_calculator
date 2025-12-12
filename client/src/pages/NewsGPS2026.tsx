import { Link } from "wouter";
import { ArrowLeft, AlertCircle, CheckCircle, XCircle, Info } from "lucide-react";
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
              Novità <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">GPS 2026</span>
            </h1>
            <p className="text-xl text-white/70">
              Aggiornamento Graduatorie 2026-2028: cosa cambia per le certificazioni informatiche
            </p>
          </div>

          {/* Alert Box */}
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-2 text-orange-200">Attenzione: Cambiamenti Importanti</h3>
                <p className="text-white/80 leading-relaxed">
                  Dal prossimo aggiornamento GPS 2026-2028, le regole per le certificazioni informatiche cambiano radicalmente. 
                  È fondamentale comprendere quali certificazioni saranno valide per evitare di conseguire titoli non riconosciuti.
                </p>
              </div>
            </div>
          </div>

          {/* Main Changes */}
          <div className="space-y-6 mb-8">
            <h2 className="text-3xl font-bold mb-6">Le Nuove Regole</h2>

            {/* Rule 1: Accredia */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl flex-shrink-0">
                  <CheckCircle className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">1. Solo Enti Accreditati Accredia</h3>
                  <p className="text-white/70 leading-relaxed mb-3">
                    Per ottenere **nuovi punti** con le certificazioni informatiche, queste devono essere rilasciate 
                    esclusivamente da **enti accreditati da Accredia** (Ente Italiano di Accreditamento).
                  </p>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                    <p className="text-sm text-blue-200">
                      <strong>Nota:</strong> Chi ha già dichiarato certificazioni negli aggiornamenti precedenti 
                      mantiene il punteggio acquisito (fino a 2 punti). Questa regola vale solo per nuove certificazioni.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 2: Framework */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex-shrink-0">
                  <Info className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">2. Framework DigComp 2.2 o DigCompEdu</h3>
                  <p className="text-white/70 leading-relaxed mb-4">
                    Non basta che l'ente sia accreditato Accredia: la certificazione deve seguire uno dei due framework europei:
                  </p>
                  <div className="space-y-3">
                    <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-4">
                      <p className="font-semibold text-purple-200 mb-2">✅ Certificazioni in linea con DigComp 2.2</p>
                      <p className="text-sm text-white/70">
                        Valore: <strong className="text-white">0.5 punti ciascuna</strong> (massimo 4 certificazioni)
                      </p>
                    </div>
                    <div className="bg-pink-500/10 border border-pink-500/20 rounded-xl p-4">
                      <p className="font-semibold text-pink-200 mb-2">✅ Certificazioni in linea con DigCompEdu</p>
                      <p className="text-sm text-white/70">
                        Valore: <strong className="text-white">1 punto ciascuna</strong> (massimo 2 certificazioni)
                      </p>
                      <p className="text-xs text-white/50 mt-2">
                        DigCompEdu è il framework specifico per docenti ed educatori
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Rule 3: What doesn't count */}
            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-500/20 rounded-xl flex-shrink-0">
                  <XCircle className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-red-200">3. Certificazioni NON Più Valide dal 2026</h3>
                  <p className="text-white/80 leading-relaxed mb-4">
                    Anche se rilasciate da enti accreditati Accredia, queste certificazioni **NON valgono più** 
                    perché non seguono i framework DigComp 2.2 o DigCompEdu:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-white/70">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>Certificazioni <strong>LIM</strong> (Lavagna Interattiva Multimediale)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>Certificazioni <strong>Tablet</strong> (Uso didattico del Tablet)</span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>Certificazioni <strong>Coding</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-white/70">
                      <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                      <span>Altre certificazioni tematiche non allineate ai framework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example Box */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-6 mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-cyan-400" />
              Esempio Pratico
            </h3>
            <div className="space-y-3 text-white/80">
              <p className="leading-relaxed">
                Un ente certificatore può essere accreditato Accredia e offrire diverse certificazioni. 
                Tuttavia, solo quelle che seguono i framework DigComp 2.2 o DigCompEdu saranno valide per le GPS 2026.
              </p>
              <div className="bg-white/5 rounded-xl p-4 space-y-2">
                <p className="text-sm">
                  <span className="text-green-400">✅</span> <strong>Certificazione User in linea con DigComp 2.2</strong> → Vale 0.5 punti
                </p>
                <p className="text-sm">
                  <span className="text-green-400">✅</span> <strong>Certificazione DigCompEdu</strong> → Vale 1 punto
                </p>
                <p className="text-sm">
                  <span className="text-red-400">❌</span> <strong>Certificazione LIM dello stesso ente</strong> → NON vale (non segue i framework)
                </p>
              </div>
            </div>
          </div>

          {/* Why this change */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Perché Questo Cambiamento?</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Il Ministero dell'Istruzione e del Merito ha introdotto queste nuove regole per:
            </p>
            <ul className="space-y-2 text-white/70">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Eliminare i cosiddetti "certificatifici" che rilasciavano titoli senza reali competenze</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Garantire che i docenti abbiano competenze digitali reali e verificabili</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Allineare il sistema italiano agli standard europei (DigComp 2.2 e DigCompEdu)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span>Sottoporre gli enti certificatori a controlli rigorosi da parte di Accredia</span>
              </li>
            </ul>
          </div>

          {/* What to do */}
          <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-4 text-green-200">Cosa Fare Ora?</h2>
            <div className="space-y-3 text-white/80">
              <p className="leading-relaxed">
                <strong className="text-white">Se hai già certificazioni informatiche:</strong> Il tuo punteggio è salvo. 
                Non devi rifare le certificazioni già dichiarate.
              </p>
              <p className="leading-relaxed">
                <strong className="text-white">Se vuoi conseguire nuove certificazioni:</strong> Assicurati che siano:
              </p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">1.</span>
                  <span>Rilasciate da enti accreditati <strong>Accredia</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400 font-bold">2.</span>
                  <span>In linea con <strong>DigComp 2.2</strong> o <strong>DigCompEdu</strong></span>
                </li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong className="text-white">Consiglio:</strong> Attendi la pubblicazione ufficiale dell'ordinanza ministeriale 
                prima di conseguire nuove certificazioni, per avere conferma definitiva delle regole.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-6">
              Hai dubbi sulle nuove regole GPS 2026?
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
