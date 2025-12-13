import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-sm">
            © {currentYear} GPS Calculator. Tutti i diritti riservati.
          </div>

          {/* Link legali */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <Link href="/privacy">
              <a className="hover:text-white transition-colors">
                Privacy Policy
              </a>
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/cookie-policy">
              <a className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </Link>
            <span className="text-gray-600">|</span>
            <Link href="/termini-condizioni">
              <a className="hover:text-white transition-colors">
                Termini e Condizioni
              </a>
            </Link>
          </div>

          {/* Email contatto */}
          <div className="text-sm">
            <a 
              href="mailto:direzione@infogps2026.it" 
              className="hover:text-white transition-colors"
            >
              direzione@infogps2026.it
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
