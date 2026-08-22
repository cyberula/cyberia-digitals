import Link from "next/link";

export function ContactSection() {
  return (
    <section className="relative w-full min-h-screen py-20 overflow-hidden bg-gradient-to-b from-black/95 to-cyberia-black flex items-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/assets/ezgif-28e648f985b5e163.gif")',
          backgroundRepeat: "repeat",
          backgroundSize: "180px auto",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center">


          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl w-full place-items-center">
            <Link
              href="http://wa.me/5493512868281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberia-orange text-black p-3 font-neuropol transition-colors text-center flex flex-col items-center justify-center h-[110px] hover:bg-black hover:text-cyberia-orange border border-transparent hover:border-cyberia-orange"
            >
              <span className="text-sm md:text-base">MANDANOS UN WPP</span>
            </Link>

            <Link
              href="mailto:equipo@cyberia.com.ar"
              className="bg-cyberia-orange text-black p-3 font-neuropol transition-colors text-center flex flex-col items-center justify-center h-[110px] hover:bg-black hover:text-cyberia-orange border border-transparent hover:border-cyberia-orange"
            >
              <span className="text-sm md:text-base">ENVIANOS UN MAIL</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
