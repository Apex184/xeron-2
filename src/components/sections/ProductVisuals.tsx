import React, { useState } from 'react';
import { productImages } from '../../data/teamData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProductVisuals: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === productImages.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? productImages.length - 1 : prev - 1));
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            How It Works
          </h2>
          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-3">
            Schedule → Sync → Collaborate → Automate
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            One-click integrations and zero hassle. Xerion AutoCal works behind the scenes so you can focus on what matters.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-2xl shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10" />
            <img 
              src={productImages[currentImageIndex]} 
              alt={`Product visual ${currentImageIndex + 1}`} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </div>
          
          <button 
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/30 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/10 text-white hover:bg-white/30 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {productImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? 'bg-blue-600 dark:bg-blue-400' : 'bg-gray-300 dark:bg-gray-700'
                }`}
                aria-label={`Go to image ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVisuals;