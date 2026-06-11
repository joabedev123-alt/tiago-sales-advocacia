import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark">
      {/* Background Graphic Element - Giant Number or Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0">
        <span className="text-[20vw] font-serif text-white/[0.02] tracking-tighter leading-none">
          TS
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col lg:flex-row items-center justify-between min-h-screen pt-24 lg:pt-0">
        
        {/* Text Content */}
        <div className="w-full lg:w-5/12 flex flex-col items-start justify-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-xl md:text-5xl lg:text-7xl font-serif text-light-beige font-normal leading-[1.1] tracking-wide">
              Soluções jurídicas completas para proteger seus direitos e interesses.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-light-beige font-sans text-2xl max-w-2xl font-normal leading-relaxed"
          >
            Atuamos com excelência técnica, profissionalismo e dedicação total aos resultados dos nossos clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4"
          >
            <a 
              href="https://wa.me/5574999880082" 
              className="relative inline-flex group"
            >
              <span className="absolute inset-0 rounded-full bg-gold opacity-20 animate-ping group-hover:animate-none"></span>
              <span className="relative inline-flex items-center justify-center bg-gold text-dark px-10 py-5 rounded-full uppercase tracking-widest text-base font-bold shadow-lg shadow-gold/25 hover:bg-gold-hover hover:scale-105 transition-all duration-300">
                <FaWhatsapp className="w-6 h-6 mr-3 text-dark drop-shadow-sm" />
                Falar com Especialista
              </span>
            </a>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="w-full lg:w-5/12 mt-16 lg:mt-0 relative h-[50vh] lg:h-[65vh]"
        >
          {/* Editorial Decorative Lines */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30 z-20"></div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30 z-20"></div>
          
          {/* Image Container with Parallax feel */}
          <div className="w-full h-full relative overflow-hidden bg-dark-secondary editorial-border">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1470" 
              alt="Escritório Tiago Sales" 
              className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000 scale-105 hover:scale-100"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent"></div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
