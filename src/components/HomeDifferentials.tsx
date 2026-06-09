import { motion } from 'framer-motion';

const differentials = [
  {
    number: '01',
    title: 'Atendimento Artesanal',
    desc: 'Cada caso é analisado de forma minuciosa e exclusiva, garantindo estratégias personalizadas e atenção irrestrita aos detalhes que definem grandes vitórias.'
  },
  {
    number: '02',
    title: 'Sigilo Absoluto',
    desc: 'Operamos sob os mais rígidos protocolos de confidencialidade, protegendo a imagem, o patrimônio e as informações sensíveis de nossos clientes.'
  },
  {
    number: '03',
    title: 'Inteligência Estratégica',
    desc: 'Unimos profundo conhecimento jurídico a uma visão de negócios aguçada, antecipando cenários e mitigando riscos de forma proativa.'
  },
  {
    number: '04',
    title: 'Excelência Técnica',
    desc: 'Nossa equipe é formada por especialistas altamente qualificados, em constante atualização com as jurisprudências mais recentes e complexas.'
  }
];

export default function HomeDifferentials() {
  return (
    <section className="py-32 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Nossos Pilares</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-light-beige font-light leading-tight">
              A diferença entre um serviço comum e a <span className="italic text-brown-sophisticated">excelência absoluta</span>.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {differentials.map((diff, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="relative pl-12 border-l border-white/5 hover:border-gold/30 transition-colors duration-500 group"
            >
              <span className="absolute left-[-2px] top-0 text-3xl font-serif text-white/5 group-hover:text-gold/20 transition-colors duration-500 -translate-x-full">
                {diff.number}
              </span>
              <h3 className="text-xl font-serif text-light-beige mb-4">{diff.title}</h3>
              <p className="text-light-beige/60 font-light leading-relaxed text-sm">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
