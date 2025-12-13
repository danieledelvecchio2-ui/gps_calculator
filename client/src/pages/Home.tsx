import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calculator, GraduationCap, Info, Sparkles, Mail, ArrowRight } from "lucide-react";

export default function NewHome() {
  const sections = [
    {
      icon: Calculator,
      title: "Calcola Punteggio GPS",
      description: "Scopri il tuo punteggio GPS e analizza in quali province hai maggiori possibilità di ottenere una supplenza, basato sui dati storici ufficiali.",
      link: "/calcola-gps",
      color: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-50"
    },
    {
      icon: GraduationCap,
      title: "Trova Classe di Concorso",
      description: "Verifica per quali classi di concorso puoi insegnare con la tua laurea, o scopri quali lauree servono per una specifica classe.",
      link: "/trova-classe",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50"
    },
    {
      icon: Info,
      title: "Info GPS 2026",
      description: "Tutte le informazioni essenziali sulle Graduatorie Provinciali per le Supplenze: requisiti, punteggi, scadenze e procedure.",
      link: "/info-gps",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Sparkles,
      title: "Novità GPS 2026",
      description: "Resta aggiornato su tutte le novità, i cambiamenti normativi e le ultime notizie riguardanti le graduatorie GPS.",
      link: "/novita-gps-2026",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Mail,
      title: "Contatti",
      description: "Hai domande o dubbi? Contattaci per ricevere supporto personalizzato sul tuo percorso per diventare docente.",
      link: "/contatti",
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <main className="container relative z-10 py-12 md:py-20 md:pt-28 max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-lg">
            <img src="/images/logo-icon.png" alt="Mondo Scuola Logo" className="w-12 h-12 object-contain" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight drop-shadow-sm">
            MONDO <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">SCUOLA</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-medium">
            Il portale completo per chi vuole insegnare
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 mb-16 shadow-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            La Nostra Mission
          </h2>
          <div className="space-y-4 text-white/80 text-lg leading-relaxed">
            <p>
              <strong className="text-white">MONDO SCUOLA</strong> nasce dalla volontà di supportare tutti gli aspiranti docenti 
              nel loro percorso verso l'insegnamento. Sappiamo quanto possa essere complesso orientarsi tra graduatorie, 
              classi di concorso, punteggi e normative in continua evoluzione.
            </p>
            <p>
              Per questo abbiamo creato un <strong className="text-white">portale unico</strong> che raccoglie tutti gli strumenti 
              e le informazioni necessarie in un unico luogo, con dati aggiornati e strumenti pratici per aiutarti 
              a prendere decisioni informate sul tuo futuro professionale.
            </p>
            <p>
              Che tu stia cercando di calcolare il tuo punteggio GPS, scoprire per quali classi puoi insegnare, 
              o semplicemente rimanere aggiornato sulle ultime novità, <strong className="text-white">MONDO SCUOLA</strong> è 
              il tuo punto di riferimento affidabile.
            </p>
          </div>
        </motion.div>

        {/* Sections Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Scopri Tutte le Nostre Sezioni
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Link key={index} href={section.link}>
                  <motion.div
                    whileHover={{ y: -8, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col"
                  >
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${section.color} flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {section.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 flex-1">
                      {section.description}
                    </p>
                    
                    <div className={`flex items-center text-sm font-semibold bg-gradient-to-r ${section.color} bg-clip-text text-transparent`}>
                      Scopri di più
                      <ArrowRight className="w-4 h-4 ml-2" style={{ color: 'inherit' }} />
                    </div>
                  </motion.div>
                </Link>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl p-12 shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Inizia il Tuo Percorso Oggi
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Unisciti a migliaia di aspiranti docenti che hanno già scelto MONDO SCUOLA 
            come punto di riferimento per il loro futuro nell'insegnamento.
          </p>
          <Link href="/calcola-gps">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-purple-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            >
              Calcola il Tuo Punteggio GPS
            </motion.button>
          </Link>
        </motion.div>

      </main>
    </div>
  );
}
