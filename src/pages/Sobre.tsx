import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section id="sobre" className="py-32 px-6 lg:px-12 bg-dark border-t border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Sobre Nós</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-light-beige font-light mb-12">
            Tradição, Vanguarda e <span className="italic text-brown-sophisticated">Exclusividade</span>.
          </h2>
          <div className="space-y-8 text-light-beige/70 font-sans text-lg font-light leading-relaxed">
            <p>
              Tiago Sales Advocacia e Consultoria Jurídica é um escritório full service, oferecendo assessoria e representação jurídica completa para pessoas físicas e jurídicas. Atua em diversas áreas do Direito, com destaque para Direito de Família, Direito Previdenciário (INSS) e Direito do Consumidor.
            </p>
            <p>
              Além disso, atuamos em demandas indenizatórias, confecção e análises de contratos, entre outros. Prestamos atendimento personalizado, humanizado, estratégico e focado na solução eficiente dos interesses de nossos clientes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
