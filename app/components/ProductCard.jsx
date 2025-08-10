'use client';

import { useCart } from './context/CartContext';
import { useState } from 'react';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    addToCart(product);
    
    setTimeout(() => {
      setIsAdding(false);
    }, 300);
  };

  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-700">
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs font-medium text-white">
          ${product.price}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.title}</h3>
        <p className="text-gray-300 text-sm mb-4 line-clamp-2 h-12">{product.description}</p>
        
        <button 
          onClick={handleAddToCart}
          disabled={isAdding}
          className={`
            w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300
            flex items-center justify-center gap-2
            ${isAdding 
              ? 'bg-green-600 text-white' 
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg'
            }
            disabled:opacity-70 disabled:cursor-not-allowed
            transform hover:scale-105 active:scale-95
          `}
        >
          {isAdding ? (
            <>
              <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Added!
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}