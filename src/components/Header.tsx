import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'HOME', path: '#home' },
  { name: 'Sobre', path: '#sobre' },
  { name: 'Áreas de Atuação', path: '#areas' },
  { name: 'Atendimento', path: '#atendimento' },
  { name: 'Contato', path: '#contato' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = links.map(link => link.path.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = `#${section}`;
        }
      }
      if (current) setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (hash: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(hash.substring(1));
    if (element) {
      window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <header className={clsx(
      'fixed top-0 w-full z-50 transition-all duration-500 py-4 md:py-6',
      scrolled ? 'bg-dark/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
    )}>
      <div className="container mx-auto px-5 lg:px-12 flex justify-between items-center">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="z-50 relative flex items-center h-16 sm:h-20 md:h-28">
          <img 
            src="/logo%20original.png" 
            alt="Tiago Sales Advocacia" 
            className="h-full w-auto object-contain"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => scrollTo(link.path)}
              className={clsx(
                'text-sm uppercase tracking-widest transition-all duration-300 font-normal hover:text-gold relative',
                activeSection === link.path ? 'text-gold' : 'text-light-beige'
              )}
            >
              {link.name}
              {activeSection === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 h-[1px] bg-gold -bottom-1"
                />
              )}
            </button>
          ))}
        </nav>

        {/* WhatsApp CTA - desktop */}
        <a
          href="https://wa.me/5574999880082"
          target="_blank"
          rel="noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-gold text-dark text-xs font-bold uppercase tracking-widest px-5 py-2.5 rounded-full hover:bg-gold-hover transition-all duration-300"
        >
          Falar Agora
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light-beige z-50 relative p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-dark/98 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-6 px-8"
          >
            {/* Logo no menu mobile */}
            <img 
              src="/logo%20original.png" 
              alt="Tiago Sales Advocacia" 
              className="h-20 w-auto object-contain mb-6 opacity-80"
            />

            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollTo(link.path)}
                className={clsx(
                  'text-2xl font-serif tracking-widest uppercase transition-colors py-1',
                  activeSection === link.path ? 'text-gold' : 'text-light-beige hover:text-gold'
                )}
              >
                {link.name}
              </button>
            ))}

            {/* WhatsApp CTA mobile */}
            <a
              href="https://wa.me/5574999880082"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-gold text-dark text-sm font-bold uppercase tracking-widest px-8 py-4 rounded-full"
            >
              Falar pelo WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
