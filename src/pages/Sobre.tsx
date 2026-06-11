import { motion } from 'framer-motion';

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 px-5 lg:px-12 bg-dark border-t border-white/5">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Sobre Nós</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-light-beige font-normal mb-8 md:mb-12 leading-tight">
            Excelência Jurídica com <span className="italic text-brown-sophisticated">Atendimento Personalizado</span>.
          </h2>
          <div className="space-y-5 text-light-beige font-sans text-base sm:text-lg md:text-xl font-normal leading-relaxed text-left md:text-center">
            <p>
              Tiago Sales Advocacia é um escritório dedicado à prestação de assessoria, consultoria e representação judicial para pessoas físicas e jurídicas, oferecendo soluções seguras, estratégicas e eficientes para as mais diversas demandas.
            </p>
            <p>
              Com atuação multidisciplinar e constante aprimoramento técnico, o escritório reúne conhecimento jurídico, experiência prática e visão estratégica para proporcionar um atendimento de excelência, sempre pautado pela ética, transparência e compromisso com os interesses de cada cliente.
            </p>
            <p>
              Nossa atuação abrange diversas áreas do Direito, com destaque para o Direito de Família, Direito Previdenciário (INSS), Direito do Consumidor, ações indenizatórias, elaboração e revisão de contratos, além da atuação em procedimentos e serviços na esfera extrajudicial.
            </p>
            <p>
              Acreditamos que cada cliente possui necessidades únicas. Por isso, desenvolvemos soluções personalizadas, acompanhando cada caso de forma próxima e individualizada, com foco na proteção de direitos, prevenção de conflitos e busca dos melhores resultados.
            </p>
            <p>
              Ao invés de oferecer serviços jurídicos, buscamos construir relações de confiança, combinando excelência técnica, atendimento humanizado e dedicação em cada etapa de nossa atuação.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
