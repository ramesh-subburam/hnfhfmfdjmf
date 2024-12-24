import React from 'react';
import { Sparkles, ShoppingCart, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-festive-400" />
            <span className="text-2xl font-display font-bold">Stellar Fireworks</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#products" className="hover:text-festive-300 transition">Products</a>
            <a href="#wholesale" className="hover:text-festive-300 transition">Wholesale</a>
            <a href="#events" className="hover:text-festive-300 transition">Event Services</a>
            <a href="#safety" className="hover:text-festive-300 transition">Safety</a>
            <a href="#contact" className="hover:text-festive-300 transition">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-festive-300 transition" />
            <Menu className="h-6 w-6 md:hidden cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
}