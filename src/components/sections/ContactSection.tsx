import Link from "next/link";

export function ContactSection() {
  return (
    <section className="relative w-full min-h-[85vh] md:min-h-[90vh] py-8 md:py-10 overflow-hidden bg-gradient-to-b from-black/95 to-cyberia-black flex items-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/assets/ezgif-28e648f985b5e163.gif")',
          backgroundRepeat: "repeat",
          backgroundSize: "180px auto",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="relative z-10 container mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center w-full">
            <Link
              href="http://wa.me/5493512868281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-cyberia-orange px-5 py-3 font-neuropol transition-colors text-center inline-flex items-center justify-center hover:bg-cyberia-orange hover:text-black border border-cyberia-orange hover:border-black w-fit"
            >
              <span className="text-base md:text-2xl whitespace-nowrap">CHARLEMOS HOY &gt;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
