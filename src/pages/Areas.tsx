import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const areas = [
  { id: 'familia', title: 'Direito de Família', desc: 'Atuação sensível e estratégica em divórcios, partilhas e guarda.' },
  { id: 'previdenciario', title: 'Direito Previdenciário', desc: 'Planejamento e concessão de benefícios com máxima eficiência.' },
  { id: 'consumidor', title: 'Direito do Consumidor', desc: 'Defesa incisiva contra práticas abusivas corporativas.' },
  { id: 'contratos', title: 'Contratos', desc: 'Elaboração e revisão de instrumentos para segurança jurídica total.' },
  { id: 'indenizacoes', title: 'Indenizações', desc: 'Reparação de danos morais e materiais com rigor técnico.' },
];

export default function Areas() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-sm mb-4 block">Nossa Expertise</span>
          <h1 className="text-2xl md:text-4xl lg:text-2xl md:text-4xl lg:text-6xl md:text-8xl font-serif text-light-beige font-normal">
            Áreas de <span className="italic text-brown-sophisticated">Atuação</span>.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/areas/${area.id}`} className="group block h-full border border-white/5 bg-dark-secondary/30 p-8 hover:bg-dark-secondary transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <h3 className="text-xl md:text-3xl font-serif text-light-beige mb-4 group-hover:text-gold transition-colors">{area.title}</h3>
                <p className="text-light-beige/90 font-normal text-base leading-relaxed">{area.desc}</p>
                <div className="mt-8 text-gold uppercase tracking-widest text-[10px] font-semibold flex items-center">
                  Explorar Expertise
                  <span className="ml-2 transform group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
