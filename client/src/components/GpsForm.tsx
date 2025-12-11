import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { competitionClasses } from "@/data/gpsData";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Monitor, Calculator } from "lucide-react";

interface GpsFormData {
  votoLaurea: number;
  lode: boolean;
  numC2: number;
  numClil: number;
  numBiannale: number;
  certificazioniInformatiche: boolean; // Simplified for UI: "Do you have 4 certs?"
  classeConcorso: string;
}

interface GpsFormProps {
  onCalculate: (data: GpsFormData) => void;
}

export function GpsForm({ onCalculate }: GpsFormProps) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<GpsFormData>({
    defaultValues: {
      votoLaurea: 100,
      lode: false,
      numC2: 0,
      numClil: 0,
      numBiannale: 0,
      certificazioniInformatiche: false,
      classeConcorso: ""
    }
  });

  const onSubmit = (data: GpsFormData) => {
    onCalculate(data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-panel border-0 overflow-hidden">
        <CardHeader className="bg-white/5 border-b border-white/10 pb-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-2">
            <Calculator className="w-6 h-6 text-secondary" />
            Calcola il tuo Punteggio
          </CardTitle>
          <CardDescription className="text-white/70">
            Inserisci i tuoi titoli per scoprire il punteggio GPS e le tue possibilità.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            
            {/* Sezione Laurea */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h3>Titolo di Accesso (Laurea)</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="votoLaurea" className="text-white/80">Voto di Laurea (su 110)</Label>
                  <Input 
                    id="votoLaurea" 
                    type="number" 
                    min="66" 
                    max="110" 
                    className="glass-input"
                    {...register("votoLaurea", { required: true, min: 66, max: 110 })} 
                  />
                  {errors.votoLaurea && <span className="text-red-400 text-sm">Inserisci un voto valido (66-110)</span>}
                </div>
                <div className="flex items-center space-x-2 pt-8">
                  <Checkbox 
                    id="lode" 
                    onCheckedChange={(checked) => setValue("lode", checked as boolean)}
                    className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                  />
                  <Label htmlFor="lode" className="text-white/80 cursor-pointer">Con Lode (+4 punti)</Label>
                </div>
              </div>
            </div>

            {/* Sezione Titoli Culturali */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                <BookOpen className="w-5 h-5 text-primary" />
                <h3>Titoli Culturali</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numC2" className="text-white/80">Certificazioni C2 (6 pti)</Label>
                  <Input 
                    id="numC2" 
                    type="number" 
                    min="0" 
                    className="glass-input"
                    {...register("numC2", { min: 0 })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numClil" className="text-white/80">CLIL (3 pti)</Label>
                  <Input 
                    id="numClil" 
                    type="number" 
                    min="0" 
                    className="glass-input"
                    {...register("numClil", { min: 0 })} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numBiannale" className="text-white/80">Master Biennali (2 pti)</Label>
                  <Input 
                    id="numBiannale" 
                    type="number" 
                    min="0" 
                    className="glass-input"
                    {...register("numBiannale", { min: 0 })} 
                  />
                </div>
              </div>
            </div>

            {/* Sezione Informatica */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                <Monitor className="w-5 h-5 text-primary" />
                <h3>Certificazioni Informatiche</h3>
              </div>
              <div className="flex items-center space-x-2 p-4 rounded-lg bg-white/5 border border-white/10">
                <Checkbox 
                  id="certificazioniInformatiche" 
                  onCheckedChange={(checked) => setValue("certificazioniInformatiche", checked as boolean)}
                  className="border-white/50 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <div className="grid gap-1.5 leading-none">
                  <Label htmlFor="certificazioniInformatiche" className="text-white/90 font-medium cursor-pointer">
                    Possiedi almeno 4 certificazioni informatiche?
                  </Label>
                  <p className="text-sm text-white/60">
                    (Es. EPA Giusto, EPA Standard, EPA Stitch Compedo, ecc.) - Vale 2 punti totali
                  </p>
                </div>
              </div>
            </div>

            {/* Sezione Classe di Concorso */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-lg font-semibold text-white/90">
                <Award className="w-5 h-5 text-primary" />
                <h3>Classe di Concorso</h3>
              </div>
              <div className="space-y-2">
                <Label htmlFor="classeConcorso" className="text-white/80">Seleziona la tua classe di concorso principale</Label>
                <Select onValueChange={(value) => setValue("classeConcorso", value)}>
                  <SelectTrigger className="glass-input w-full">
                    <SelectValue placeholder="Seleziona classe di concorso" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-900/95 border-slate-700 text-white max-h-[300px]">
                    {competitionClasses.map((cls) => (
                      <SelectItem key={cls.id} value={cls.id} className="focus:bg-white/10 focus:text-white cursor-pointer">
                        {cls.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button type="submit" className="w-full glass-button text-lg py-6 font-bold tracking-wide">
              Calcola Punteggio e Verifica Possibilità
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
