// App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Resources from './components/Resources';
import AnalysisForm from './components/AnalysisForm';
import Footer from './components/Footer';
import { initialize } from 'react-native-gtag';

// Criando um bridge nativo para comunicação com GA
const gtag = (...args) => {
  const event = args.length > 1 ? { action: args[0], params: args[1] } : args[0];
  
  // Implementação do bridge aqui
  console.log('GA Event:', event);
};

function App() {
  useEffect(() => {
    // Inicialização simulada
    gtag('config', 'G-7H84JBR36Y');
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