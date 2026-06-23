import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import { Heart } from "lucide-react";
import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";

const JourneySection = lazy(() => import("@/components/JourneySection"));
const BeforeAfterCarousel = lazy(() => import("@/components/BeforeAfterCarousel"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const SimulationSection = lazy(() => import("@/components/SimulationSection"));
const TechnologySection = lazy(() => import("@/components/TechnologySection"));
const ProceduresSection = lazy(() => import("@/components/ProceduresSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const LocationSection = lazy(() => import("@/components/LocationSection"));

const Index = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <Suspense fallback={null}>
        <JourneySection id="journey" />
        <BeforeAfterCarousel />
        <AboutSection />
        <SimulationSection />
        <TechnologySection />
        <ProceduresSection />
        <LocationSection />
        <CTASection />
      </Suspense>
      <footer ref={ref} className="py-12 px-6 relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-b from-gold/30 to-transparent" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Logo */}
          <div className="mb-6" style={revealStyle(isVisible, 0)}>
            <span className="font-serif text-2xl text-foreground">
              Dr. Jonathan <span className="text-gold">Vidal</span>
            </span>
            <p className="text-muted-foreground text-sm mt-2 tracking-widest uppercase">
              Cirurgia Facial Especializada
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 mb-6" style={revealStyle(isVisible, 100)}>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-gold/30" />
            <Heart className="w-4 h-4 text-gold/40" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-gold/30" />
          </div>

          {/* Contato */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-6" style={revealStyle(isVisible, 200)}>
            <a
              href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/80 hover:text-gold transition-colors text-sm"
            >
              (81) 99217-8724
            </a>
            <span className="hidden md:block text-muted-foreground/30">•</span>
            <a
              href="mailto:contato@jonathanvidal.com.br"
              className="text-muted-foreground/80 hover:text-gold transition-colors text-sm"
            >
              contato@jonathanvidal.com.br
            </a>
          </div>

          <p className="text-muted-foreground/60 text-sm" style={revealStyle(isVisible, 300)}>
            © {new Date().getFullYear()} Dr. Jonathan Vidal — Cirurgia Facial
          </p>
          <p className="text-muted-foreground/40 text-xs mt-2" style={revealStyle(isVisible, 350)}>
            CRM 18102 | RQE 8551
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
