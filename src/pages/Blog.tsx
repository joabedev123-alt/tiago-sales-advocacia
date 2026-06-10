import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const articles = [
  {
    title: 'A Reforma Tributária e seus impactos no Planejamento Sucessório',
    category: 'Patrimonial',
    date: '12 de agosto de 2026',
    excerpt: 'Uma análise profunda sobre como as recentes mudanças legislativas afetaram a estruturação de participações familiares e a sucessão de bens...',
    link: 'https://www.planalto.gov.br/ccivil_03/constituicao/emendas/emc/emc132.htm'
  },
  {
    title: 'Direito Digital: Proteção de dados em fusões e aquisições',
    category: 'Direito Empresarial',
    date: '05 de Agosto de 2026',
    excerpt: 'Avaliando os passivos ocultos em due diligences focadas na LGPD e os riscos cibernéticos na estruturação de M&A corporativos...',
    link: 'https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm'
  },
  {
    title: 'Blindagem Patrimonial: Mitos e verdades jurídicas',
    category: 'Contratos e Societário',
    date: '28 de julho de 2026',
    excerpt: 'Desconstruindo conceitos populares e apresentando ferramentas legais eficientes e lícitas para a proteção do patrimônio dos sócios...',
    link: 'https://www.planalto.gov.br/ccivil_03/leis/2002/l10406compilada.htm'
  }
];

export default function Blog() {
  const [activeArticle, setActiveArticle] = useState<number | null>(null);

  return (
    <section id="blog" className="py-32 px-6 lg:px-12 bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Artigos e Análises</span>
          <h2 className="text-4xl lg:text-6xl font-serif text-light-beige font-normal">
            Blog <span className="italic text-brown-sophisticated">Jurídico</span>.
          </h2>
          <p className="mt-8 text-light-beige/90 max-w-2xl mx-auto font-normal text-lg">
            Perspectivas exclusivas e análises aprofundadas sobre o cenário jurídico contemporâneo, elaboradas por nossos especialistas.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {articles.map((article, idx) => (
            <motion.article 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="group border border-white/10 bg-white/[0.01] hover:border-gold/30 hover:bg-white/[0.03] transition-all duration-500 rounded-lg overflow-hidden"
            >
              <button 
                onClick={() => setActiveArticle(activeArticle === idx ? null : idx)}
                className="w-full flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 text-left"
              >
                <div className="max-w-2xl">
                  <div className="flex items-center space-x-4 mb-4 text-xs font-normal uppercase tracking-widest text-gold/70">
                    <span>{article.category}</span>
                    <span className="w-1 h-1 bg-gold/30 rounded-full"></span>
                    <span>{article.date}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-serif text-light-beige group-hover:text-gold transition-colors">{article.title}</h3>
                </div>
                
                <div className="flex-shrink-0 mt-6 md:mt-0 md:ml-8 border border-white/10 text-light-beige px-6 py-3 uppercase text-xs tracking-widest group-hover:border-gold group-hover:text-gold transition-all duration-300">
                  {activeArticle === idx ? 'Fechar' : 'Ler'}
                </div>
              </button>
              
              <AnimatePresence>
                {activeArticle === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 md:px-10 pb-10 pt-0">
                      <div className="w-full h-[1px] bg-white/10 mb-6"></div>
                      <p className="text-light-beige/90 font-normal leading-relaxed text-lg mb-6">
                        {article.excerpt}
                      </p>
                      <a 
                        href={article.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block text-gold uppercase tracking-widest text-xs font-semibold hover:text-white transition-colors"
                      >
                        Ler artigo na íntegra (Legislação) →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
