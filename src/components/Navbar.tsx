import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Remove the static pre-rendered navbar from index.html now that React has taken over
    document.getElementById("pre-nav")?.remove();

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#journey", label: "Jornada" },
    { href: "#about", label: "Sobre" },
    { href: "#procedures", label: "Procedimentos" },
    { href: "#technology", label: "Tecnologia" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "glass border-b border-gold/10 shadow-lg shadow-gold/5 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="group">
          <span className="font-serif text-lg text-foreground">
            Dr. Jonathan{" "}
            <span className="text-gold group-hover:gradient-gold-text transition-all duration-300">
              Vidal
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-gold transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block btn-gold !px-5 !py-2.5"
        >
          Agendar consulta
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-gold hover:text-foreground transition-colors"
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass border-t border-gold/10 transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base text-muted-foreground hover:text-gold transition-colors py-2 border-b border-border/30"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5581992178724?text=Ol%C3%A1%2C%20vim%20pelo%20Instagram%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20rinoplastia."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-center mt-2"
          >
            Agendar consulta
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
