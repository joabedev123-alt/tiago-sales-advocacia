import { motion } from 'framer-motion';

export default function HomeContact() {
  return (
    <section id="contato" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-dark-secondary/30 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gold uppercase tracking-[0.4em] text-xs mb-4 block">Fale Conosco</span>
            <h2 className="text-4xl lg:text-6xl font-serif text-light-beige font-normal leading-tight mb-8">
              Sua estratégia <br />
              <span className="italic text-brown-sophisticated">começa aqui</span>.
            </h2>
            <p className="text-light-beige/90 font-normal text-lg mb-12 max-w-md">
              A complexidade exige respostas exclusivas. Agende uma consultoria preliminar para avaliarmos o seu cenário.
            </p>
            
            <div className="space-y-6 text-sm tracking-widest text-light-beige uppercase font-normal">
              <div className="flex items-center">
                <span className="w-12 h-[1px] bg-gold mr-6"></span>
                <span>(74) 99988-0082</span>
              </div>
              <div className="flex items-center">
                <span className="w-12 h-[1px] bg-gold mr-6"></span>
                <span>contato@tiagosalesadv.com.br</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-dark p-8 md:p-12 border border-white/5 relative"
          >
            {/* Decoração editorial */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/30"></div>
            
            <form className="space-y-8">
              <div className="border-b border-white/10 pb-2">
                <input 
                  type="text" 
                  placeholder="Seu Nome" 
                  className="w-full bg-transparent text-light-beige font-normal focus:outline-none placeholder:text-light-beige/20 focus:placeholder:text-light-beige transition-colors" 
                />
              </div>
              <div className="border-b border-white/10 pb-2">
                <input 
                  type="tel" 
                  placeholder="Telefone / WhatsApp" 
                  className="w-full bg-transparent text-light-beige font-normal focus:outline-none placeholder:text-light-beige/20 focus:placeholder:text-light-beige transition-colors" 
                />
              </div>
              <div className="border-b border-white/10 pb-2">
                <input 
                  type="email" 
                  placeholder="E-mail Corporativo ou Pessoal" 
                  className="w-full bg-transparent text-light-beige font-normal focus:outline-none placeholder:text-light-beige/20 focus:placeholder:text-light-beige transition-colors" 
                />
              </div>
              <button 
                type="submit" 
                className="w-full mt-8 border border-gold bg-gold/5 text-gold py-5 uppercase tracking-widest text-xs font-semibold hover:bg-gold hover:text-dark transition-all duration-300"
              >
                Solicitar Contato
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
