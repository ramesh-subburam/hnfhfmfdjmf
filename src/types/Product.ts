export type ProductCategory = 'Sparklers' | 'Aerial' | 'Fountains' | 'Wholesale';

export interface ProductSpecs {
  duration: string;
  height?: string;
  effects: string[];
  pieces?: number;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  image: string;
  inStock: boolean;
  wholesaleAvailable: boolean;
  minWholesaleQty?: number;
  specs: ProductSpecs;
}