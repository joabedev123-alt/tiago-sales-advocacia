import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const areaData = [
  {
    id: 'familia',
    title: 'Direito de Família',
    desc: 'Em questões que envolvem o patrimônio afetivo e material de uma vida inteira, a abordagem artesanal e o sigilo são indispensáveis. Nosso escritório atua em litígios familiares e planejamentos sucessórios com máxima discrição, buscando soluções que preservem as relações e garantam a justa distribuição de direitos.',
    focus: ['Divórcios Litigiosos e Consensuais de Alta Complexidade', 'Partilha de Bens e Avaliação de Empresas em Divórcios', 'Planejamento Sucessório e Inventários', 'Guarda, Pensão Alimentícia e Alienação Parental']
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    desc: 'O planejamento do seu futuro não pode ficar à mercê de burocracias do Estado. Atuamos com inteligência estratégica para mapear, antecipar e garantir o melhor cenário de aposentadoria ou benefício, focando em executivos, empresários e profissionais liberais.',
    focus: ['Planejamento Previdenciário Estratégico', 'Revisão de Benefícios de Alta Complexidade', 'Aposentadoria Especial e por Idade', 'Ações contra o INSS para concessão e restabelecimento']
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    desc: 'Defendemos pessoas físicas e jurídicas contra abusos corporativos. Com rigor técnico e firmeza de atuação, buscamos o equilíbrio nas relações de consumo, exigindo o cumprimento de ofertas, a reparação por vícios em produtos premium e o combate a contratos abusivos.',
    focus: ['Responsabilidade Civil por Danos em Serviços de Luxo', 'Atraso e Distrato na Compra de Imóveis', 'Fraudes Bancárias e Restituição de Valores', 'Planos de Saúde: Negativas de Tratamentos']
  },
  {
    id: 'contratos',
    title: 'Contratos Complexos',
    desc: 'A blindagem de um negócio começa no instrumento que o formaliza. Desenvolvemos, revisamos e negociamos contratos complexos com visão de longo prazo, mitigando riscos e estabelecendo regras claras que protegem o patrimônio dos nossos clientes.',
    focus: ['Contratos Empresariais e Acordos de Sócios', 'Contratos Imobiliários de Alto Valor', 'Due Diligence Contratual', 'Resolução Estratégica de Conflitos Contratuais']
  },
  {
    id: 'indenizacoes',
    title: 'Ações Indenizatórias',
    desc: 'A reparação de danos exige precisão na quantificação e agressividade técnica na busca pelos direitos lesados. Atuamos em litígios complexos visando a máxima reparação financeira por danos materiais, morais, estéticos ou existenciais.',
    focus: ['Indenizações por Erro Médico', 'Danos Patrimoniais Complexos', 'Responsabilidade Civil de Empresas', 'Ações Indenizatórias de Alto Valor']
  }
];

export default function HomeAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <section id="areas" className="py-32 bg-dark-secondary relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Áreas de Atuação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-serif text-light-beige font-normal leading-tight mb-8"
          >
            Nossa <span className="italic text-brown-sophisticated">especialização</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light-beige/90 font-normal text-lg"
          >
            Atuamos em áreas críticas onde a precisão técnica e o rigor estratégico são fundamentais para o sucesso.
          </motion.p>
        </div>

        <div className="space-y-4 max-w-5xl mx-auto">
          {areaData.map((area, idx) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="border border-white/5 bg-dark"
            >
              <button
                onClick={() => setActiveArea(activeArea === area.id ? null : area.id)}
                className="w-full flex justify-between items-center p-8 text-left hover:bg-dark-secondary transition-colors"
              >
                <h3 className="text-2xl font-serif text-light-beige transition-colors">{area.title}</h3>
                <span className="text-gold text-2xl font-normal">{activeArea === area.id ? '−' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {activeArea === area.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 pt-0 border-t border-white/5 mt-4">
                      <p className="text-light-beige font-normal leading-relaxed mb-8 text-lg">
                        {area.desc}
                      </p>
                      <h4 className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Focos de Atuação</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.focus.map((item, i) => (
                          <li key={i} className="flex items-start text-light-beige/90 font-normal text-base">
                            <span className="w-6 h-[1px] bg-gold/50 mt-3 mr-4 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`https://wa.me/5574999880082?text=${encodeURIComponent('Olá! Gostaria de agendar uma consultoria com um especialista na área de ' + area.title + '.')}`} 
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-10 text-gold uppercase tracking-widest text-xs hover:text-white transition-colors font-semibold"
                      >
                        Agendar Consultoria Específica →
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
