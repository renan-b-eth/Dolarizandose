import React from 'react';
import { ArrowRight, Globe, DollarSign, TrendingUp } from 'lucide-react';
import { getWhatsAppLink } from '../config/links';

const Hero = () => {
  const handleParticipateClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  const handleLearnMoreClick = () => {
    const element = document.getElementById('community');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 md:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empreenda no
                <span className="text-green-600 block">Exterior</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Junte-se à maior comunidade de empreendedores brasileiros que estão 
                construindo negócios internacionais e conquistando mercados globais.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={handleParticipateClick}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold flex items-center justify-center group transform hover:scale-105"
              >
                Participar da Comunidade
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </button>
              <button 
                onClick={handleLearnMoreClick}
                className="border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:border-green-600 hover:text-green-600 transition-all duration-300 font-semibold transform hover:scale-105"
              >
                Conhecer Mais
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-green-600">800K+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Views Instagram</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">Global</div>
                <div className="text-gray-600 text-xs sm:text-sm">Alcance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-red-600">Crescendo</div>
                <div className="text-gray-600 text-xs sm:text-sm">Comunidade</div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border border-gray-100 transform hover:scale-105 transition-transform duration-500">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Globe className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Mercado Global</h3>
                    <p className="text-gray-600 text-sm">Acesso a oportunidades internacionais</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dolarização</h3>
                    <p className="text-gray-600 text-sm">Receita em moeda forte</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="text-red-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Crescimento</h3>
                    <p className="text-gray-600 text-sm">Escalabilidade internacional</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-br from-red-400 to-yellow-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;