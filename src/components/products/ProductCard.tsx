import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import Card from '../ui/Card';
import type { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        {product.wholesaleAvailable && (
          <div className="absolute top-2 right-2 bg-festive-500 text-primary-900 px-3 py-1 rounded-full text-sm font-semibold">
            Wholesale
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-display font-semibold text-primary-800">{product.name}</h3>
          <span className="text-xl font-bold text-primary-600">₹{product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`
            w-full flex items-center justify-center py-2 px-4 rounded-lg
            ${product.inStock
              ? 'bg-primary-600 text-white hover:bg-primary-700'
              : 'bg-gray-300 cursor-not-allowed'
            }
            transition-colors duration-300
          `}
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </Card>
  );
}