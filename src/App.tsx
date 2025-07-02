// App.js
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Resources from './components/Resources';
import AnalysisForm from './components/AnalysisForm';
import Footer from './components/Footer';
import { initialize } from 'react-native-gtag';



function App() {
  // Inicialização do GA quando o app carrega
  React.useEffect(() => {
    initialize('G-7H84JBR36Y');
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