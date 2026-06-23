import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 md:py-32 px-6 relative overflow-hidden bg-light-surface">
      {/* Fundo decorativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-light via-light-surface to-light-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      {/* Linhas decorativas */}
      <div className="absolute top-0 left-1/4 w-px h-24 bg-gradient-to-b from-gold/20 to-transparent" />
      <div className="absolute top-0 right-1/4 w-px h-24 bg-gradient-to-b from-gold/20 to-transparent" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        {/* Badge */}
        <div
          style={revealStyle(isVisible, 0)}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-gold/20 bg-white/50"
        >
          <span className="text-gold text-xs tracking-widest uppercase">Próximo passo</span>
        </div>

        <h2 style={revealStyle(isVisible, 100)} className="font-serif text-3xl md:text-5xl mb-6 text-navy">
          O próximo passo é{" "}
          <span className="gradient-gold-text italic">simples</span>
        </h2>
        <p style={revealStyle(isVisible, 200)} className="text-light-muted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          A avaliação é o momento de tirar dúvidas, visualizar possibilidades
          e saber se faz sentido pra você.
        </p>

        {/* Divider decorativo */}
        <div style={revealStyle(isVisible, 300)} className="flex items-center justify-center gap-4 mb-10">
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/30" />
          <div className="w-2 h-2 rounded-full bg-gold/30" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/30" />
        </div>

        <div style={revealStyle(isVisible, 400)}>
          <a
            href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold group inline-flex items-center gap-3"
          >
            <span>Agendar avaliação personalizada</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <p style={revealStyle(isVisible, 500)} className="text-light-muted/60 text-sm mt-8">
          Sem compromisso. Uma conversa para entender seus objetivos.
        </p>
      </div>

      {/* Linha inferior */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
    </section>
  );
};

export default CTASection;
