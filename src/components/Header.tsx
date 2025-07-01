import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppLink, NAVIGATION_SECTIONS } from '../config/links';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleParticipateClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <img 
              src="/Logo_Dolarizandose(png).png" 
              alt="Dolarizando-se" 
              className="h-8 sm:h-10 w-auto"
            />
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.home)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.community)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Comunidade
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.resources)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.analysis)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Análise Gratuita
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.contact)}
              className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium"
            >
              Contato
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={handleParticipateClick}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium transform hover:scale-105"
            >
              Participar
            </button>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.home)}
              className="block w-full text-left py-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.community)}
              className="block w-full text-left py-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Comunidade
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.resources)}
              className="block w-full text-left py-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Recursos
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.analysis)}
              className="block w-full text-left py-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Análise Gratuita
            </button>
            <button 
              onClick={() => scrollToSection(NAVIGATION_SECTIONS.contact)}
              className="block w-full text-left py-3 text-gray-700 hover:text-green-600 transition-colors duration-300"
            >
              Contato
            </button>
            <button 
              onClick={handleParticipateClick}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-medium mt-4 transform hover:scale-105"
            >
              Participar
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;