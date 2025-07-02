// App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Resources from './components/Resources';
import AnalysisForm from './components/AnalysisForm';
import Footer from './components/Footer';



function App() {
  // Importa o script gtag.js quando o componente monta
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = '/gtag.js';
    script.async = true;
    
    document.head.appendChild(script);

    // Remove o script quando o componente desmonta
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Community />
      <Resources />
      <AnalysisForm />
      <Footer />
    </div>
  );
}

export default App;