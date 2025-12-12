import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, GraduationCap, Award, Clock, Languages, Laptop } from "lucide-react";
import { Link } from "wouter";

export function InfoGPS() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Link href="/">
          <Button variant="ghost" className="text-white hover:bg-white/10 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Torna al Calcolatore
          </Button>
        </Link>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Guida alle Graduatorie GPS
            </h1>
            <p className="text-xl text-white/70">
              Tutto quello che devi sapere su punteggi, fasce e strategie
            </p>
          </div>

          {/* Cosa sono le GPS */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-secondary" />
                Cosa sono le Graduatorie GPS?
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Le <strong>Graduatorie Provinciali per le Supplenze (GPS)</strong> sono lo strumento principale 
                utilizzato dagli Uffici Scolastici Provinciali (USP) per l'assegnazione degli incarichi di supplenza 
                nelle scuole dell'Infanzia, Primarie e Secondarie di I e II grado.
              </p>
              <p>
                Vengono utilizzate per la copertura di:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Supplenze annuali (31 agosto)</strong>: cattedre vacanti fino alla fine dell'anno scolastico</li>
                <li><strong>Supplenze temporanee (30 giugno)</strong>: cattedre scoperte per il periodo delle attività didattiche</li>
              </ul>
            </CardContent>
          </Card>

          {/* Fasce GPS */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-secondary" />
                Le Fasce delle GPS
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-6">
              {/* Infanzia e Primaria */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Scuola dell'Infanzia e Primaria</h3>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Badge className="mb-2 bg-green-500/20 text-green-200 border-green-500/30">I Fascia</Badge>
                    <p className="text-sm">
                      Soggetti in possesso dell'<strong>abilitazione</strong>: laurea in Scienze della Formazione Primaria 
                      o diploma magistrale conseguito entro il 2001/2002
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Badge className="mb-2 bg-yellow-500/20 text-yellow-200 border-yellow-500/30">II Fascia</Badge>
                    <p className="text-sm">
                      Studenti del corso di laurea in Scienze della Formazione Primaria dal 3°, 4° e 5° anno 
                      (con 150, 200 o 250 CFU conseguiti)
                    </p>
                  </div>
                </div>
              </div>

              {/* Secondaria */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Scuola Secondaria di I e II Grado</h3>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Badge className="mb-2 bg-green-500/20 text-green-200 border-green-500/30">I Fascia</Badge>
                    <p className="text-sm">Docenti già <strong>abilitati</strong></p>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Badge className="mb-2 bg-yellow-500/20 text-yellow-200 border-yellow-500/30">II Fascia</Badge>
                    <p className="text-sm">
                      Docenti in possesso del titolo di accesso + 24 CFU, oppure abilitazione su altra classe 
                      di concorso, oppure già inseriti nelle GPS per la stessa classe
                    </p>
                  </div>
                </div>
              </div>

              {/* Sostegno */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Posto di Sostegno</h3>
                <div className="grid gap-3">
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                    <Badge className="mb-2 bg-green-500/20 text-green-200 border-green-500/30">I Fascia</Badge>
                    <p className="text-sm">Docenti <strong>specializzati</strong> su sostegno nel relativo grado</p>
                  </div>
                  <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                    <Badge className="mb-2 bg-yellow-500/20 text-yellow-200 border-yellow-500/30">II Fascia</Badge>
                    <p className="text-sm">
                      Soggetti con almeno 3 anni di servizio su sostegno oppure in possesso del titolo 
                      di accesso alle GPS di II fascia
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Punteggio Laurea */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-secondary" />
                Punteggio Voto di Laurea
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Il punteggio base parte da <strong>12 punti</strong> per un voto di 76/110 o inferiore. 
                Per ogni voto superiore a 76 si aggiungono <strong>0,5 punti</strong>.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left py-2 text-white">Voto</th>
                      <th className="text-right py-2 text-white">Punteggio</th>
                      <th className="text-left py-2 pl-8 text-white">Voto</th>
                      <th className="text-right py-2 text-white">Punteggio</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/70">
                    <tr><td>≤ 76</td><td className="text-right">12</td><td className="pl-8">95</td><td className="text-right">21.5</td></tr>
                    <tr><td>80</td><td className="text-right">14</td><td className="pl-8">100</td><td className="text-right">24</td></tr>
                    <tr><td>85</td><td className="text-right">16.5</td><td className="pl-8">105</td><td className="text-right">26.5</td></tr>
                    <tr><td>90</td><td className="text-right">19</td><td className="pl-8">110</td><td className="text-right font-bold text-white">29</td></tr>
                    <tr><td colSpan={2}></td><td className="pl-8 font-bold text-white">110 e lode</td><td className="text-right font-bold text-white">33</td></tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Punteggio Servizio */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Clock className="w-6 h-6 text-secondary" />
                Punteggio per Servizio (Supplenze)
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Le supplenze rappresentano una delle principali fonti di punteggio. 
                Il punteggio varia in base alla durata e al tipo di servizio.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {/* Servizio Specifico */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Servizio Specifico</h4>
                  <p className="text-sm text-white/60">Nella propria classe di concorso</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>16-45 giorni</span><span className="font-mono">2 pt</span></div>
                    <div className="flex justify-between"><span>46-75 giorni</span><span className="font-mono">4 pt</span></div>
                    <div className="flex justify-between"><span>76-105 giorni</span><span className="font-mono">6 pt</span></div>
                    <div className="flex justify-between"><span>106-135 giorni</span><span className="font-mono">8 pt</span></div>
                    <div className="flex justify-between"><span>136-165 giorni</span><span className="font-mono">10 pt</span></div>
                    <div className="flex justify-between font-bold text-white"><span>≥ 166 giorni</span><span className="font-mono">12 pt</span></div>
                  </div>
                </div>

                {/* Servizio Aspecifico */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-white">Servizio Aspecifico</h4>
                  <p className="text-sm text-white/60">In classe di concorso diversa</p>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between"><span>16-45 giorni</span><span className="font-mono">1 pt</span></div>
                    <div className="flex justify-between"><span>46-75 giorni</span><span className="font-mono">2 pt</span></div>
                    <div className="flex justify-between"><span>76-105 giorni</span><span className="font-mono">3 pt</span></div>
                    <div className="flex justify-between"><span>106-135 giorni</span><span className="font-mono">4 pt</span></div>
                    <div className="flex justify-between"><span>136-165 giorni</span><span className="font-mono">5 pt</span></div>
                    <div className="flex justify-between font-bold text-white"><span>≥ 166 giorni</span><span className="font-mono">6 pt</span></div>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-sm">
                <strong>Nota:</strong> Anche le supplenze da MAD (Messa a Disposizione) danno diritto al punteggio pieno!
              </div>
            </CardContent>
          </Card>

          {/* Titoli Culturali */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="w-6 h-6 text-secondary" />
                Titoli Culturali
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Master I o II livello (60 CFU)</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">1 punto</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Corso di Perfezionamento (60 CFU)</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">1 punto</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Master in L2 (Didattica Italiano L2)</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">3 punti</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificazioni Informatiche */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Laptop className="w-6 h-6 text-secondary" />
                Certificazioni Informatiche
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <p>
                Ogni certificazione informatica vale <strong>0,5 punti</strong>, fino a un massimo di <strong>2 punti</strong> (4 certificazioni).
              </p>
              <div className="grid gap-2">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white mb-1">In linea al DigComp 2.2 (0.5 pt)</div>
                  <p className="text-sm text-white/60">EIPASS User, EIPASS Standard, IDPASS EDSC DigComp 2.2, IDCERT DigComp 2.2</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <div className="font-semibold text-white mb-1">In linea al DigComp Edu (1 pt)</div>
                  <p className="text-sm text-white/60">EIPASS DigCompEdu, IDPASS DigCompEdu, IDCERT DigCompEdu</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Certificazioni Linguistiche */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Languages className="w-6 h-6 text-secondary" />
                Certificazioni Linguistiche
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white/80 space-y-4">
              <div className="grid gap-3">
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Inglese B2</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">3 punti</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Inglese C1</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">4 punti</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10">
                  <span>Inglese C2</span>
                  <Badge className="bg-secondary/20 text-secondary border-secondary/30">6 punti</Badge>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                  <span className="font-semibold text-white">CLIL + Certificazione Linguistica</span>
                  <Badge className="bg-green-500/20 text-green-200 border-green-500/30">+3 punti</Badge>
                </div>
              </div>
              <div className="p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-cyan-500/10 border border-green-500/20">
                <div className="text-sm font-semibold text-white mb-2">Esempio Massimo Punteggio:</div>
                <div className="text-sm">Inglese C2 (6 pt) + CLIL (3 pt) = <span className="font-bold text-green-200">9 punti</span></div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center pt-8">
            <Link href="/">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold px-8">
                Calcola il Tuo Punteggio GPS
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
