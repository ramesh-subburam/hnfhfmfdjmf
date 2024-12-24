import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CategoryFilter from './CategoryFilter';
import { products } from '../../data/products';
import type { Product, ProductCategory } from '../../types/Product';

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'all'>('all');

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    // TODO: Implement cart functionality
    console.log('Added to cart:', product);
  };

  return (
    <section className="py-12" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}