import React from 'react';
import { FileText, Video, Headphones, Calendar } from 'lucide-react';
import { getWhatsAppLink } from '../config/links';

const Resources = () => {
  const resources = [
    {
      icon: FileText,
      title: "Guias Práticos",
      description: "Documentos detalhados sobre abertura de empresas, impostos e regulamentações internacionais.",
      items: ["Guia de Abertura nos EUA", "Tributação Internacional", "Contratos Globais"]
    },
    {
      icon: Video,
      title: "Masterclasses",
      description: "Aulas exclusivas com especialistas em mercados internacionais e cases reais.",
      items: ["Marketing Global", "Vendas B2B Internacional", "Expansão Digital"]
    },
    {
      icon: Headphones,
      title: "Podcast Semanal",
      description: "Entrevistas com empreendedores de sucesso e análises de mercado.",
      items: ["Histórias de Sucesso", "Tendências Globais", "Dicas Práticas"]
    },
    {
      icon: Calendar,
      title: "Eventos Exclusivos",
      description: "Networking presencial e virtual com a comunidade internacional.",
      items: ["Meetups Mensais", "Conferência Anual", "Workshops Especializados"]
    }
  ];

  const handleExploreClick = () => {
    window.open(getWhatsAppLink('Olá! Gostaria de conhecer mais sobre os recursos da comunidade Dolarizando-se 📚'), '_blank');
  };

  return (
    <section id="resources" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Recursos para seu Crescimento
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Tudo que você precisa para construir e escalar seu negócio internacional, 
            reunido em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {resources.map((resource, index) => (
            <div key={index} className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <resource.icon className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm sm:text-base">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-green-600 rounded-full mr-3 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Biblioteca Completa</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Acesso ilimitado a centenas de recursos exclusivos, atualizados semanalmente 
              pela nossa equipe de especialistas.
            </p>
            <button 
              onClick={handleExploreClick}
              className="bg-green-600 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-700 transition-all duration-300 font-semibold transform hover:scale-105"
            >
              Explorar Recursos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;