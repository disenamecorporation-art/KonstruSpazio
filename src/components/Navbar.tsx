import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  currentView: 'home' | 'contacto' | 'servicios';
  onNavigate: (view: 'home' | 'contacto' | 'servicios') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, currentView, onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'INICIO', href: '#inicio', view: 'home' as const, section: 'inicio' },
    { name: 'NOSOTROS', href: '#por-que-elegirnos', view: 'home' as const, section: 'por-que-elegirnos' },
    { name: 'SERVICIOS', href: '#servicios', view: 'servicios' as const, section: 'servicios' },
    { name: 'PROYECTOS', href: '#proyectos', view: 'home' as const, section: 'proyectos' },
    { name: 'CONTACTO', href: '#contacto', view: 'contacto' as const, section: 'contacto' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    onNavigate(link.view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || currentView === 'contacto'
            ? 'super-glass py-3.5 shadow-2xl border-b border-white/15'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-3 group bg-transparent border-none cursor-pointer"
          >
            <img
              src="https://i.postimg.cc/mk631BNQ/logoenblancokonstruspazio.png"
              alt="Konstru Spazio Logo"
              className="h-11 sm:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </button>

          {/* Desktop Navigation - Free Menu */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = currentView === link.view && (link.view === 'contacto' || activeSection === link.section);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  className={`text-xs font-bold tracking-[0.15em] transition-all duration-300 relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#E8501E] scale-105'
                      : 'text-white/80 hover:text-white hover:scale-105'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[#E8501E] rounded-full shadow-[0_0_8px_#E8501E]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => {
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 border border-[#E8501E] text-white px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#E8501E] transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(232,80,30,0.4)] cursor-pointer"
            >
              SOLICITA TU COTIZACIÓN
              <ArrowRight className="w-4 h-4 text-[#E8501E] group-hover:text-white transition-colors" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#E8501E]" /> : <Menu className="w-6 h-6 text-[#E8501E]" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Modal / Panel */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#1A1F26]/95 backdrop-blur-xl flex flex-col justify-center items-center md:hidden px-6 transition-all duration-300">
          <div className="flex flex-col items-center space-y-6 w-full max-w-sm">
            <img
              src="https://i.postimg.cc/mk631BNQ/logoenblancokonstruspazio.png"
              alt="Konstru Spazio Logo"
              className="h-16 w-auto mb-4"
            />
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className="text-lg font-medium text-white hover:text-[#E8501E] tracking-wider transition-colors py-2 border-b border-white/10 w-full text-center cursor-pointer"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('contacto');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full mt-4 inline-flex items-center justify-center gap-2 bg-[#E8501E] text-white px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider hover:bg-[#C23E12] transition-all shadow-lg shadow-[#E8501E]/30"
            >
              SOLICITA TU COTIZACIÓN
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

