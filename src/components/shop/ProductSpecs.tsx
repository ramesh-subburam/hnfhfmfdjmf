import React from 'react';
import { Clock, ArrowUp, Sparkles } from 'lucide-react';
import type { ProductSpecs as Specs } from '../../types/Product';

interface ProductSpecsProps {
  specs: Specs;
}

export default function ProductSpecs({ specs }: ProductSpecsProps) {
  return (
    <div className="mt-4 space-y-2 text-sm text-gray-600">
      <div className="flex items-center">
        <Clock className="h-4 w-4 mr-2" />
        <span>Duration: {specs.duration}</span>
      </div>
      {specs.height && (
        <div className="flex items-center">
          <ArrowUp className="h-4 w-4 mr-2" />
          <span>Height: {specs.height}</span>
        </div>
      )}
      <div className="flex items-center">
        <Sparkles className="h-4 w-4 mr-2" />
        <span>Effects: {specs.effects.join(', ')}</span>
      </div>
      {specs.pieces && (
        <div className="flex items-center">
          <span className="mr-2">📦</span>
          <span>Pieces: {specs.pieces}</span>
        </div>
      )}
    </div>
  );
}