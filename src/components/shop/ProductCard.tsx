import React from 'react';
import { ShoppingCart, Package } from 'lucide-react';
import type { Product } from '../../types/Product';
import ProductSpecs from './ProductSpecs';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold">{product.name}</h3>
          <span className="text-xl font-bold">${product.price}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        <ProductSpecs specs={product.specs} />
        {product.wholesaleAvailable && (
          <div className="mt-4 flex items-center text-sm text-purple-600">
            <Package className="h-4 w-4 mr-1" />
            <span>Min. wholesale qty: {product.minWholesaleQty}</span>
          </div>
        )}
        <button
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
          className={`mt-4 w-full flex items-center justify-center py-2 px-4 rounded-lg ${
            product.inStock
              ? 'bg-purple-600 text-white hover:bg-purple-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
        >
          <ShoppingCart className="h-5 w-5 mr-2" />
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}