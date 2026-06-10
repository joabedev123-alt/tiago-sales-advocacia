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
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Sobre Nós</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-light-beige font-normal mb-12">
            Tradição, Vanguarda e <span className="italic text-brown-sophisticated">Exclusividade</span>.
          </h2>
          <div className="space-y-6 text-light-beige font-sans text-xl font-normal leading-relaxed text-justify md:text-center">
            <p>
              Tiago Sales Advocacia e Consultoria Jurídica é um escritório full service, dedicado à prestação de assessoria e representação jurídica completa para pessoas físicas e jurídicas. Com atuação multidisciplinar, reúne conhecimento técnico e constante atualização para oferecer soluções jurídicas seguras, estratégicas e eficientes.
            </p>
            <p>
              Nossa expertise abrange diversas áreas do Direito, com destaque para Direito de Família, Direito Previdenciário (INSS), Direito do Consumidor, além de demandas indenizatórias, consultoria jurídica, elaboração e revisão de contratos.
            </p>
            <p>
              Mais do que oferecer serviços jurídicos, buscamos construir relações de confiança duradouras. Por isso, adotamos uma atuação próxima, personalizada e humanizada, aliando excelência técnica, visão estratégica e compromisso com os objetivos de cada cliente.
            </p>
            <p>
              Acreditamos que cada caso exige atenção singular. Assim, desenvolvemos soluções sob medida, pautadas pela ética, transparência e dedicação, sempre voltadas à proteção dos direitos e à obtenção dos melhores resultados.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
