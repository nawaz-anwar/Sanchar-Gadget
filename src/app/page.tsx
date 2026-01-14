import { ContactSection } from "@/components/landing/contact-section";
import { DomainInfoSection } from "@/components/landing/domain-info-section";
import { FooterSection } from "@/components/landing/footer-section";
import { HeroSection } from "@/components/landing/hero-section";

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 sm:py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-12 md:gap-20">
            <HeroSection />
            <DomainInfoSection />
            <ContactSection />
          </div>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
