import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>1-800-FIREWORK</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>info@stellarfireworks.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span>123 Sparkler Ave, Pyro City</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-yellow-400 transition">Products</a></li>
              <li><a href="#wholesale" className="hover:text-yellow-400 transition">Wholesale</a></li>
              <li><a href="#safety" className="hover:text-yellow-400 transition">Safety Guidelines</a></li>
              <li><a href="#faq" className="hover:text-yellow-400 transition">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Business Hours</h3>
            <ul className="space-y-2">
              <li>Mon-Fri: 9:00 AM - 6:00 PM</li>
              <li>Saturday: 10:00 AM - 4:00 PM</li>
              <li>Sunday: Closed</li>
              <li className="text-yellow-400">* Extended hours during peak seasons</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 cursor-pointer hover:text-yellow-400 transition" />
              <Instagram className="h-6 w-6 cursor-pointer hover:text-yellow-400 transition" />
              <Twitter className="h-6 w-6 cursor-pointer hover:text-yellow-400 transition" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Stellar Fireworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}