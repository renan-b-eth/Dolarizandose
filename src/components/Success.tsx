import React from 'react';
import { Star, MapPin, TrendingUp } from 'lucide-react';

const Success = () => {
  const stories = [
    {
      name: "Carlos Silva",
      business: "SaaS de Gestão",
      location: "Miami, EUA",
      revenue: "$2M ARR",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "A comunidade me deu o suporte necessário para expandir minha startup para os EUA. Hoje faturamos em dólares e crescemos 300% ao ano."
    },
    {
      name: "Ana Costa",
      business: "E-commerce Fashion",
      location: "Lisboa, Portugal",
      revenue: "$500K/mês",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "Através dos contatos da Dolarizando-se, consegui fornecedores na Europa e hoje atendo clientes em 15 países diferentes."
    },
    {
      name: "Roberto Mendes",
      business: "Consultoria Digital",
      location: "Toronto, Canadá",
      revenue: "$100K/mês",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      quote: "O networking da comunidade abriu portas que eu nem sabia que existiam. Minha consultoria agora atende Fortune 500."
    }
  ];

  return (
    <section id="success" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Histórias que Inspiram
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos empreendedores que transformaram suas vidas através 
            da nossa comunidade e hoje são referência em seus mercados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stories.map((story, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-200">
              <div className="flex items-center mb-6">
                <img 
                  src={story.image} 
                  alt={story.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{story.name}</h3>
                  <p className="text-gray-600 text-sm">{story.business}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  {story.location}
                </div>
                <div className="flex items-center">
                  <TrendingUp size={16} className="mr-1" />
                  {story.revenue}
                </div>
              </div>
              
              <blockquote className="text-gray-700 italic leading-relaxed">
                "{story.quote}"
              </blockquote>
              
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Sua História Pode ser a Próxima</h3>
          <p className="text-xl mb-8 opacity-90">
            Junte-se aos empreendedores que já estão construindo impérios globais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Começar Agora
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-200 font-semibold">
              Ver Mais Casos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;