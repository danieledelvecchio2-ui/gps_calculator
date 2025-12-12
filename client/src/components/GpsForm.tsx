import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { competitionClasses } from "@/data/gpsData";
import { motion } from "framer-motion";
import { Calculator, BookOpen, GraduationCap, Laptop, Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface GpsFormProps {
  onCalculate: (data: any) => void;
}

export function GpsForm({ onCalculate }: GpsFormProps) {
  // Dati personali
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [cellulare, setCellulare] = useState<string>("");
  
  // Dati GPS
  const [votoDiploma, setVotoDiploma] = useState<number>(0);
  const [votoLaurea, setVotoLaurea] = useState<number>(100);
  const [lode, setLode] = useState<boolean>(false);
  const [numB2, setNumB2] = useState<number>(0);
  const [numC1, setNumC1] = useState<number>(0);
  const [numC2, setNumC2] = useState<number>(0);
  const [numClil, setNumClil] = useState<number>(0);
  const [hasDottorato, setHasDottorato] = useState<boolean>(false);
  const [hasSecondaLaurea, setHasSecondaLaurea] = useState<boolean>(false);
  const [numMasterUniv, setNumMasterUniv] = useState<number>(0);
  const [hasMasterL2, setHasMasterL2] = useState<boolean>(false);
  const [numDigComp22, setNumDigComp22] = useState<number>(0);
  const [numDigCompEdu, setNumDigCompEdu] = useState<number>(0);
  const [classeConcorso, setClasseConcorso] = useState<string>("");
  const [openCombobox, setOpenCombobox] = useState(false);
  const [privacyConsent, setPrivacyConsent] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validazione campi obbligatori
    if (!nome.trim() || !email.trim() || !cellulare.trim() || !classeConcorso) {
      alert("Per favore, compila tutti i campi obbligatori (Nome, Email, Cellulare, Classe di Concorso)");
      return;
    }
    
    // Validazione consenso privacy
    if (!privacyConsent) {
      alert("Devi autorizzare il trattamento dei dati personali per poter continuare.");
      return;
    }
    
    onCalculate({
      nome: nome.trim(),
      email: email.trim(),
      cellulare: cellulare.trim(),
      votoDiploma,
      votoLaurea,
      lode,
      numB2,
      numC1,
      numC2,
      numClil,
      hasDottorato,
      hasSecondaLaurea,
      numMasterUniv,
      hasMasterL2,
      numDigComp22,
      numDigCompEdu,
      classeConcorso
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="glass-panel border-0 overflow-hidden shadow-2xl">
        <CardHeader className="bg-white/5 border-b border-white/10 pb-6">
          <CardTitle className="text-2xl font-bold text-white flex items-center gap-3">
            <Calculator className="w-6 h-6 text-secondary" />
            Calcola il tuo Punteggio
          </CardTitle>
          <p className="text-white/60 text-sm mt-1">
            Inserisci i tuoi titoli per scoprire il punteggio GPS e le tue possibilità.
          </p>
        </CardHeader>
        
        <CardContent className="p-6 md:p-8 space-y-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Sezione Dati Personali */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90 font-semibold text-lg border-b border-white/10 pb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Dati Personali
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nome" className="text-white/80">Nome e Cognome *</Label>
                  <Input 
                    id="nome" 
                    type="text" 
                    placeholder="Mario Rossi"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="glass-input"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white/80">Email *</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="mario.rossi@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="glass-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cellulare" className="text-white/80">Cellulare *</Label>
                  <Input 
                    id="cellulare" 
                    type="tel" 
                    placeholder="+39 333 1234567"
                    value={cellulare}
                    onChange={(e) => setCellulare(e.target.value)}
                    className="glass-input"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Sezione Classe di Concorso */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90 font-semibold text-lg border-b border-white/10 pb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Classe di Concorso
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="classeConcorso" className="text-white/80">Seleziona la tua classe di concorso</Label>
                <Popover open={openCombobox} onOpenChange={setOpenCombobox}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={openCombobox}
                      className="w-full justify-between glass-input text-left font-normal"
                    >
                      {classeConcorso
                        ? competitionClasses.find((c) => c.id === classeConcorso)?.label
                        : "Cerca classe di concorso (es. A046, Sostegno...)"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 bg-slate-900 border-slate-700 text-white max-h-[300px]">
                    <Command className="bg-transparent text-white">
                      <CommandInput placeholder="Cerca codice o descrizione..." className="text-white" />
                      <CommandList className="custom-scrollbar">
                        <CommandEmpty>Nessuna classe trovata.</CommandEmpty>
                        <CommandGroup>
                          {competitionClasses.map((c) => (
                            <CommandItem
                              key={c.id}
                              value={c.label}
                              onSelect={() => {
                                setClasseConcorso(c.id);
                                setOpenCombobox(false);
                              }}
                              className="text-white aria-selected:bg-white/10 cursor-pointer"
                            >
                              <Check
                                className={cn(
                                  "mr-2 h-4 w-4",
                                  classeConcorso === c.id ? "opacity-100" : "opacity-0"
                                )}
                              />
                              {c.label}
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                <p className="text-xs text-white/50">
                  Digita il codice (es. A046) o parte del nome per filtrare la lista completa.
                </p>
              </div>
            </div>

            {/* Sezione Titolo di Accesso */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90 font-semibold text-lg border-b border-white/10 pb-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                Titolo di Accesso
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="votoDiploma" className="text-white/80">Voto di Diploma (su 100)</Label>
                  <Input 
                    id="votoDiploma" 
                    type="number" 
                    min="60" 
                    max="100" 
                    value={votoDiploma}
                    onChange={(e) => setVotoDiploma(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Valido per: Classi ITP (B-01, B-02, B-03, ecc.), Infanzia/Primaria (posto comune e sostegno) solo se Diploma Magistrale conseguito entro a.s. 2001/2002
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="votoLaurea" className="text-white/80">Voto di Laurea (su 110)</Label>
                  <Input 
                    id="votoLaurea" 
                    type="number" 
                    min="66" 
                    max="110" 
                    value={votoLaurea}
                    onChange={(e) => setVotoLaurea(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Requisito minimo: Laurea Magistrale, Specialistica o Ciclo Unico (5 anni)
                  </p>
                </div>
                
                <div className="flex items-center space-x-3 pt-2">
                  <Checkbox 
                    id="lode" 
                    checked={lode}
                    onCheckedChange={(checked) => setLode(checked as boolean)}
                    className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                  />
                  <Label htmlFor="lode" className="text-white/80 cursor-pointer">Con Lode (+4 punti)</Label>
                </div>
              </div>
            </div>

            {/* Sezione Titoli Culturali */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90 font-semibold text-lg border-b border-white/10 pb-2">
                <BookOpen className="w-5 h-5 text-primary" />
                Titoli Culturali
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Certificazioni Linguistiche */}
                <div className="space-y-2">
                  <Label htmlFor="numB2" className="text-white/80">Certificazioni Linguistiche B2 (3 pt)</Label>
                  <Input 
                    id="numB2" 
                    type="number" 
                    min="0" 
                    value={numB2}
                    onChange={(e) => setNumB2(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Certificazioni linguistiche livello B2
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="numC1" className="text-white/80">Certificazioni Linguistiche C1 (4 pt)</Label>
                  <Input 
                    id="numC1" 
                    type="number" 
                    min="0" 
                    value={numC1}
                    onChange={(e) => setNumC1(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Certificazioni linguistiche livello C1
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="numC2" className="text-white/80">Certificazioni Linguistiche C2 (6 pt)</Label>
                  <Input 
                    id="numC2" 
                    type="number" 
                    min="0" 
                    value={numC2}
                    onChange={(e) => setNumC2(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Certificazioni linguistiche livello C2
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="numClil" className="text-white/80">CLIL (3 pt)</Label>
                  <Input 
                    id="numClil" 
                    type="number" 
                    min="0" 
                    max="1"
                    value={numClil}
                    onChange={(e) => setNumClil(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Corso CLIL universitario (massimo 1)
                  </p>
                </div>

                {/* Titoli Accademici */}
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <Checkbox 
                      id="hasDottorato" 
                      checked={hasDottorato}
                      onCheckedChange={(checked) => setHasDottorato(checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="hasDottorato" className="text-white/90 cursor-pointer font-medium">
                        Dottorato di Ricerca (12 pt)
                      </Label>
                      <p className="text-xs text-white/50">
                        Dottorato di ricerca (massimo 1)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <Checkbox 
                      id="hasSecondaLaurea" 
                      checked={hasSecondaLaurea}
                      onCheckedChange={(checked) => setHasSecondaLaurea(checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="hasSecondaLaurea" className="text-white/90 cursor-pointer font-medium">
                        Seconda Laurea (1.5 pt)
                      </Label>
                      <p className="text-xs text-white/50">
                        Laurea triennale o diploma accademico I livello
                      </p>
                    </div>
                  </div>
                </div>

                {/* Master e Perfezionamenti */}
                <div className="space-y-2">
                  <Label htmlFor="numMasterUniv" className="text-white/80">Master Universitari (1 pt)</Label>
                  <Input 
                    id="numMasterUniv" 
                    type="number" 
                    min="0" 
                    max="3"
                    value={numMasterUniv}
                    onChange={(e) => setNumMasterUniv(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Master universitari I o II livello (massimo 3)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center space-x-3 p-4 rounded-lg bg-white/5 border border-white/10">
                    <Checkbox 
                      id="hasMasterL2" 
                      checked={hasMasterL2}
                      onCheckedChange={(checked) => setHasMasterL2(checked as boolean)}
                      className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:text-primary"
                    />
                    <div className="space-y-1">
                      <Label htmlFor="hasMasterL2" className="text-white/90 cursor-pointer font-medium">
                        Master in L2 (3 pt)
                      </Label>
                      <p className="text-xs text-white/50">
                        Master universitario in didattica L2 (massimo 1)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sezione Informatica */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white/90 font-semibold text-lg border-b border-white/10 pb-2">
                <Laptop className="w-5 h-5 text-primary" />
                Certificazioni Informatiche
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="numDigComp22" className="text-white/80">In linea al DigComp 2.2 (0.5 pti)</Label>
                  <Input 
                    id="numDigComp22" 
                    type="number" 
                    min="0" 
                    value={numDigComp22}
                    onChange={(e) => setNumDigComp22(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Certificazioni valide: EIPASS User, EIPASS Standard, IDPASS EDSC DigComp 2.2, IDCERT DigComp 2.2 (0.5 punti ciascuna)
                  </p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="numDigCompEdu" className="text-white/80">In linea al DigComp Edu (1 pto)</Label>
                  <Input 
                    id="numDigCompEdu" 
                    type="number" 
                    min="0" 
                    value={numDigCompEdu}
                    onChange={(e) => setNumDigCompEdu(Number(e.target.value))}
                    className="glass-input"
                  />
                  <p className="text-xs text-white/50">
                    Certificazioni valide: EIPASS DigCompEdu, IDPASS DigCompEdu, IDCERT DigCompEdu (1 punto ciascuna)
                  </p>
                </div>
              </div>
              
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30">
                <p className="text-xs text-blue-200">
                  ⓘ Massimo 2 punti totali per certificazioni informatiche
                </p>
              </div>
            </div>

            {/* Consenso Privacy */}
            <div className="flex items-start space-x-3 p-4 rounded-lg bg-white/5 border border-white/10 mt-6">
              <Checkbox 
                id="privacyConsent" 
                checked={privacyConsent}
                onCheckedChange={(checked) => setPrivacyConsent(checked as boolean)}
                className="border-white/30 data-[state=checked]:bg-secondary data-[state=checked]:text-primary mt-1"
              />
              <div className="space-y-1">
                <Label htmlFor="privacyConsent" className="text-white/90 cursor-pointer font-medium leading-relaxed">
                  Autorizzo il trattamento dei miei dati personali (nome, email, cellulare) e acconsento ad essere contattato tramite email e telefono per informazioni relative alle Graduatorie Provinciali per le Supplenze (GPS).
                </Label>
                <p className="text-xs text-white/50">
                  Leggi la nostra <a href="/privacy" target="_blank" className="underline hover:text-white/80">Privacy Policy</a>
                </p>
              </div>
            </div>

            <Button 
              type="submit" 
              className="w-full h-14 text-lg font-bold bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary shadow-lg shadow-primary/20 transition-all duration-300 rounded-xl mt-8"
              disabled={!classeConcorso || !privacyConsent}
            >
              Calcola Punteggio e Analizza
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
