
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
    <footer className="bg-dark-secondary pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none opacity-[0.03]">
        <span className="text-[30vw] font-serif text-white tracking-tighter leading-none">
          TS
        </span>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="inline-block mb-6">
              <img 
                src="/logo original.png" 
                alt="Tiago Sales Advocacia" 
                className="h-20 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity transform origin-left"
              />
            </a>
            <p className="text-light-beige/90 font-sans text-base font-normal leading-relaxed max-w-xs mb-6">
              Assessoria jurídica de excelência. Estratégia, exclusividade e resultados para as decisões mais complexas da sua vida ou do seu negócio.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/tiagosalesadvogado/" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light-beige hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>
              <a 
                href="https://www.instagram.com/tiagosales.advocacia?igsh=MWc1bGF4a2w5dW9pOA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noreferrer" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-light-beige hover:bg-gold hover:text-dark hover:border-gold transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a>
            </div>
          </div>

          {/* Links: Institucional */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Institucional</h4>
            <ul className="space-y-3">
              {[
                { name: 'HOME', path: '#home' },
                { name: 'Sobre Nós', path: '#sobre' },
                { name: 'Blog Jurídico', path: '#blog' }
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.path} onClick={(e) => scrollTo(e, item.path)} className="text-light-beige hover:text-gold transition-colors text-base font-normal tracking-wide">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links: Áreas de Atuação */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Especialização</h4>
            <ul className="space-y-3">
              <li>
                <a href="#areas" onClick={(e) => scrollTo(e, '#areas')} className="text-light-beige hover:text-gold transition-colors text-base font-normal tracking-wide">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#atendimento" onClick={(e) => scrollTo(e, '#atendimento')} className="text-light-beige hover:text-gold transition-colors text-base font-normal tracking-wide">
                  Cobertura de Atendimento
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-gold uppercase tracking-[0.2em] text-sm mb-4 font-semibold">Contato</h4>
            <ul className="space-y-4 text-base font-normal tracking-wide text-light-beige">
              <li>
                <span className="block text-gold/60 text-[11px] uppercase tracking-widest mb-1">WhatsApp / Fone</span>
                (74) 99988-0082
              </li>
              <li>
                <span className="block text-gold/60 text-[11px] uppercase tracking-widest mb-1">E-mail</span>
                contato@tiagosalesadv.com.br
              </li>
              <li>
                <span className="block text-gold/60 text-[11px] uppercase tracking-widest mb-1">Endereço</span>
                Atendimento presencial em Juazeiro/BA e João Pessoa. <span className="text-gold font-semibold ml-1">Atendimento online em todo o território nacional.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
          <p className="text-light-beige/70 text-xs tracking-wide md:w-1/3">
            &copy; {new Date().getFullYear()} Tiago Sales Advocacia.<br className="hidden md:block" /> Todos os direitos reservados.
          </p>
          
          <div className="text-light-beige text-[11px] tracking-widest uppercase md:w-1/3 md:text-center">
            Produzida com <span className="text-gold text-sm">♥</span> por{' '}
            <a href="https://camaly.com.br/" target="_blank" rel="noreferrer" className="text-gold hover:text-gold-hover transition-colors font-semibold">
              CAMALY
            </a>
          </div>

          <div className="flex space-x-6 md:w-1/3 justify-center md:justify-end">
            <a href="#home" className="text-light-beige/70 hover:text-gold text-xs tracking-wide transition-colors">
              Privacidade
            </a>
            <a href="#home" className="text-light-beige/70 hover:text-gold text-xs tracking-wide transition-colors">
              Termos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
