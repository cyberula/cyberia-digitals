import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { PackageSection } from "@/components/sections/PackageSection";
import { UnifiedValueSection } from "@/components/sections/UnifiedValueSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-1">
        <HeroSection />
        <ClientsSection />
        <PackageSection />
        <UnifiedValueSection />
        <ServicesSection />
        <ContactSection />
      </div>

      <Footer />
    </main>
  );
}
