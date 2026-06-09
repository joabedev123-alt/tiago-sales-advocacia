import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const differentials = [
  'Atendimento Humanizado',
  'Estratégia Personalizada',
  'Transparência Absoluta',
  'Agilidade e Precisão',
  'Atendimento Presencial e Online',
  'Experiência Multidisciplinar',
  'Presença Nacional',
  'Foco em Resultados',
];

export default function Differentials() {
  return (
    <section className="py-32 bg-primary-secundary border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_center,rgba(200,200,200,0.03)_0%,rgba(0,0,0,0)_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-metal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
          >
            A Diferença
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-light tracking-tight mb-8"
          >
            Excelência em cada <span className="font-medium text-gradient">detalhe</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-light-dark font-light leading-relaxed text-lg mb-10 max-w-xl"
          >
            Não somos apenas um escritório de advocacia. Somos parceiros estratégicos comprometidos com a defesa incansável dos seus interesses, unindo inteligência jurídica e sensibilidade humana.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a
              href="/sobre"
              className="inline-flex items-center text-sm uppercase tracking-widest text-light font-medium hover:text-metal transition-colors group"
            >
              <span className="mr-4">Conheça nossa metodologia</span>
              <span className="w-12 h-[1px] bg-metal group-hover:w-16 transition-all duration-300"></span>
            </a>
          </motion.div>
        </div>

        <div className="lg:w-1/2 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {differentials.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center shrink-0 bg-white/[0.02]">
                  <Check className="w-3 h-3 text-metal" />
                </div>
                <span className="text-light text-sm tracking-wide font-light">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
