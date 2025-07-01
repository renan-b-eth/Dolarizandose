import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_LINKS, getWhatsAppLink } from '../config/links';

const Footer = () => {
  const handleParticipateClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/Logo_Dolarizandose(png).png" 
              alt="Dolarizando-se" 
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 max-w-md">
              A maior comunidade de empreendedores brasileiros construindo negócios 
              internacionais e conquistando mercados globais.
            </p>
            <div className="flex space-x-4">
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors duration-200"
              >
                <Instagram size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href={SOCIAL_LINKS.youtube} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Comunidade</h3>
            <ul className="space-y-3 text-gray-300">
              <li>
                <button 
                  onClick={handleParticipateClick}
                  className="hover:text-white transition-colors duration-200"
                >
                  Participar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open(getWhatsAppLink('Olá! Gostaria de saber sobre os eventos da comunidade 📅'), '_blank')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Eventos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open(getWhatsAppLink('Olá! Tenho interesse na mentoria especializada 🎯'), '_blank')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Mentoria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.open(getWhatsAppLink('Olá! Gostaria de conhecer os recursos disponíveis 📚'), '_blank')}
                  className="hover:text-white transition-colors duration-200"
                >
                  Recursos
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Contato</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Mail size={16} className="mr-3" />
                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-3" />
                <a 
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-200"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center">
                <MapPin size={16} className="mr-3" />
                Global Community
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dolarizando-se. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button 
              onClick={() => window.open(getWhatsAppLink('Olá! Gostaria de saber sobre a política de privacidade 📋'), '_blank')}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => window.open(getWhatsAppLink('Olá! Gostaria de saber sobre os termos de uso 📋'), '_blank')}
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;