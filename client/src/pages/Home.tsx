import { useState } from "react";
import { GpsForm } from "@/components/GpsForm";
import { ResultsView } from "@/components/ResultsView";
import { calculateScore, analyzeProvinces, CalculationResult } from "@/lib/gpsAlgorithm";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";

export default function Home() {
  const [result, setResult] = useState<CalculationResult | null>(null);

  const handleCalculate = async (data: any) => {
    const scoreResult = calculateScore(data);
    const analysis = analyzeProvinces(scoreResult.totalScore, data.classeConcorso);
    
    const result = {
      ...scoreResult,
      provincesAnalysis: analysis
    };
    
    setResult(result);

    // Salva i dati nel database (in background, non blocca l'utente)
    try {
      await fetch('/api/gps/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: data.nome,
          email: data.email,
          cellulare: data.cellulare,
          classeConcorso: data.classeConcorso,
          votoLaurea: data.votoLaurea,
          lode: data.lode,
          numC2: data.numC2,
          numClil: data.numClil,
          numBiannale: data.numBiannale,
          certificazioniInformatiche: data.certificazioniInformatiche,
          punteggioLaurea: scoreResult.breakdown.laurea,
          punteggioTitoli: scoreResult.breakdown.titoliCulturali + scoreResult.breakdown.informatica,
          punteggioTotale: scoreResult.totalScore
        })
      });
    } catch (error) {
      console.error('Errore durante il salvataggio dei dati:', error);
      // Non mostriamo l'errore all'utente, il calcolo funziona comunque
    }
  };

  const handleBack = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/20 blur-[120px]" />
      </div>

      <main className="container relative z-10 py-12 md:py-20 max-w-4xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 space-y-4"
        >
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-lg">
            <img src="/images/logo-icon.png" alt="GPS Logo" className="w-12 h-12 object-contain" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight drop-shadow-sm">
            GPS <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">Calculator</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Calcola il tuo punteggio GPS e scopri in quali province hai maggiori possibilità di ottenere una supplenza, basato sui dati storici ufficiali.
          </p>
          <Link href="/info-gps">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              INFO CALCOLO PUNTEGGIO IN GPS
            </motion.button>
          </Link>
        </motion.div>

        {/* Content Switcher */}
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="form"
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GpsForm onCalculate={handleCalculate} />
            </motion.div>
          ) : (
            <motion.div
              key="results"
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <ResultsView result={result} onBack={handleBack} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <footer className="mt-20 text-center text-white/40 text-sm space-y-3">
          <div className="flex items-center justify-center gap-4 text-white/60">
            <Link href="/info-gps" className="hover:text-white transition-colors underline">Guida GPS</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-white transition-colors underline">Privacy</Link>
          </div>
          <p>© 2025 GPS Calculator. Dati basati su bollettini ufficiali e stime sindacali.</p>
          <p className="mt-2">Disclaimer: Le stime sono indicative e non garantiscono l'incarico.</p>
        </footer>

      </main>
    </div>
  );
}
