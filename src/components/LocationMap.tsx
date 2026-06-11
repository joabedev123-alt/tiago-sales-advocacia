import { motion } from 'framer-motion';
import { MapPin, Globe } from 'lucide-react';

export default function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-primary-secundary relative border-y border-white/5">
      <div className="container mx-auto px-5 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        
        <div className="w-full lg:w-1/2">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-metal uppercase tracking-[0.3em] text-xs font-semibold mb-3 block"
          >
            Presença Nacional
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-normal text-light tracking-tight mb-6"
          >
            Onde estamos <span className="font-medium text-gradient">localizados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-light-dark font-normal leading-relaxed text-base md:text-lg mb-8 max-w-xl"
          >
            Possuímos estruturas físicas de alto padrão em pontos estratégicos, além de uma robusta operação digital para atendimento em todo o território nacional.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-5 border border-white/10 bg-primary/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-metal opacity-0 group-hover:opacity-100 transition-opacity" />
              <MapPin className="w-6 h-6 text-metal mb-3" />
              <h3 className="text-lg md:text-xl font-medium text-light mb-1">Juazeiro / BA</h3>
              <p className="text-sm text-light-dark font-normal">Sede Principal com infraestrutura completa para atendimento presencial e corporativo.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-5 border border-white/10 bg-primary/30 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-metal opacity-0 group-hover:opacity-100 transition-opacity" />
              <MapPin className="w-6 h-6 text-metal mb-3" />
              <h3 className="text-lg md:text-xl font-medium text-light mb-1">João Pessoa / PB</h3>
              <p className="text-sm text-light-dark font-normal">Unidade estratégica focada em contencioso cível, família e demandas previdenciárias.</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 flex items-start gap-4 p-4 bg-white/5 border border-white/10"
          >
            <Globe className="w-5 h-5 text-metal shrink-0 mt-1" />
            <p className="text-sm text-light-dark font-normal">
              <span className="text-light font-medium uppercase tracking-wider text-xs block mb-1">Atendimento 100% Digital</span>
              Atendemos clientes em todo o Brasil e exterior com a mesma proximidade, segurança e eficácia do modelo presencial.
            </p>
          </motion.div>
        </div>

        {/* Globe visual - oculto em mobile */}
        <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end relative">
          <div className="w-full max-w-md aspect-square rounded-full border border-white/10 bg-[radial-gradient(circle_at_center,rgba(200,200,200,0.05)_0%,rgba(0,0,0,1)_80%)] flex items-center justify-center relative shadow-[0_0_100px_rgba(200,200,200,0.02)]">
            <div className="absolute inset-4 rounded-full border border-white/5 animate-[spin_60s_linear_infinite] border-dashed" />
            <div className="absolute inset-12 rounded-full border border-white/5" />
            <div className="absolute inset-24 rounded-full border border-white/10" />
            <div className="absolute top-1/4 left-1/3">
              <div className="w-4 h-4 bg-metal rounded-full animate-pulse shadow-[0_0_15px_rgba(200,200,200,0.5)]" />
            </div>
            <div className="absolute bottom-1/3 right-1/4">
              <div className="w-3 h-3 bg-white/50 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.3)]" />
            </div>
            <Globe className="w-32 h-32 text-white/5" strokeWidth={0.5} />
          </div>
        </div>

      </div>
    </section>
  );
}
