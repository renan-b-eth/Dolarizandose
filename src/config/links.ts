// Configurações centralizadas de links e contatos
export const CONTACT_INFO = {
  whatsapp: {
    number: '+5511954957725',
    // Remove espaços e caracteres especiais para o link
    link: 'https://wa.me/5511954957725',
    message: 'Olá! Gostaria de participar da comunidade Dolarizando-se 🚀'
  },
  email: 'contato@dolarizandose.com',
  phone: '+55 11 95495-7725'
};

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/dolarizandose/',
  linkedin: 'https://www.linkedin.com/showcase/dolarizando-se/',
  youtube: 'https://www.youtube.com/@Dolarizandose'
};

export const NAVIGATION_SECTIONS = {
  home: 'home',
  community: 'community',
  resources: 'resources',
  analysis: 'analysis',
  contact: 'contact'
};

// Função para gerar link do WhatsApp com mensagem personalizada
export const getWhatsAppLink = (customMessage?: string) => {
  const message = customMessage || CONTACT_INFO.whatsapp.message;
  return `${CONTACT_INFO.whatsapp.link}?text=${encodeURIComponent(message)}`;
};