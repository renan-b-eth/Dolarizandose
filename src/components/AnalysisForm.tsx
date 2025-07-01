import React, { useState } from 'react';
import { Send, User, Building, MapPin, DollarSign, Target, Calendar } from 'lucide-react';

const AnalysisForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    idade: '',
    cidade: '',
    estado: '',
    tipoNegocio: '',
    tempoEmpreendendo: '',
    faturamentoMensal: '',
    principalDesafio: '',
    objetivoInternacional: '',
    experienciaInternacional: '',
    investimentoDisponivel: '',
    prazoExpansao: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendToTelegram = async (data: typeof formData) => {
    const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    
    const message = `
🚀 *NOVA ANÁLISE DE EMPREENDEDOR*

👤 *Dados Pessoais:*
• Nome: ${data.nome}
• Email: ${data.email}
• Telefone: ${data.telefone}
• Idade: ${data.idade}
• Localização: ${data.cidade}, ${data.estado}

🏢 *Perfil Empresarial:*
• Tipo de Negócio: ${data.tipoNegocio}
• Tempo Empreendendo: ${data.tempoEmpreendendo}
• Faturamento Mensal: ${data.faturamentoMensal}

🎯 *Objetivos e Desafios:*
• Principal Desafio: ${data.principalDesafio}
• Objetivo Internacional: ${data.objetivoInternacional}
• Experiência Internacional: ${data.experienciaInternacional}

💰 *Investimento:*
• Disponível para Investir: ${data.investimentoDisponivel}
• Prazo para Expansão: ${data.prazoExpansao}

📅 *Data de Envio:* ${new Date().toLocaleString('pt-BR')}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'Markdown'
        })
      });

      if (response.ok) {
        return true;
      } else {
        throw new Error('Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Erro:', error);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const success = await sendToTelegram(formData);
      
      if (success) {
        setSubmitStatus('success');
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          idade: '',
          cidade: '',
          estado: '',
          tipoNegocio: '',
          tempoEmpreendendo: '',
          faturamentoMensal: '',
          principalDesafio: '',
          objetivoInternacional: '',
          experienciaInternacional: '',
          investimentoDisponivel: '',
          prazoExpansao: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="analysis" className="py-12 sm:py-20 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Análise Gratuita do seu Perfil
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Conte-nos sobre sua jornada empreendedora no Brasil e receba uma análise 
            personalizada sobre suas oportunidades no mercado internacional.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Dados Pessoais */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <User className="mr-2 text-green-600" size={24} />
                Dados Pessoais
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo *</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                  <input
                    type="number"
                    name="idade"
                    value={formData.idade}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Cidade *</label>
                  <input
                    type="text"
                    name="cidade"
                    value={formData.cidade}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estado *</label>
                  <input
                    type="text"
                    name="estado"
                    value={formData.estado}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            </div>

            {/* Perfil Empresarial */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="mr-2 text-blue-600" size={24} />
                Perfil Empresarial
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Negócio *</label>
                  <select
                    name="tipoNegocio"
                    value={formData.tipoNegocio}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="SaaS/Software">SaaS/Software</option>
                    <option value="Consultoria">Consultoria</option>
                    <option value="Agência Digital">Agência Digital</option>
                    <option value="Produtos Físicos">Produtos Físicos</option>
                    <option value="Serviços">Serviços</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tempo Empreendendo *</label>
                  <select
                    name="tempoEmpreendendo"
                    value={formData.tempoEmpreendendo}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="Menos de 1 ano">Menos de 1 ano</option>
                    <option value="1-2 anos">1-2 anos</option>
                    <option value="3-5 anos">3-5 anos</option>
                    <option value="Mais de 5 anos">Mais de 5 anos</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Faturamento Mensal Atual *</label>
                  <select
                    name="faturamentoMensal"
                    value={formData.faturamentoMensal}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="Até R$ 10.000">Até R$ 10.000</option>
                    <option value="R$ 10.000 - R$ 50.000">R$ 10.000 - R$ 50.000</option>
                    <option value="R$ 50.000 - R$ 100.000">R$ 50.000 - R$ 100.000</option>
                    <option value="R$ 100.000 - R$ 500.000">R$ 100.000 - R$ 500.000</option>
                    <option value="Mais de R$ 500.000">Mais de R$ 500.000</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Objetivos e Desafios */}
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <Target className="mr-2 text-red-600" size={24} />
                Objetivos e Desafios
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Principal Desafio Atual *</label>
                  <textarea
                    name="principalDesafio"
                    value={formData.principalDesafio}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="Descreva seu maior desafio no empreendedorismo..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Objetivo com Mercado Internacional *</label>
                  <textarea
                    name="objetivoInternacional"
                    value={formData.objetivoInternacional}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                    placeholder="O que você espera alcançar no mercado internacional?"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Experiência Internacional</label>
                  <select
                    name="experienciaInternacional"
                    value={formData.experienciaInternacional}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="Nenhuma">Nenhuma experiência</option>
                    <option value="Já vendi para o exterior">Já vendi para o exterior</option>
                    <option value="Tenho empresa no exterior">Tenho empresa no exterior</option>
                    <option value="Moro no exterior">Moro no exterior</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Investimento */}
            <div className="pb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <DollarSign className="mr-2 text-yellow-600" size={24} />
                Investimento e Prazo
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Investimento Disponível</label>
                  <select
                    name="investimentoDisponivel"
                    value={formData.investimentoDisponivel}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="Até R$ 10.000">Até R$ 10.000</option>
                    <option value="R$ 10.000 - R$ 50.000">R$ 10.000 - R$ 50.000</option>
                    <option value="R$ 50.000 - R$ 100.000">R$ 50.000 - R$ 100.000</option>
                    <option value="Mais de R$ 100.000">Mais de R$ 100.000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Prazo para Expansão</label>
                  <select
                    name="prazoExpansao"
                    value={formData.prazoExpansao}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="">Selecione...</option>
                    <option value="Imediatamente">Imediatamente</option>
                    <option value="3-6 meses">3-6 meses</option>
                    <option value="6-12 meses">6-12 meses</option>
                    <option value="Mais de 1 ano">Mais de 1 ano</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                ✅ Análise enviada com sucesso! Nossa equipe entrará em contato em breve.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                ❌ Erro ao enviar análise. Tente novamente ou entre em contato conosco.
              </div>
            )}

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center mx-auto transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Enviando...
                  </>
                ) : (
                  <>
                    <Send className="mr-2" size={20} />
                    Enviar para Análise Gratuita
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AnalysisForm;