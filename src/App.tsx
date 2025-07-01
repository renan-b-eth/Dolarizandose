import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Community from './components/Community';
import Resources from './components/Resources';
import AnalysisForm from './components/AnalysisForm';
import Footer from './components/Footer';

function App() {
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