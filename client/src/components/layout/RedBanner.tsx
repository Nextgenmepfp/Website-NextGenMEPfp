
import React from 'react';

export function RedBanner() {
  return (
    <div className="w-full bg-red-600 h-40 md:h-40 h-24 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center max-w-5xl mx-auto px-4">
        <img 
          src="/images/banner-image.jpeg" 
          alt="Banner" 
          className="w-full md:h-40 h-24 object-contain"
        />
      </div>
    </div>
  );
}
