import React from 'react';
import { Rocket, Sparkles, PartyPopper, Star } from 'lucide-react';

const categories = [
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Aerial Fireworks",
    description: "Professional-grade aerial displays for spectacular shows"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Ground Effects",
    description: "Fountains, wheels, and ground-based entertainment"
  },
  {
    icon: <PartyPopper className="h-8 w-8" />,
    title: "Event Packages",
    description: "Curated collections for weddings and special events"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Wholesale Supplies",
    description: "Bulk orders for retailers and event planners"
  }
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-primary-50" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-center mb-12 text-primary-800">Our Products</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition group">
              <div className="text-primary-600 group-hover:text-festive-500 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-display font-semibold mb-2 text-primary-800">
                {category.title}
              </h3>
              <p className="text-gray-600">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}