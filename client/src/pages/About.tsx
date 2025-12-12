import { Link } from "wouter";
import { ArrowLeft, Target, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Chi <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Siamo</span>
          </h1>

          <p className="text-xl text-white/70 text-center mb-12">
            Il tuo partner affidabile per navigare nel mondo delle Graduatorie GPS
          </p>

          {/* Mission Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl">
                <Target className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">La Nostra Missione</h2>
                <p className="text-white/70 leading-relaxed">
                  GPS Calculator nasce con l'obiettivo di semplificare il complesso mondo delle Graduatorie Provinciali per le Supplenze. 
                  Offriamo uno strumento gratuito e intuitivo che permette agli aspiranti docenti di calcolare il proprio punteggio GPS 
                  e di comprendere le reali possibilità di ottenere una supplenza nelle diverse province italiane.
                </p>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-8">
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl">
                <Award className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">I Nostri Valori</h2>
                <div className="space-y-3 text-white/70">
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Trasparenza:</span> Utilizziamo esclusivamente dati ufficiali 
                    provenienti dagli Uffici Scolastici Provinciali per fornire stime accurate e affidabili.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Semplicità:</span> Rendiamo accessibile a tutti la comprensione 
                    del sistema GPS, eliminando la complessità burocratica e tecnica.
                  </p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-white">Aggiornamento continuo:</span> Monitoriamo costantemente 
                    le normative e i dati GPS per garantire informazioni sempre attuali e precise.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-xl">
                <Users className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Il Nostro Team</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Siamo un gruppo di professionisti appassionati del mondo della scuola, con competenze in ambito educativo, 
                  tecnologico e normativo. La nostra esperienza diretta nel sistema scolastico italiano ci permette di 
                  comprendere a fondo le esigenze degli aspiranti docenti e di offrire un servizio realmente utile.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Ogni giorno lavoriamo per migliorare GPS Calculator, aggiungendo nuove province, perfezionando gli algoritmi 
                  di calcolo e integrando le ultime novità normative. Il nostro obiettivo è essere il punto di riferimento 
                  per tutti gli insegnanti che desiderano orientarsi nel mondo delle supplenze.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-white/60 mb-6">
              Hai domande o suggerimenti? Siamo qui per aiutarti.
            </p>
            <Link href="/contatti">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300"
              >
                Contattaci
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
