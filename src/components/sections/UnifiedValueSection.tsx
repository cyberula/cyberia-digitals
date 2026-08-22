import Image from "next/image";

type UnifiedValueItem = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
};

const unifiedValues: UnifiedValueItem[] = [
  {
    title: "Soporte, por cualquier cosa, cualquier día",
    description:
      "Olvidate de idas y vueltas con mil e-mails o chatbots AI por cada pequeño bache con cada uno de tus servicios digitales y técnicos. A cada uno de nuestros clientes se les asigna un único asesor, de carne y hueso, on-call. Molestalo.",
    imageSrc: "/assets/4088045676.png",
    imageAlt: "Soporte técnico",
    reverse: false,
  },
  {
    title: "Un solo servicio, una sola solución",
    description:
      "Decile basta al teléfono descompuesto entre freelancers, productoras, diseñadores, desarrolladores y publicistas. Nuestro equipo colabora en conjunto en todos los aspectos de tu proyecto para darle una solución final.",
    imageSrc: "/assets/2324792894.png",
    imageAlt: "Un solo servicio",
    reverse: true,
  },
  {
    title: "Es inevitable, relajate y gozá",
    description:
      "Trabajamos con métodos testeados y medibles para optimizar los procesos técnicos y operativos. Automatizando lo automatizable y humanizando lo humano, los resultados reales llegan en tiempo récord.",
    imageSrc: "/assets/215325880.png",
    imageAlt: "Es inevitable",
    reverse: false,
  },
];

export function UnifiedValueSection() {
  return (
    <section className="w-full py-12 bg-cyberia-black" id="mas">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="space-y-10 md:space-y-12">
          {unifiedValues.map((item, index) => (
            <div key={item.title} className={`${index > 0 ? "pt-10 md:pt-12 border-t border-cyberia-orange/10" : ""}`}>
              <div className="flex flex-col md:hidden gap-4 text-center">
                <div className="flex justify-center">
                  <div className="relative w-full h-[200px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-neuropol text-cyberia-orange">
                  {item.title}
                </h3>

                <p className="font-roboto-mono text-sm text-cyberia-orange/80 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className={`hidden md:grid grid-cols-2 gap-8 items-center`}>
                <div className={`flex flex-col justify-center h-full ${item.reverse ? "md:order-2" : "md:order-1"}`}>
                  <h3 className="text-2xl md:text-3xl font-neuropol mb-4 text-cyberia-orange">
                    {item.title}
                  </h3>
                  <p className="font-roboto-mono text-sm text-cyberia-orange/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className={`flex justify-center ${item.reverse ? "md:order-1" : "md:order-2"}`}>
                  <div className="relative w-full h-[200px] md:h-[280px]">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}