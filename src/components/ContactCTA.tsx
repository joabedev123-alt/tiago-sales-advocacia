import { motion } from 'framer-motion';

export default function ContactCTA() {
  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(200,200,200,0.08)_0%,rgba(0,0,0,1)_70%)]" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-normal text-light tracking-tight mb-8"
        >
          Pronto para dar o <br />
          <span className="font-medium text-gradient">próximo passo?</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-light-dark font-normal text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto"
        >
          Agende uma consultoria estratégica e descubra como podemos proteger seus interesses com excelência e dedicação.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a
            href="https://wa.me/5574999880082"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-5 bg-light text-primary overflow-hidden transition-all"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative text-sm font-semibold uppercase tracking-widest flex items-center gap-3">
              Iniciar Atendimento
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
