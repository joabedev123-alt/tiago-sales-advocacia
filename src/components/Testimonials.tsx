import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    text: "O atendimento superou todas as expectativas. Uma abordagem extremamente profissional e transparente em um momento delicado da minha vida.",
    author: "Cliente de Direito de Família",
    role: "Juazeiro/BA"
  },
  {
    text: "Solucionaram uma pendência contratual complexa da minha empresa de forma ágil. A visão estratégica do escritório é um diferencial raro no mercado.",
    author: "Empresário do Setor de Tecnologia",
    role: "Atendimento Nacional"
  },
  {
    text: "Consegui meu benefício previdenciário graças à precisão e persistência do Dr. Tiago e sua equipe. Recomendo de olhos fechados.",
    author: "Cliente de Direito Previdenciário",
    role: "João Pessoa/PB"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-32 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-metal uppercase tracking-[0.3em] text-xs font-semibold mb-4 block"
            >
              Reconhecimento
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-light text-light tracking-tight"
            >
              O que dizem <span className="font-medium text-gradient">nossos clientes</span>
            </motion.h2>
          </div>
          
          <div className="flex gap-4">
            <button 
              onClick={prev}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-light hover:bg-white hover:text-primary transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 border border-white/20 flex items-center justify-center text-light hover:bg-white hover:text-primary transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="relative h-[300px] md:h-[250px] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="absolute inset-0 border border-white/5 bg-primary-secundary/50 p-8 md:p-12 flex flex-col justify-center"
            >
              <Quote className="w-10 h-10 text-white/10 mb-6" />
              <p className="text-xl md:text-2xl font-light text-light leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-light">{testimonials[currentIndex].author}</p>
                <p className="text-xs text-light-dark uppercase tracking-wider mt-1">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
