import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-[600px] flex items-center">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            Light Up Your Celebrations
          </h1>
          <p className="text-xl mb-8">
            Family-owned wholesale and retail fireworks supplier, serving events and celebrations for over 25 years.
          </p>
          <div className="flex space-x-4">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Shop Retail
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
              Wholesale Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}