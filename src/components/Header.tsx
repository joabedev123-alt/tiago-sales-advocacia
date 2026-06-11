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

  useEffect(() => {
    const handleScroll = () => {
      // Update active section based on scroll
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
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent py-8 transition-all duration-500">
      <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center relative">
        {/* Logo */}
        <button onClick={() => scrollTo('#home')} className="z-50 relative group flex items-center h-32 md:h-48 ml-4 lg:ml-12">
          <img 
            src="/logo%20original.png" 
            alt="Tiago Sales Advocacia" 
            className="h-full w-auto object-contain transform origin-left"
          />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-8">
          {links.map((link) => (
            <button
              key={link.path}
              onClick={() => scrollTo(link.path)}
              className={clsx(
                'text-base uppercase tracking-widest transition-all duration-300 font-normal hover:text-gold relative',
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

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-light-beige z-50 relative"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center space-y-8"
          >
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => scrollTo(link.path)}
                className={clsx(
                  'text-xl md:text-3xl font-serif tracking-widest uppercase transition-colors',
                  activeSection === link.path ? 'text-gold' : 'text-light-beige'
                )}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
