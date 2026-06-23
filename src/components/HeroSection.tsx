import simulacaoImg from "@/assets/3dsimulacao.webp";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background sutil */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-navy-light" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-float delay-300" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 lg:gap-20 items-center py-28 md:py-0 md:min-h-screen">

        {/* LEFT — Texto */}
        <div className="flex flex-col justify-center">
          {/* Badge superior */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass-light border border-gold/20 animate-hero-reveal w-fit"
            style={{ animationDelay: '100ms' }}
          >
            <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
            <span className="text-gold text-xs tracking-widest uppercase">Cirurgia Facial Especializada</span>
          </div>

          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-8 animate-hero-reveal"
            style={{ animationDelay: '200ms' }}
          >
            Confiança esculpida{" "}
            <span className="gradient-gold-text italic">nos detalhes.</span>
          </h1>

          <p
            className="text-muted-foreground text-lg leading-relaxed mb-4 animate-hero-reveal"
            style={{ animationDelay: '350ms' }}
          >
            Nem sempre é sobre mudar o rosto. É sobre se sentir bem com você.
          </p>
          <p
            className="text-muted-foreground text-base leading-relaxed mb-10 animate-hero-reveal"
            style={{ animationDelay: '450ms' }}
          >
            Quando surge o desejo de mudar, essa decisão precisa ser feita com calma e segurança.
            Aqui, cada etapa do processo é feita de forma personalizada, aliando tecnologia com
            naturalidade e harmonia, para que seu tratamento seja conduzido com precisão e segurança.
          </p>

          <div
            className="animate-hero-reveal"
            style={{ animationDelay: '600ms' }}
          >
            <a
              href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold group relative overflow-hidden inline-flex"
            >
              <span className="relative z-10">Agendar avaliação personalizada</span>
              <div className="absolute inset-0 animate-shimmer" />
            </a>
          </div>
        </div>

        {/* RIGHT — Imagem do Dr. em cirurgia */}
        <div
          className="relative animate-hero-reveal hidden md:block"
          style={{ animationDelay: '300ms' }}
        >
          {/* Moldura dourada decorativa */}
          <div className="absolute -inset-2 rounded-sm border border-gold/20" />
          <div className="absolute -inset-4 rounded-sm border border-gold/10" />

          <div className="relative overflow-hidden rounded-sm aspect-square bg-background">
            <img
              src={simulacaoImg}
              alt="Simulação 3D facial"
              className="absolute inset-0 w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/60 animate-hero-reveal" style={{ animationDelay: '750ms' }}>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
