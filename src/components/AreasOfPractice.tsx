import { motion } from 'framer-motion';
import { Shield, Scale, Users, FileText, Briefcase, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const areas = [
  {
    title: 'Direito de Família',
    description: 'Atuação sensível e estratégica em divórcios, pensão alimentícia, guarda e partilha de bens.',
    icon: Users,
    link: '/areas/familia',
  },
  {
    title: 'Direito Previdenciário',
    description: 'Especialistas em INSS, aposentadorias, benefícios e planejamento previdenciário completo.',
    icon: Shield,
    link: '/areas/previdenciario',
  },
  {
    title: 'Direito do Consumidor',
    description: 'Defesa incisiva contra abusos, fraudes, negativização indevida e falhas na prestação de serviços.',
    icon: Scale,
    link: '/areas/consumidor',
  },
  {
    title: 'Indenizações',
    description: 'Reparação de danos morais e materiais com foco na máxima compensação para o cliente.',
    icon: HeartHandshake,
    link: '/areas/indenizacoes',
  },
  {
    title: 'Contratos',
    description: 'Elaboração, revisão e rescisão contratual garantindo segurança jurídica e prevenção de litígios.',
    icon: FileText,
    link: '/areas/contratos',
  },
  {
    title: 'Consultoria Empresarial',
    description: 'Assessoria jurídica inteligente para empresas, blindagem patrimonial e compliance.',
    icon: Briefcase,
    link: '/areas/empresarial',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AreasOfPractice() {
  return (
    <section className="py-32 bg-primary relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-metal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
          >
            Especialidades
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-light tracking-tight"
          >
            Áreas de <span className="font-medium text-gradient">Atuação</span>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {areas.map((area) => {
            const Icon = area.icon;
            return (
              <motion.div key={area.title} variants={itemVariants}>
                <Link
                  to={area.link}
                  className="group block p-10 h-full border border-white/5 bg-primary-secundary/30 hover:bg-white/[0.02] transition-all duration-500 relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-metal to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <Icon className="w-10 h-10 text-light-dark group-hover:text-light mb-8 transition-colors duration-500" strokeWidth={1} />
                  
                  <h3 className="text-xl font-medium text-light mb-4 tracking-wide group-hover:text-metal transition-colors duration-500">
                    {area.title}
                  </h3>
                  
                  <p className="text-light-dark font-light leading-relaxed text-sm">
                    {area.description}
                  </p>

                  <div className="mt-8 flex items-center text-xs uppercase tracking-widest text-metal font-medium group-hover:text-light transition-colors">
                    <span className="mr-2">Saber mais</span>
                    <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-500">→</span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
