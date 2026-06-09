import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
export default function Footer() {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    const element = document.getElementById(hash.substring(1));
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-dark-secondary pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[30vw] font-serif text-white tracking-tighter leading-none">
          TS
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-20">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="inline-block mb-8">
              <img 
                src="/logo original.png" 
                alt="Tiago Sales Advocacia" 
                className="h-24 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity transform origin-left"
              />
            </a>
            <p className="text-light-beige/50 font-sans text-sm font-light leading-relaxed max-w-xs mb-8">
              Assessoria jurídica de excelência. Estratégia, exclusividade e resultados para as decisões mais complexas da sua vida ou do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tiagosalesadvogado/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light-beige/50 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://www.instagram.com/tiagosales.advocacia?igsh=MWc1bGF4a2w5dW9pOA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light-beige/50 hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Links: Institucional */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs mb-6 font-semibold">Institucional</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '#home' },
                { name: 'Sobre o Escritório', path: '#sobre' },
                { name: 'Blog Jurídico', path: '#blog' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} onClick={(e) => scrollTo(e, item.path)} className="text-light-beige/70 hover:text-gold transition-colors text-sm font-light tracking-wide">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Áreas de Atuação */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs mb-6 font-semibold">Expertise</h4>
            <ul className="space-y-4">
              <li>
                <a href="#areas" onClick={(e) => scrollTo(e, '#areas')} className="text-light-beige/70 hover:text-gold transition-colors text-sm font-light tracking-wide">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#atendimento" onClick={(e) => scrollTo(e, '#atendimento')} className="text-light-beige/70 hover:text-gold transition-colors text-sm font-light tracking-wide">
                  Cobertura de Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-xs mb-6 font-semibold">Contato</h4>
            <ul className="space-y-4 text-sm font-light tracking-wide text-light-beige/70">
              <li>
                <span className="block text-gold/50 text-[10px] uppercase tracking-widest mb-1">WhatsApp / Fone</span>
                (74) 99988-0082
              </li>
              <li>
                <span className="block text-gold/50 text-[10px] uppercase tracking-widest mb-1">E-mail</span>
                contato@tiagosalesadv.com.br
              </li>
              <li>
                <span className="block text-gold/50 text-[10px] uppercase tracking-widest mb-1">Endereço</span>
                Atendimento presencial em Juazeiro/BA e João Pessoa. <br />Atendimento online em todo o território nacional.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-light-beige/40 text-xs tracking-wide">
            &copy; {new Date().getFullYear()} Tiago Sales Advocacia e Consultoria Jurídica. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#home" className="text-light-beige/40 hover:text-gold text-xs tracking-wide transition-colors">
              Política de Privacidade
            </a>
            <a href="#home" className="text-light-beige/40 hover:text-gold text-xs tracking-wide transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
