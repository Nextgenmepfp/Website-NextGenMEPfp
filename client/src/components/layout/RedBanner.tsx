
import React from 'react';

export function RedBanner() {
  return (
    <div className="w-full bg-red-600 h-40 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <img 
          src="/images/WhatsApp Image 2025-03-26 at 19.01.06 (1).jpeg" 
          alt="Banner" 
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
