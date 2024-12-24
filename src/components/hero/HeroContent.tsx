import React from 'react';
import { Sparkles, Package } from 'lucide-react';

export default function HeroContent() {
  return (
    <div className="relative z-10 text-white max-w-4xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
        <span className="text-festive-400">Illuminate</span> Your Celebrations
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-gray-200">
        Premium fireworks for unforgettable moments. Family-owned since 1990.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="group bg-festive-500 text-primary-900 px-8 py-4 rounded-full font-semibold hover:bg-festive-400 transition-all duration-300 flex items-center justify-center">
          <Sparkles className="h-5 w-5 mr-2 group-hover:animate-spin" />
          Explore Products
        </button>
        <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-900 transition-all duration-300 flex items-center justify-center">
          <Package className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Wholesale Inquiry
        </button>
      </div>
    </div>
  );
}