import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Send, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

export function Contact() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    messaggio: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmailMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      setIsSubmitted(true);
      toast.success("Messaggio inviato con successo!");
      setFormData({ nome: "", email: "", telefono: "", messaggio: "" });
    },
    onError: (error) => {
      toast.error(error.message || "Errore nell'invio del messaggio. Riprova.");
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmailMutation.mutateAsync(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
            <ArrowLeft className="mr-2 h-4 w-4" /> Torna alla Home
          </Button>
        </Link>

        <div className="max-w-3xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Contattaci
            </h1>
            <p className="text-xl text-white/70">
              Richiedi una guida personalizzata per le Graduatorie GPS
            </p>
          </div>

          {/* Contact Form */}
          <Card className="glass-panel border-0">
            <CardHeader>
              <CardTitle className="text-white text-2xl">
                Invia la tua richiesta
              </CardTitle>
              <p className="text-white/60 text-sm">
                Compila il form e ti risponderemo il prima possibile con una consulenza personalizzata
              </p>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 mb-4">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Messaggio Inviato!</h3>
                  <p className="text-white/70">
                    Grazie per averci contattato. Ti risponderemo entro 24-48 ore.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 bg-white/10 hover:bg-white/20 text-white"
                  >
                    Invia un altro messaggio
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-white text-sm font-medium">
                      Nome e Cognome *
                    </label>
                    <Input
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleChange}
                      required
                      placeholder="Mario Rossi"
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-white text-sm font-medium">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="mario.rossi@example.com"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="telefono" className="text-white text-sm font-medium">
                        Telefono
                      </label>
                      <Input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="+39 333 1234567"
                        className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="messaggio" className="text-white text-sm font-medium">
                      Messaggio *
                    </label>
                    <Textarea
                      id="messaggio"
                      name="messaggio"
                      value={formData.messaggio}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Descrivi la tua situazione e cosa vorresti sapere sulle GPS..."
                      className="bg-white/5 border-white/10 text-white placeholder:text-white/40 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-6 text-lg"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Invia Richiesta
                      </>
                    )}
                  </Button>

                  <p className="text-white/40 text-xs text-center">
                    Inviando questo form accetti la nostra{" "}
                    <Link href="/privacy" className="underline hover:text-white/60">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Info Box */}
          <Card className="glass-panel border-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20">
            <CardContent className="p-6">
              <h3 className="text-white font-semibold mb-2">
                Cosa possiamo fare per te
              </h3>
              <ul className="text-white/70 text-sm space-y-2 ml-7">
                <li>• Analisi personalizzata del tuo punteggio GPS</li>
                <li>• Consulenza su certificazioni e titoli da conseguire</li>
                <li>• Strategie per scalare le graduatorie provinciali</li>
                <li>• Supporto nella scelta delle province più favorevoli</li>
                <li>• Assistenza nella compilazione delle domande</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
