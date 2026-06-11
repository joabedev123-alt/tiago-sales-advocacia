import { motion } from 'framer-motion';

export default function Contato() {
  return (
    <main className="min-h-screen pt-32 pb-24 px-6 lg:px-12 bg-dark">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <span className="text-gold uppercase tracking-[0.4em] text-sm mb-4 block">Atendimento</span>
          <h1 className="text-2xl md:text-4xl lg:text-2xl md:text-4xl lg:text-6xl md:text-8xl font-serif text-light-beige font-normal">
            Entre em <span className="italic text-brown-sophisticated">Contato</span>.
          </h1>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2 font-semibold">Agendamento Exclusivo</h3>
              <p className="text-light-beige font-normal max-w-md">
                Para garantir a excelência e o sigilo de nossos serviços, atendemos mediante agendamento prévio.
              </p>
            </div>
            <div>
              <h3 className="text-gold uppercase tracking-[0.2em] text-sm mb-2 font-semibold">Canais Diretos</h3>
              <ul className="space-y-4 text-light-beige font-normal">
                <li className="flex items-center"><span className="w-8 h-[1px] bg-gold/30 mr-4"></span> +55 11 99999-9999</li>
                <li className="flex items-center"><span className="w-8 h-[1px] bg-gold/30 mr-4"></span> adv.tiagosales@gmail.com</li>
              </ul>
            </div>
            <a 
              href="https://wa.me/5511999999999" 
              className="inline-block bg-gold text-dark px-8 py-4 uppercase tracking-widest text-base font-semibold hover:bg-light-beige transition-colors duration-300"
            >
              Iniciar Conversa
            </a>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="space-y-6">
              <div>
                <input type="text" placeholder="Nome Completo" className="w-full bg-dark-secondary/50 border border-white/10 px-6 py-4 text-light-beige font-normal focus:outline-none focus:border-gold/50 transition-colors" />
              </div>
              <div>
                <input type="email" placeholder="E-mail" className="w-full bg-dark-secondary/50 border border-white/10 px-6 py-4 text-light-beige font-normal focus:outline-none focus:border-gold/50 transition-colors" />
              </div>
              <div>
                <input type="tel" placeholder="Telefone / WhatsApp" className="w-full bg-dark-secondary/50 border border-white/10 px-6 py-4 text-light-beige font-normal focus:outline-none focus:border-gold/50 transition-colors" />
              </div>
              <div>
                <textarea placeholder="Como podemos ajudar?" rows={5} className="w-full bg-dark-secondary/50 border border-white/10 px-6 py-4 text-light-beige font-normal focus:outline-none focus:border-gold/50 transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full border border-gold text-gold px-8 py-4 uppercase tracking-widest text-base font-semibold hover:bg-gold hover:text-dark transition-colors duration-300">
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
