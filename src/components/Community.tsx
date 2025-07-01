import React from 'react';
import { Users, MessageCircle, BookOpen, Award } from 'lucide-react';
import { getWhatsAppLink } from '../config/links';

const Community = () => {
  const features = [
    {
      icon: Users,
      title: "Networking Global",
      description: "Conecte-se com empreendedores de todo o mundo e construa parcerias estratégicas.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: MessageCircle,
      title: "Mentoria Especializada",
      description: "Acesso direto a mentores experientes em negócios internacionais.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: BookOpen,
      title: "Conteúdo Exclusivo",
      description: "Materiais, cursos e workshops focados em empreendedorismo no exterior.",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: Award,
      title: "Casos de Sucesso",
      description: "Aprenda com histórias reais de quem já conquistou mercados internacionais.",
      color: "bg-yellow-100 text-yellow-600"
    }
  ];

  const handleParticipateClick = () => {
    window.open(getWhatsAppLink(), '_blank');
  };

  return (
    <section id="community" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Uma Comunidade que Transforma
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Mais que uma rede de contatos, somos uma família de empreendedores 
            comprometidos em conquistar o mundo dos negócios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group hover:scale-105 transition-all duration-300">
              <div className="bg-gray-50 rounded-xl p-6 sm:p-8 h-full border border-gray-100 hover:shadow-lg transition-all duration-300 hover:bg-white">
                <div className={`w-14 sm:w-16 h-14 sm:h-16 ${feature.color} rounded-lg flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-6 sm:p-8 md:p-12 text-center text-white transform hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">Pronto para Dolarizar seu Negócio?</h3>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90">
            Junte-se aos empreendedores que já estão construindo o futuro.
          </p>
          <button 
            onClick={handleParticipateClick}
            className="bg-white text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold text-base sm:text-lg transform hover:scale-105"
          >
            Participar Agora
          </button>
        </div>
      </div>
    </section>
  );
};

export default Community;