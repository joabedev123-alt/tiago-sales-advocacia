import { motion } from 'framer-motion';

const differentials = [
  {
    number: '01',
    title: 'Atendimento Artesanal',
    desc: 'Cada caso é estudado de forma minuciosa e exclusiva, garantindo estratégias personalizadas e atenção irrestrita aos detalhes que definem grandes vitórias.'
  },
  {
    number: '02',
    title: 'Sigilo Absoluto',
    desc: 'Operamos sob os mais rígidos protocolos de confidencialidade, protegendo a imagem, o patrimônio e as informações confidenciais de nossos clientes.'
  },
  {
    number: '03',
    title: 'Inteligência Estratégica',
    desc: 'Unimos profundo conhecimento jurídico a uma visão de negócios aguçada, antecipando cenários e mitigando riscos de forma proativa.'
  },
  {
    number: '04',
    title: 'Excelência Técnica',
    desc: 'Nossa equipe é formada por especialistas altamente especializados, em constante atualização com as revisões mais recentes e complexas.'
  }
];

export default function HomeDifferentials() {
  return (
    <section className="py-32 bg-dark-alternate relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Nossos Pilares</span>
            <h2 className="text-4xl lg:text-5xl font-serif text-light-beige font-normal leading-tight">
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
              className="relative pl-10 md:pl-16 py-8 border-l-2 border-white/10 hover:border-gold hover:bg-white/[0.03] transition-all duration-500 group rounded-r-xl"
            >
              <span className="absolute left-[-10px] top-6 text-4xl md:text-5xl font-serif text-white/30 group-hover:text-gold group-hover:-translate-x-[110%] transition-all duration-500 -translate-x-full">
                {diff.number}
              </span>
              <h3 className="text-2xl font-serif text-light-beige mb-4 group-hover:text-gold transition-colors">{diff.title}</h3>
              <p className="text-light-beige/90 font-normal leading-relaxed text-base group-hover:text-white transition-colors">
                {diff.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
