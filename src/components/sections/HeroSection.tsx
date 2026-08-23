"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { ClientsSection } from "@/components/sections/ClientsSection";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Autoplay the video when component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="w-full min-h-[82vh] sm:min-h-[84vh] md:min-h-[90vh] py-12 sm:py-16 md:py-28 relative overflow-hidden flex flex-col">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-cyberia-black/70 z-[1]" />
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
        >
          <source
            src="/assets/1341898313.webm"
            type="video/webm"
          />
          {/* Poster fallback for environments that block video */}
          {/* Fallback for browsers that don't support webm */}
          Your browser does not support the video tag.
        </video>
      </div>

      <div className="container mx-auto relative z-10 flex-1 flex items-center justify-center pb-24 md:pb-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-neuropol font-extrabold text-cyberia-orange mb-8 leading-none">
            <span className="block py-2">Un equipo in-house</span>
            <span className="block py-2">Un asesor on-call </span>
          </h1>

          <p className="text-sm md:text-base font-roboto-mono mb-10 text-cyberia-orange/80 max-w-2xl mx-auto">
           Ahorra tiempo, dinero y dolores de cabeza con nuestros devs, diseñadores, redactores y soporte técnico 100% humano.
</p>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center items-center whitespace-nowrap">
            <Link
              href="#mas"
              className="bg-cyberia-orange text-black py-2 px-3 sm:px-6 font-neuropol transition-colors text-[11px] sm:text-lg border border-transparent hover:bg-black hover:text-cyberia-orange hover:border-cyberia-orange whitespace-nowrap"
            >
              SABER MÁS &gt;
            </Link>
            <Link
              href="http://wa.me/5493512868281"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyberia-orange text-black py-2 px-3 sm:px-6 font-neuropol transition-colors text-[11px] sm:text-lg border border-transparent hover:bg-black hover:text-cyberia-orange hover:border-cyberia-orange whitespace-nowrap"
            >
              CONTACTANOS &gt;
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10 w-full">
        <ClientsSection />
      </div>
    </section>
  );
}
