import { CalculationResult, ProvinceAnalysis } from "@/lib/gpsAlgorithm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { MapPin, TrendingUp, TrendingDown, Minus, ExternalLink, ArrowLeft, CheckCircle, AlertCircle, XCircle } from "lucide-react";

interface ResultsViewProps {
  result: CalculationResult;
  onBack: () => void;
}

export function ResultsView({ result, onBack }: ResultsViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      {/* Header Risultati */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
        <Button 
          variant="ghost" 
          onClick={onBack}
          className="text-white hover:bg-white/10 hover:text-white -ml-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Torna al calcolo
        </Button>
        
        <div className="text-center md:text-right">
          <h2 className="text-white/80 text-sm uppercase tracking-wider font-semibold">Il tuo Punteggio Totale</h2>
          <div className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
            {result.totalScore.toFixed(1)}
          </div>
        </div>
      </div>

      {/* Breakdown Punteggio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="glass-panel border-0 bg-white/5">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-white/60 text-sm mb-1">Laurea</span>
            <span className="text-2xl font-bold text-white">{result.breakdown.laurea}</span>
          </CardContent>
        </Card>
        <Card className="glass-panel border-0 bg-white/5">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-white/60 text-sm mb-1">Titoli Culturali</span>
            <span className="text-2xl font-bold text-white">{result.breakdown.titoliCulturali}</span>
          </CardContent>
        </Card>
        <Card className="glass-panel border-0 bg-white/5">
          <CardContent className="p-4 flex flex-col items-center justify-center text-center">
            <span className="text-white/60 text-sm mb-1">Informatica</span>
            <span className="text-2xl font-bold text-white">{result.breakdown.informatica}</span>
          </CardContent>
        </Card>
      </div>

      {/* Analisi Province */}
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-white flex items-center gap-2">
          <MapPin className="w-6 h-6 text-secondary" />
          Analisi Opportunità per Provincia
        </h3>
        <p className="text-white/70">
          Basato sui punteggi minimi di nomina degli ultimi 2 anni.
        </p>

        <div className="grid grid-cols-1 gap-4">
          {result.provincesAnalysis.map((province, index) => (
            <ProvinceCard key={province.provinceId} province={province} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProvinceCard({ province, index }: { province: ProvinceAnalysis; index: number }) {
  const getProbabilityColor = (prob: string) => {
    switch (prob) {
      case "Alta": return "bg-green-500/20 text-green-200 border-green-500/30";
      case "Media": return "bg-yellow-500/20 text-yellow-200 border-yellow-500/30";
      case "Bassa": return "bg-red-500/20 text-red-200 border-red-500/30";
      default: return "bg-slate-500/20 text-slate-200 border-slate-500/30";
    }
  };

  const getProbabilityIcon = (prob: string) => {
    switch (prob) {
      case "Alta": return <CheckCircle className="w-5 h-5 text-green-400" />;
      case "Media": return <AlertCircle className="w-5 h-5 text-yellow-400" />;
      case "Bassa": return <XCircle className="w-5 h-5 text-red-400" />;
      default: return <Minus className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Card className="glass-panel border-0 overflow-hidden hover:bg-white/15 transition-colors">
        <CardContent className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          
          {/* Info Provincia */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h4 className="text-xl font-bold text-white">{province.provinceName}</h4>
              <Badge variant="outline" className="text-white/60 border-white/20 text-xs">
                {province.region}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-white/70 mt-2">
              <div className="flex items-center gap-1">
                <span className="opacity-60">Min 2023:</span>
                <span className="font-mono font-semibold text-white">
                  {province.minScore2023 ? province.minScore2023 : "N/D"}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="opacity-60">Min 2024:</span>
                <span className="font-mono font-semibold text-white">
                  {province.minScore2024 ? province.minScore2024 : "N/D"}
                </span>
              </div>
              {province.trend !== "unknown" && (
                <div className="flex items-center gap-1 ml-2">
                  {province.trend === "increasing" && <TrendingUp className="w-3 h-3 text-red-400" />}
                  {province.trend === "decreasing" && <TrendingDown className="w-3 h-3 text-green-400" />}
                  {province.trend === "stable" && <Minus className="w-3 h-3 text-yellow-400" />}
                  <span className="text-xs opacity-60">
                    {province.trend === "increasing" ? "Punteggi in salita" : 
                     province.trend === "decreasing" ? "Punteggi in discesa" : "Stabile"}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Probabilità */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-end">
            <div className={`px-4 py-2 rounded-full border flex items-center gap-2 ${getProbabilityColor(province.probability)}`}>
              {getProbabilityIcon(province.probability)}
              <span className="font-bold uppercase tracking-wide text-sm">
                {province.probability} Probabilità
              </span>
            </div>
            
            {province.sourceUrl && (
              <Button variant="ghost" size="icon" className="text-white/40 hover:text-white hover:bg-white/10" asChild>
                <a href={province.sourceUrl} target="_blank" rel="noopener noreferrer" title="Vedi fonte ufficiale">
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            )}
          </div>

        </CardContent>
      </Card>
    </motion.div>
  );
}
