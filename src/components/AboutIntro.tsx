import { motion } from 'framer-motion';

export default function AboutIntro() {
  return (
    <section className="py-32 bg-primary relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Imagem Premium Institucional */}
        <div className="w-full lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary via-transparent to-transparent z-10" />
            <img 
              src="/office-bg.png" 
              alt="Escritório Tiago Sales Advocacia" 
              className="w-full h-full object-cover grayscale brightness-75 contrast-125"
            />
            {/* Decoração da Imagem */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-metal opacity-50 z-20" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-metal opacity-50 z-20" />
          </motion.div>
        </div>

        {/* Textos Institucionais */}
        <div className="w-full lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-metal uppercase tracking-[0.3em] text-xs font-semibold mb-6 block"
          >
            O Escritório
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-normal text-light tracking-tight mb-8 leading-[1.2]"
          >
            Advocacia Full Service com <span className="font-medium text-gradient">visão estratégica</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light-dark font-normal leading-relaxed text-lg mb-6"
          >
            Tiago Sales Advocacia e Consultoria Jurídica é um escritório estruturado para oferecer assessoria e representação completa para pessoas físicas e jurídicas.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-light-dark font-normal leading-relaxed text-lg mb-10"
          >
            Com atuação estratégica, personalizada e foco incansável na solução eficiente, nós não apenas resolvemos problemas legais — construímos blindagem e resultados que protegem o seu futuro e o da sua empresa.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex gap-12 border-t border-white/10 pt-8"
          >
            <div>
              <p className="text-3xl font-normal text-light mb-2">10+</p>
              <p className="text-xs uppercase tracking-widest text-light-dark">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-normal text-light mb-2">100%</p>
              <p className="text-xs uppercase tracking-widest text-light-dark">Atendimento Personalizado</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
