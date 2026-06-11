import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const areaData = [
  {
    id: 'familia',
    title: 'Direito de Família',
    desc: 'Questões familiares exigem não apenas conhecimento jurídico, mas também sensibilidade, discrição e atuação estratégica. Nosso escritório presta assessoria e representação em demandas que envolvem relações familiares, patrimônio e planejamento sucessório, sempre buscando soluções seguras, equilibradas e alinhadas aos interesses de cada cliente.\n\nAtuamos de forma personalizada em todas as etapas do processo, priorizando a preservação dos vínculos familiares quando possível e a defesa firme dos direitos de nossos clientes quando necessária.',
    focus: ['Divórcios Consensuais e Litigiosos', 'Guarda e Regulamentação de Convivência', 'Pensão Alimentícia e Execução de Alimentos', 'Reconhecimento e Dissolução de União Estável']
  },
  {
    id: 'previdenciario',
    title: 'Direito Previdenciário',
    desc: 'O acesso aos benefícios previdenciários exige planejamento, conhecimento técnico e acompanhamento especializado. Nosso escritório atua na orientação e representação de segurados perante o INSS e o Poder Judiciário, buscando garantir a concessão, revisão e manutenção de benefícios de forma segura e eficiente.\n\nCom atuação estratégica e análise individualizada de cada caso, trabalhamos para assegurar que nossos clientes obtenham o melhor enquadramento previdenciário possível, protegendo seus direitos e proporcionando maior segurança para o futuro.',
    focus: ['Aposentadorias', 'Benefício Assistencial (BPC/LOAS)', 'Benefício por Incapacidade Temporária (Auxílio-Doença)', 'Pensão por Morte', 'Salário-Maternidade']
  },
  {
    id: 'consumidor',
    title: 'Direito do Consumidor',
    desc: 'Defendemos os direitos de consumidores diante de práticas abusivas, falhas na prestação de serviços e descumprimento de obrigações contratuais. Com atuação técnica e estratégica, buscamos o equilíbrio nas relações de consumo, promovendo a reparação de prejuízos e a efetiva proteção dos direitos de nossos clientes.\n\nNossa atuação é pautada pela análise criteriosa de cada caso, buscando soluções eficientes tanto na esfera extrajudicial quanto judicial, sempre com foco na obtenção dos melhores resultados.',
    focus: ['Indenizações por Danos Materiais e Morais', 'Falha na Prestação de Serviços', 'Vícios e Defeitos em Produtos', 'Descumprimento de Oferta', 'Cobranças Indevidas e Negativação Indevida', 'Direito do Passageiro Aéreo']
  },
  {
    id: 'contratos',
    title: 'Contratos',
    desc: 'A segurança jurídica de qualquer relação começa com um contrato bem elaborado. Nosso escritório atua na elaboração, análise, revisão e negociação de instrumentos contratuais, buscando prevenir conflitos, reduzir riscos e proteger os interesses de nossos clientes.\n\nCom atenção aos detalhes e visão estratégica, desenvolvemos contratos claros, equilibrados e juridicamente seguros, adequados às particularidades de cada negócio, operação ou relação jurídica.',
    focus: ['Elaboração e Revisão de Contratos', 'Contratos de Prestação de Serviços', 'Contratos de Compra e Venda', 'Contratos de Locação', 'Instrumentos de Confissão de Dívida', 'Notificações Extrajudiciais']
  },
  {
    id: 'indenizacoes',
    title: 'Ações Indenizatórias',
    desc: 'Quando um direito é violado, a reparação adequada dos prejuízos torna-se essencial para restabelecer o equilíbrio e a justiça. Nosso escritório atua na defesa de pessoas físicas e jurídicas em demandas indenizatórias, buscando a responsabilização dos causadores do dano e a justa compensação pelos prejuízos sofridos.\n\nCom atuação técnica e análise criteriosa de cada caso, trabalhamos para assegurar a reparação de danos materiais, morais, estéticos, lucros cessantes e outras modalidades de prejuízo reconhecidas pela legislação e pela jurisprudência.',
    focus: ['Indenizações por Danos Morais, Materiais, Estéticos e Lucro Cessantes', 'Responsabilidade Civil por Acidentes', 'Erro Médico e Responsabilidade Hospitalar', 'Acidentes de Trânsito']
  }
];

export default function HomeAreas() {
  const [activeArea, setActiveArea] = useState<string | null>(null);

  return (
    <section id="areas" className="py-16 md:py-32 lg:py-48 min-h-screen flex flex-col justify-center bg-dark-secondary relative border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gold uppercase tracking-[0.4em] text-sm mb-4 block"
          >
            Áreas de Atuação
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif text-light-beige font-normal leading-tight mb-8"
          >
            Nossa <span className="italic text-brown-sophisticated">especialização</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-light-beige/90 font-normal text-sm md:text-xl"
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
                className="w-full flex justify-between items-center p-5 md:p-8 text-left hover:bg-dark-secondary transition-colors"
              >
                <h3 className="text-xl md:text-3xl font-serif text-light-beige transition-colors">{area.title}</h3>
                <span className="text-gold text-2xl md:text-3xl font-normal flex-shrink-0 ml-4">{activeArea === area.id ? '−' : '+'}</span>
              </button>
              
              <AnimatePresence>
                {activeArea === area.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 md:p-8 border-t border-white/5 mt-3 md:mt-4">
                      <p className="text-light-beige font-normal leading-relaxed mb-6 md:mb-8 text-sm md:text-base lg:text-xl whitespace-pre-line">
                        {area.desc}
                      </p>
                      <h4 className="text-gold uppercase tracking-[0.2em] text-base mb-4 font-semibold">Focos de Atuação</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {area.focus.map((item, i) => (
                          <li key={i} className="flex items-start text-light-beige/90 font-normal text-sm md:text-base lg:text-lg">
                            <span className="w-6 h-[1px] bg-gold/50 mt-3 mr-4 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                      <a 
                        href={`https://wa.me/5574999880082?text=${encodeURIComponent('Olá! Gostaria de agendar uma consultoria com um especialista na área de ' + area.title + '.')}`} 
                        target="_blank"
                        rel="noreferrer"
                        className="inline-block mt-10 text-gold uppercase tracking-widest text-sm hover:text-white transition-colors font-semibold"
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
