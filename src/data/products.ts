import type { Product } from '../types/Product';

export const products: Product[] = [
  // Sparklers
  {
    id: "sparkler-001",
    name: "Gold Sparkler Pack",
    description: "36-inch gold sparklers, perfect for weddings and celebrations",
    price: 24.99,
    category: "Sparklers",
    image: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    wholesaleAvailable: true,
    minWholesaleQty: 20,
    specs: {
      duration: "3-4 minutes",
      effects: ["Golden sparks", "Minimal smoke"],
      pieces: 24
    }
  },
  {
    id: "sparkler-002",
    name: "Color-Changing Sparklers",
    description: "Multi-color sparklers that change colors while burning",
    price: 29.99,
    category: "Sparklers",
    image: "https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    wholesaleAvailable: true,
    minWholesaleQty: 20,
    specs: {
      duration: "2-3 minutes",
      effects: ["Color changing", "Red", "Blue", "Green"],
      pieces: 18
    }
  },
  // Aerial Shells
  {
    id: "aerial-001",
    name: "Stellar Burst Pro",
    description: "Professional-grade 500g cake with stunning color-changing effects",
    price: 89.99,
    category: "Aerial",
    image: "https://images.unsplash.com/photo-1498931299472-f7a63a5a1cfa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    wholesaleAvailable: true,
    minWholesaleQty: 10,
    specs: {
      duration: "90 seconds",
      height: "150 feet",
      effects: ["Color changing", "Crackling", "Chrysanthemum break"]
    }
  },
  {
    id: "aerial-002",
    name: "Thunder King",
    description: "Powerful 60g shells with thunderous breaks and vibrant colors",
    price: 129.99,
    category: "Aerial",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    wholesaleAvailable: true,
    minWholesaleQty: 5,
    specs: {
      duration: "30 seconds",
      height: "200 feet",
      effects: ["Loud break", "Silver glitter", "Red and blue stars"],
      pieces: 12
    }
  },
  // More products...
];