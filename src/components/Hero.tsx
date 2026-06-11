import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="text-[20vw] font-serif text-white/[0.02] tracking-tighter leading-none">
          TS
        </span>
      </div>

      <div className="container mx-auto px-5 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-28 pb-12 lg:pt-0 lg:pb-0 gap-10 lg:gap-0 mt-[3cm]">
        
        {/* Text Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start justify-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-serif text-light-beige font-normal leading-[1.15] tracking-wide">
              Soluções jurídicas completas para proteger seus direitos e interesses.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-light-beige/80 font-sans text-base sm:text-lg md:text-xl max-w-xl font-normal leading-relaxed"
          >
            Atuamos com excelência técnica, profissionalismo e dedicação total aos resultados dos nossos clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full sm:w-auto mt-2"
          >
            <a 
              href="https://wa.me/5574999880082" 
              className="relative inline-flex w-full sm:w-auto group"
            >
              <span className="absolute inset-0 rounded-full bg-gold opacity-20 animate-ping group-hover:animate-none"></span>
              <span className="relative inline-flex items-center justify-center w-full sm:w-auto bg-gold text-dark px-8 py-4 rounded-full uppercase tracking-widest text-sm font-bold shadow-lg shadow-gold/25 hover:bg-gold-hover hover:scale-105 transition-all duration-300">
                <FaWhatsapp className="w-5 h-5 mr-3 text-dark drop-shadow-sm" />
                Falar com Especialista
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Column - hidden on mobile */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="hidden lg:block w-full lg:w-5/12 relative h-[65vh]"
        >
          <div className="absolute -top-4 -left-4 w-20 h-20 border-t border-l border-gold/30 z-20"></div>
          <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b border-r border-gold/30 z-20"></div>
          <div className="w-full h-full relative overflow-hidden bg-dark-secondary">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1470" 
              alt="Escritório Tiago Sales" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
