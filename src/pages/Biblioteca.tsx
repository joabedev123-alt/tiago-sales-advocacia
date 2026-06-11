import { motion } from 'framer-motion';

export default function Biblioteca() {
  return (
    <section id="atendimento" className="py-20 md:py-20 px-6 lg:px-12 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-secondary/30 pointer-events-none"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto py-12 md:py-16 px-4 sm:px-8 lg:px-16 border-2 border-gold/30 bg-gradient-to-br from-[#081848] to-[#13276E] shadow-[0_0_60px_rgba(243,194,26,0.15)] rounded-2xl relative overflow-hidden"
        >
          {/* Efeito de luz de fundo */}
          <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-gold/20 blur-[120px] rounded-full pointer-events-none"></div>

          <span className="relative z-10 text-gold uppercase tracking-[0.4em] text-base mb-6 block font-bold">Nossa Cobertura</span>
          <h2 className="relative z-10 text-3xl md:text-4xl lg:text-5xl font-serif text-light-beige font-normal leading-snug mb-10">
            Atendimento presencial em <span className="text-gold font-bold">Juazeiro/BA</span> e <span className="text-gold font-bold">João Pessoa/PB</span>.{' '}
            <span className="inline-block mt-4 md:mt-0 bg-gold/15 px-4 py-2 rounded text-gold border border-gold/30 italic font-bold shadow-md ml-0 md:ml-2">Atendimento online em todo o território nacional.</span>
          </h2>
          
          <a 
            href="https://wa.me/5574999880082" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex relative z-10 items-center justify-center bg-gold text-dark px-6 sm:px-12 py-4 sm:py-5 rounded-full uppercase tracking-widest text-sm sm:text-base font-bold shadow-[0_0_30px_rgba(243,194,26,0.4)] hover:bg-gold-hover hover:scale-105 hover:shadow-[0_0_50px_rgba(243,194,26,0.6)] transition-all duration-300 mt-4"
          >
            Solicitar Atendimento →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
