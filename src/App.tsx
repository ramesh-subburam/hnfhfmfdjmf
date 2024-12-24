import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import ProductGrid from './components/shop/ProductGrid';
import WholesaleSection from './components/WholesaleSection';
import SafetyGuidelines from './components/safety/SafetyGuidelines';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductCategories />
        <ProductGrid />
        <WholesaleSection />
        <SafetyGuidelines />
      </main>
      <Footer />
    </div>
  );
}

export default App;