import { motion } from 'framer-motion';

export default function Biblioteca() {
  return (
    <section id="atendimento" className="py-24 px-6 lg:px-12 bg-dark border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-dark-secondary/30 pointer-events-none"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto py-16 px-8 border border-gold/20 bg-dark-secondary/50 backdrop-blur-sm"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-6 block">Nossa Cobertura</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-light-beige font-light leading-snug mb-10">
            Atendimento presencial em <span className="text-gold">Juazeiro/BA</span> e <span className="text-gold">João Pessoa</span>.<br />
            <span className="italic text-brown-sophisticated mt-4 block">Atendimento online em todo o território nacional.</span>
          </h2>
          
          <a 
            href="https://wa.me/5574999880082" 
            target="_blank" 
            rel="noreferrer"
            className="inline-block border border-gold bg-gold/5 text-gold px-8 py-4 uppercase tracking-widest text-xs font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
          >
            Solicitar Atendimento
          </a>
        </motion.div>
      </div>
    </section>
  );
}
