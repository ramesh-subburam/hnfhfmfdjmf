import React from 'react';

export default function WholesaleSection() {
  return (
    <section className="py-16 bg-purple-900 text-white" id="wholesale">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Wholesale Partnership</h2>
            <p className="mb-6">
              Join our network of trusted retailers and event planners. Benefit from:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></span>
                Competitive wholesale pricing
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></span>
                Exclusive access to premium products
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></span>
                Dedicated account manager
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 bg-yellow-400 rounded-full mr-3"></span>
                Flexible payment terms
              </li>
            </ul>
            <button className="mt-8 bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
              Apply for Wholesale Account
            </button>
          </div>
          <div className="relative h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80"
              alt="Fireworks warehouse"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}