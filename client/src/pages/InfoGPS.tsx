import { Info, GraduationCap, Award, Clock, Languages, Laptop, BookOpen } from "lucide-react";

export function InfoGPS() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-12 md:py-16">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 backdrop-blur-sm p-5 rounded-2xl">
                <Info className="w-12 h-12 md:w-16 md:h-16" />
              </div>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Info GPS 2026
            </h1>
            
            <p className="text-lg md:text-xl text-white/90">
              Tutte le informazioni essenziali sulle Graduatorie Provinciali per le Supplenze
            </p>
          </div>
        </div>
      </div>

      <main className="container py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Cosa sono le GPS */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-100 p-3 rounded-xl">
                <GraduationCap className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Cosa sono le Graduatorie GPS?
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="leading-relaxed mb-4">
                Le <strong>Graduatorie Provinciali per le Supplenze (GPS)</strong> sono elenchi di docenti abilitati e non abilitati, 
                suddivisi per classe di concorso e provincia, utilizzati per assegnare supplenze annuali (31 agosto) e fino al termine 
                delle attività didattiche (30 giugno).
              </p>
              
              <p className="leading-relaxed">
                Le GPS vengono aggiornate ogni <strong>due anni</strong> e rappresentano uno strumento fondamentale per chi aspira 
                a lavorare nel mondo della scuola.
              </p>
            </div>
          </div>

          {/* Fasce */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Le Due Fasce GPS
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Fascia 1 */}
              <div className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-blue-600 text-white font-bold px-3 py-1 rounded-lg text-sm">
                    FASCIA 1
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Docenti Abilitati
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Riservata a chi possiede l'<strong>abilitazione all'insegnamento</strong> per la specifica classe di concorso. 
                  Questa fascia ha priorità assoluta nell'assegnazione delle supplenze.
                </p>
              </div>

              {/* Fascia 2 */}
              <div className="border-2 border-green-200 rounded-xl p-6 bg-green-50">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-green-600 text-white font-bold px-3 py-1 rounded-lg text-sm">
                    FASCIA 2
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Docenti Non Abilitati
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Riservata a chi possiede il <strong>titolo di studio richiesto</strong> (laurea + CFU) ma non l'abilitazione. 
                  Le supplenze vengono assegnate dopo aver esaurito la Fascia 1.
                </p>
              </div>
            </div>
          </div>

          {/* Come si calcola il punteggio */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Clock className="w-8 h-8 text-purple-600" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Come si Calcola il Punteggio GPS
              </h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed text-lg">
                Il punteggio GPS si ottiene sommando diversi elementi. Ecco i principali:
              </p>

              <div className="grid gap-4">
                {/* Voto Laurea */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-blue-100 p-2 rounded-lg shrink-0">
                    <GraduationCap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Voto di Laurea</h4>
                    <p className="text-gray-700">
                      Fino a <strong>12 punti</strong> in base al voto di laurea (da 76/110 a 110/110 con lode)
                    </p>
                  </div>
                </div>

                {/* Certificazioni Linguistiche */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-green-100 p-2 rounded-lg shrink-0">
                    <Languages className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Certificazioni Linguistiche</h4>
                    <p className="text-gray-700">
                      <strong>3 punti</strong> per ogni certificazione C1, <strong>6 punti</strong> per ogni C2 (max 12 punti totali)
                    </p>
                  </div>
                </div>

                {/* CLIL */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-purple-100 p-2 rounded-lg shrink-0">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Certificazioni CLIL</h4>
                    <p className="text-gray-700">
                      <strong>3 punti</strong> per ogni certificazione CLIL (max 9 punti totali)
                    </p>
                  </div>
                </div>

                {/* Certificazioni Informatiche */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-orange-100 p-2 rounded-lg shrink-0">
                    <Laptop className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Certificazioni Informatiche</h4>
                    <p className="text-gray-700">
                      <strong>0,5 punti</strong> per ogni certificazione informatica (max 2 punti totali)
                    </p>
                  </div>
                </div>

                {/* Master */}
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="bg-indigo-100 p-2 rounded-lg shrink-0">
                    <Award className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Master e Perfezionamenti</h4>
                    <p className="text-gray-700">
                      <strong>1 punto</strong> per ogni master o perfezionamento biennale (max 3 punti totali)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Scadenze */}
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg p-8 md:p-10 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-white/20 p-3 rounded-xl">
                <Clock className="w-8 h-8" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">
                Scadenze Importanti
              </h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Aggiornamento GPS 2026</h4>
                <p className="text-white/90 leading-relaxed">
                  Le graduatorie GPS vengono aggiornate ogni <strong>due anni</strong>. Il prossimo aggiornamento è previsto per 
                  la <strong>primavera 2026</strong>. Le date esatte verranno comunicate dal Ministero dell'Istruzione.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-xl mb-2">Preparati in Anticipo</h4>
                <p className="text-white/90 leading-relaxed">
                  È fondamentale iniziare a raccogliere i titoli e le certificazioni <strong>con largo anticipo</strong>, 
                  poiché alcuni percorsi formativi richiedono diversi mesi per essere completati.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
