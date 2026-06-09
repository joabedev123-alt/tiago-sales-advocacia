import { motion } from 'framer-motion';

const articles = [
  {
    title: 'A Reforma Tributária e seus impactos no Planejamento Sucessório',
    category: 'Planejamento Patrimonial',
    date: '12 de Agosto, 2026',
    excerpt: 'Uma análise profunda sobre como as recentes mudanças legislativas afetam a estruturação de holdings familiares e a sucessão de bens...'
  },
  {
    title: 'Direito Digital: Proteção de dados em fusões e aquisições',
    category: 'Direito Empresarial',
    date: '05 de Agosto, 2026',
    excerpt: 'Avaliando os passivos ocultos em due diligences focado em LGPD e os riscos cibernéticos na estruturação de M&A corporativos...'
  },
  {
    title: 'Blindagem Patrimonial: Mitos e verdades jurídicas',
    category: 'Contratos e Societário',
    date: '28 de Julho, 2026',
    excerpt: 'Desconstruindo conceitos populares e apresentando ferramentas legais eficientes e lícitas para a proteção do patrimônio dos sócios...'
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 lg:px-12 bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Artigos e Análises</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-light-beige font-light">
            Blog <span className="italic text-brown-sophisticated">Jurídico</span>.
          </h2>
          <p className="mt-8 text-light-beige/60 max-w-2xl font-light text-lg">
            Perspectivas exclusivas e análises aprofundadas sobre o cenário jurídico contemporâneo, desenvolvidas por nossos especialistas.
          </p>
        </motion.div>

        <div className="space-y-12">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-center hover:border-gold/30 transition-colors duration-500"
            >
              <div className="max-w-3xl">
                <div className="flex items-center space-x-4 mb-4 text-xs font-light uppercase tracking-widest text-gold/70">
                  <span>{article.category}</span>
                  <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-serif text-light-beige mb-4 group-hover:text-gold transition-colors">{article.title}</h3>
                <p className="text-light-beige/60 font-light leading-relaxed mb-6 md:mb-0">
                  {article.excerpt}
                </p>
              </div>
              
              <button className="flex-shrink-0 md:ml-8 border border-white/10 text-light-beige px-6 py-3 uppercase text-[10px] tracking-widest group-hover:border-gold group-hover:text-gold transition-all duration-300">
                Ler Artigo
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
