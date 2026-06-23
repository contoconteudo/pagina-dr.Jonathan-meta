import { useScrollReveal, revealStyle } from "@/hooks/useScrollReveal";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

const procedures = [
  {
    name: "Rinoplastia",
    desc: "Reconstrução nasal com técnicas avançadas",
    fullDesc:
      "A rinoplastia é a cirurgia que modifica a estrutura do nariz, podendo atuar tanto na estética quanto na função respiratória. Ela permite ajustar dorso nasal, ponta, largura, projeção e ângulos, sempre respeitando proporções faciais e limites anatômicos.",
  },
  {
    name: "Mentoplastia",
    desc: "Harmonização do mento",
    fullDesc:
      "A mentoplastia é a cirurgia de correção ou projeção do queixo. Pode ser realizada por meio de prótese, com o objetivo de melhorar o equilíbrio do perfil e a harmonia do terço inferior da face.",
  },
  {
    name: "Contorno mandibular",
    desc: "Definição da linha da mandíbula",
    fullDesc:
      "Esse procedimento visa definir e equilibrar o contorno da mandíbula. Pode envolver a colocação de próteses personalizadas para melhorar projeção, simetria e definição do terço inferior do rosto.",
  },
  {
    name: "Blefaroplastia",
    desc: "Rejuvenescimento das pálpebras",
    fullDesc:
      "A blefaroplastia é a cirurgia das pálpebras. Tem como objetivo remover excesso de pele e/ou bolsas de gordura que causam aspecto cansado ou pesado, promovendo um olhar mais leve e revitalizado.",
  },
  {
    name: "Tratamento da papada",
    desc: "Lipoaspiração submentoniana",
    fullDesc:
      "O tratamento da papada atua na remoção do excesso de gordura e/ou correção da flacidez na região abaixo do queixo. O objetivo é melhorar o contorno cervical e o perfil facial.",
  },
  {
    name: "Lifting facial",
    desc: "Rejuvenescimento facial",
    fullDesc:
      "O lifting facial é indicado para casos de flacidez moderada a avançada. Ele reposiciona estruturas profundas da face, remove excesso de pele e restaura contornos naturais, buscando rejuvenescimento com naturalidade.",
  },
  {
    name: "Otoplastia",
    desc: "Correção das orelhas",
    fullDesc:
      "A otoplastia corrige alterações no formato ou projeção das orelhas. É frequentemente indicada para o tratamento de orelhas proeminentes, proporcionando maior equilíbrio facial.",
  },
];

const ProceduresSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section ref={ref} id="procedures" className="py-16 md:py-32 px-4 md:px-6 bg-navy-light relative overflow-hidden">
      {/* Padrão decorativo de fundo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-px h-full gradient-gold" />
        <div className="absolute top-0 right-1/4 w-px h-full gradient-gold" />
        <div className="absolute top-1/3 left-0 right-0 h-px gradient-gold" />
        <div className="absolute bottom-1/3 left-0 right-0 h-px gradient-gold" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p style={revealStyle(isVisible, 0)} className="text-gold text-xs md:text-sm tracking-widest uppercase mb-3">
          Especialidades
        </p>
        <h2 style={revealStyle(isVisible, 50)} className="font-serif text-2xl md:text-5xl mb-4">
          Procedimentos{" "}
          <span className="gradient-gold-text italic">realizados</span>
        </h2>
        <p style={revealStyle(isVisible, 100)} className="text-muted-foreground text-base md:text-lg mb-12 md:mb-16 max-w-2xl mx-auto">
          Cada indicação é personalizada, respeitando a harmonia e as características únicas do seu rosto.
        </p>

        <div className="space-y-2 md:space-y-3">
          {procedures.map((proc, i) => (
            <div
              key={proc.name}
              style={revealStyle(isVisible, 150 + i * 60)}
              onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}
              className="group p-4 md:p-6 rounded-sm bg-card/30 border border-border/50 hover:border-gold/30 transition-all duration-300 hover:bg-card/50 hover:shadow-lg hover:shadow-gold/5 cursor-pointer"
            >
              <div className="flex items-center justify-between gap-2 md:gap-4">
                <div className="flex items-center gap-3 md:gap-4 flex-1 min-w-0">
                  <div className="w-2 h-2 rounded-full bg-gold/30 group-hover:bg-gold transition-colors flex-shrink-0" />
                  <div className="text-left min-w-0">
                    <span className="text-foreground/90 font-medium text-base md:text-lg block truncate">{proc.name}</span>
                    <p className="text-muted-foreground text-xs md:text-sm">{proc.desc}</p>
                  </div>
                </div>
                {expandedIndex === i ? (
                  <ChevronDown className="w-4 h-4 md:w-5 md:h-5 text-gold transition-transform duration-300 flex-shrink-0" />
                ) : (
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                )}
              </div>
              {expandedIndex === i && (
                <div className="mt-3 md:mt-4 pl-4 md:pl-6 text-muted-foreground text-xs md:text-sm leading-relaxed border-l-2 border-gold/30 animate-in slide-in-from-top-2 duration-300">
                  {proc.fullDesc}
                </div>
              )}
            </div>
          ))}
        </div>

        <div style={revealStyle(isVisible, 700)} className="mt-10 md:mt-12">
          <a
            href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-gold text-sm md:text-base px-6 md:px-8 py-3 md:py-4"
          >
            Saber mais sobre procedimentos
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProceduresSection;
