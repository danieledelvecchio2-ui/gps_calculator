import { motion } from "framer-motion";
import { Link } from "wouter";
import { GraduationCap, Award, Laptop, Globe, ArrowRight } from "lucide-react";

export function CoursesBanner() {
  const courses = [
    {
      icon: Globe,
      title: "Certificazioni Linguistiche",
      description: "C1 e C2 per aumentare fino a 6 punti GPS",
      points: "+6 punti",
      gradient: "from-blue-500/20 to-cyan-500/20",
      borderColor: "border-blue-500/30",
      iconColor: "text-blue-400"
    },
    {
      icon: GraduationCap,
      title: "Certificazioni CLIL",
      description: "Percorsi universitari riconosciuti MIUR",
      points: "+3 punti",
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-500/30",
      iconColor: "text-purple-400"
    },
    {
      icon: Laptop,
      title: "Certificazioni Informatiche",
      description: "DigComp 2.2 e DigCompEdu accreditate Accredia",
      points: "+2 punti",
      gradient: "from-green-500/20 to-emerald-500/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400"
    },
    {
      icon: Award,
      title: "Master e Perfezionamenti",
      description: "Percorsi universitari riconosciuti dal MIUR",
      points: "+1 punto cad.",
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-500/30",
      iconColor: "text-orange-400"
    }
  ];

  return (
    <div className="mt-16 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Aumenta il Tuo Punteggio GPS
        </h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          Scopri i percorsi formativi riconosciuti dal MIUR per scalare le graduatorie
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {courses.map((course, index) => {
          const Icon = course.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <Link href="/contatti">
                <motion.div
                  whileHover={{ scale: 1.03, y: -4 }}
                  className={`bg-gradient-to-br ${course.gradient} backdrop-blur-sm border ${course.borderColor} rounded-2xl p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-${course.iconColor}/10 h-full flex flex-col`}
                >
                  <div className={`p-3 bg-white/5 rounded-xl w-fit mb-4`}>
                    <Icon className={`w-6 h-6 ${course.iconColor}`} />
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-white/60 mb-4 flex-grow">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`text-sm font-bold ${course.iconColor}`}>
                      {course.points}
                    </span>
                    <div className="flex items-center gap-1 text-white/40 text-sm group-hover:text-white/60 transition-colors">
                      <span>Scopri</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-6"
      >
        <Link href="/contatti">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 inline-flex items-center gap-2"
          >
            <span>Richiedi Informazioni sui Corsi</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
