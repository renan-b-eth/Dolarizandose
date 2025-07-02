// public/gtag.js
export const initializeGTag = () => {
    // Garante que o window.dataLayer existe
    window.dataLayer = window.dataLayer || [];
    
    // Função gtag para enviar eventos
    function gtag() {
      window.dataLayer.push(arguments);
    }
    
    // Configuração inicial
    gtag('js', new Date());
    gtag('config', 'G-7H84JBR36Y');
  };
  
  export const trackPageview = (path) => {
    window.gtag?.('event', 'page_view', {
      page_path: path
    });
  };