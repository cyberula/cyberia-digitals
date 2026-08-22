import Link from "next/link";
import { Phone, Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-black/95 to-cyberia-black">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-neuropol mb-6 text-cyberia-orange text-center">
            Contactanos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full">
            <Link
              href="http://wa.me/5493512868281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberia-orange text-black p-4 font-neuropol transition-colors text-center flex flex-col items-center justify-center h-[140px] hover:bg-black hover:text-cyberia-orange border border-transparent hover:border-cyberia-orange"
            >
              <span className="text-base md:text-lg mb-3">MANDANOS UN WPP</span>
            </Link>

            <Link
              href="mailto:equipo@cyberia.com.ar"
              className="bg-cyberia-orange text-black p-4 font-neuropol transition-colors text-center flex flex-col items-center justify-center h-[140px] hover:bg-black hover:text-cyberia-orange border border-transparent hover:border-cyberia-orange"
            >
              <span className="text-base md:text-lg mb-3">ENVIANOS UN MAIL</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
