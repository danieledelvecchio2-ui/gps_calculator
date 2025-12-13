import { useState, useMemo } from 'react';
import { Search, ExternalLink, BookOpen, GraduationCap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { classiDiConcorso } from '@/data/classiConcorsoData';

export default function FindClass() {
  const [searchTerm, setSearchTerm] = useState('');

  // Filtra classi in base alla ricerca
  const filteredClasses = useMemo(() => {
    if (!searchTerm.trim()) return classiDiConcorso;

    const term = searchTerm.toLowerCase();
    return classiDiConcorso.filter(
      (classe) =>
        classe.code.toLowerCase().includes(term) ||
        classe.description.toLowerCase().includes(term) ||
        classe.notes.toLowerCase().includes(term)
    );
  }, [searchTerm]);

  // Raggruppa per area disciplinare
  const groupedClasses = useMemo(() => {
    const groups: Record<string, typeof classiDiConcorso> = {
      'Infanzia e Primaria': [],
      'Lettere e Umanistiche': [],
      'Lingue Straniere': [],
      'Matematica e Scienze': [],
      'Tecniche e Tecnologiche': [],
      'Artistiche e Musicali': [],
      'Motorie e Sportive': [],
      'Sostegno': [],
      'Altre': [],
    };

    filteredClasses.forEach((classe) => {
      const code = classe.code.toUpperCase();
      const desc = classe.description.toLowerCase();

      if (code.includes('00') || desc.includes('infanzia') || desc.includes('primaria')) {
        groups['Infanzia e Primaria'].push(classe);
      } else if (desc.includes('sostegno')) {
        groups['Sostegno'].push(classe);
      } else if (
        desc.includes('letter') ||
        desc.includes('italiano') ||
        desc.includes('latino') ||
        desc.includes('greco') ||
        desc.includes('filosofia') ||
        desc.includes('storia') ||
        desc.includes('geografia')
      ) {
        groups['Lettere e Umanistiche'].push(classe);
      } else if (desc.includes('lingu') || desc.includes('inglese') || desc.includes('francese')) {
        groups['Lingue Straniere'].push(classe);
      } else if (
        desc.includes('matemat') ||
        desc.includes('fisica') ||
        desc.includes('scien') ||
        desc.includes('chimic') ||
        desc.includes('biolog')
      ) {
        groups['Matematica e Scienze'].push(classe);
      } else if (
        desc.includes('tecn') ||
        desc.includes('informatica') ||
        desc.includes('elettr') ||
        desc.includes('meccan') ||
        desc.includes('costruz')
      ) {
        groups['Tecniche e Tecnologiche'].push(classe);
      } else if (
        desc.includes('arte') ||
        desc.includes('music') ||
        desc.includes('disegno') ||
        desc.includes('design') ||
        desc.includes('danza')
      ) {
        groups['Artistiche e Musicali'].push(classe);
      } else if (desc.includes('motori') || desc.includes('sportiv')) {
        groups['Motorie e Sportive'].push(classe);
      } else {
        groups['Altre'].push(classe);
      }
    });

    // Rimuovi gruppi vuoti
    return Object.entries(groups).filter(([_, classes]) => classes.length > 0);
  }, [filteredClasses]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-12 h-12" />
            <h1 className="text-4xl md:text-5xl font-bold">Trova la tua Classe di Concorso</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Cerca tra le {classiDiConcorso.length} classi di concorso aggiornate al DM 259/17 e DM 22/12/2023
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Barra di ricerca */}
        <Card className="mb-8 shadow-lg">
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Cerca per codice (es: A-48) o materia (es: Matematica, Lettere, Lingue...)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Trovate {filteredClasses.length} classi di concorso
            </p>
          </CardContent>
        </Card>

        {/* Info box */}
        <Card className="mb-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <div className="flex items-start gap-3">
              <BookOpen className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <CardTitle className="text-blue-900">Come funziona?</CardTitle>
                <CardDescription className="text-blue-700 mt-2">
                  Cerca la classe di concorso che ti interessa per codice (es: A-48) o per materia (es: Matematica).
                  Clicca su "Vedi requisiti" per scoprire quali titoli di studio sono necessari per accedere
                  all'insegnamento.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Risultati raggruppati */}
        {groupedClasses.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-gray-500 text-lg">Nessuna classe di concorso trovata per "{searchTerm}"</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {groupedClasses.map(([area, classes]) => (
              <div key={area}>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
                  {area}
                  <Badge variant="secondary" className="ml-2">
                    {classes.length}
                  </Badge>
                </h2>

                <div className="grid gap-4 md:grid-cols-2">
                  {classes.map((classe) => (
                    <Card
                      key={classe.code}
                      className="hover:shadow-lg transition-shadow duration-200 border-l-4 border-l-blue-500"
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <Badge className="mb-2 bg-blue-600">{classe.code}</Badge>
                            <CardTitle className="text-lg leading-tight">{classe.description}</CardTitle>
                            {classe.notes && (
                              <CardDescription className="mt-2 text-sm">
                                {classe.notes.substring(0, 150)}
                                {classe.notes.length > 150 && '...'}
                              </CardDescription>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full"
                          onClick={() => window.open(classe.url, '_blank')}
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Vedi requisiti e titoli di accesso
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
