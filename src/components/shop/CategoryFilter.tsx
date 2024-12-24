import React from 'react';
import { categories } from '../../data/categories';
import type { ProductCategory } from '../../types/Product';

interface CategoryFilterProps {
  selectedCategory: ProductCategory | 'all';
  onSelectCategory: (category: ProductCategory | 'all') => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-4 py-2 rounded-full ${
          selectedCategory === 'all'
            ? 'bg-purple-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id as ProductCategory)}
          className={`px-4 py-2 rounded-full flex items-center ${
            selectedCategory === category.id
              ? 'bg-purple-600 text-white'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <category.icon className="h-4 w-4 mr-2" />
          {category.name}
        </button>
      ))}
    </div>
  );
}