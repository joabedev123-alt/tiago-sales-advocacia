import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';

const areaData: Record<string, { title: string; desc: string; focus: string[] }> = {
  'familia': {
    title: 'Direito de Família',
    desc: 'Em questões que envolvem o patrimônio afetivo e material de uma vida inteira, a abordagem artesanal e o sigilo são indispensáveis. Nosso escritório atua em litígios familiares e planejamentos sucessórios com máxima discrição, buscando soluções que preservem as relações e garantam a justa distribuição de direitos.',
    focus: ['Divórcios Litigiosos e Consensuais de Alta Complexidade', 'Partilha de Bens e Avaliação de Empresas em Divórcios', 'Planejamento Sucessório e Inventários', 'Guarda, Pensão Alimentícia e Alienação Parental']
  },
  'previdenciario': {
    title: 'Direito Previdenciário',
    desc: 'O planejamento do seu futuro não pode ficar à mercê de burocracias do Estado. Atuamos com inteligência estratégica para mapear, antecipar e garantir o melhor cenário de aposentadoria ou benefício, focando em executivos, empresários e profissionais liberais.',
    focus: ['Planejamento Previdenciário Estratégico', 'Revisão de Benefícios de Alta Complexidade', 'Aposentadoria Especial e por Idade', 'Ações contra o INSS para concessão e restabelecimento']
  },
  'consumidor': {
    title: 'Direito do Consumidor',
    desc: 'Defendemos pessoas físicas e jurídicas contra abusos corporativos. Com rigor técnico e firmeza de atuação, buscamos o equilíbrio nas relações de consumo, exigindo o cumprimento de ofertas, a reparação por vícios em produtos premium e o combate a contratos abusivos.',
    focus: ['Responsabilidade Civil por Danos em Serviços de Luxo', 'Atraso e Distrato na Compra de Imóveis (Direito Imobiliário e Consumidor)', 'Fraudes Bancárias e Restituição de Valores', 'Planos de Saúde: Negativas de Tratamentos de Alto Custo']
  },
  'contratos': {
    title: 'Contratos',
    desc: 'A blindagem de um negócio começa no instrumento que o formaliza. Desenvolvemos, revisamos e negociamos contratos complexos com visão de longo prazo, mitigando riscos e estabelecendo regras claras que protegem o patrimônio dos nossos clientes.',
    focus: ['Contratos Empresariais e Acordos de Sócios', 'Contratos Imobiliários de Alto Valor', 'Due Diligence Contratual', 'Resolução Estratégica de Conflitos Contratuais']
  },
  'indenizacoes': {
    title: 'Indenizações',
    desc: 'A reparação de danos exige precisão na quantificação e agressividade técnica na busca pelos direitos lesados. Atuamos em litígios complexos visando a máxima reparação financeira por danos materiais, morais, estéticos ou existenciais.',
    focus: ['Indenizações por Erro Médico', 'Danos Patrimoniais Complexos', 'Responsabilidade Civil de Empresas', 'Ações Indenizatórias de Alto Valor']
  }
};

export default function AreaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const data = id ? areaData[id] : null;

  if (!data) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-light-beige mb-4">Área não encontrada</h1>
          <Link to="/areas" className="text-gold uppercase tracking-widest text-xs hover:text-white">Voltar para Áreas</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-dark">
      <div className="container mx-auto">
        
        <Link to="/areas" className="text-gold/50 uppercase tracking-[0.2em] text-[10px] mb-8 inline-block hover:text-gold transition-colors">
          ← Voltar para Áreas
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-7xl font-serif text-light-beige font-light leading-tight mb-12">
                {data.title}
              </h1>
              <p className="text-light-beige/70 font-light text-lg leading-relaxed mb-16">
                {data.desc}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-gold uppercase tracking-[0.3em] text-xs mb-8 font-semibold">Nossos Focos de Atuação</h3>
              <ul className="space-y-6">
                {data.focus.map((item, idx) => (
                  <li key={idx} className="flex items-start text-light-beige/80 font-light text-lg">
                    <span className="w-12 h-[1px] bg-gold/50 mt-4 mr-6 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="lg:col-span-5 lg:pl-12">
             <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-dark-secondary border border-white/5 p-10 sticky top-32"
             >
                <h3 className="text-2xl font-serif text-light-beige mb-4">Precisa de assessoria nesta área?</h3>
                <p className="text-light-beige/50 font-light text-sm mb-8">
                  Agende uma consulta de viabilidade jurídica. Garantimos sigilo absoluto e análise minuciosa desde o primeiro contato.
                </p>
                <a 
                  href="https://wa.me/5511999999999" 
                  className="block text-center border border-gold bg-gold/5 text-gold py-4 uppercase tracking-widest text-xs font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
                >
                  Agendar Reunião Exclusiva
                </a>
             </motion.div>
          </div>
        </div>
        
      </div>
    </main>
  );
}
