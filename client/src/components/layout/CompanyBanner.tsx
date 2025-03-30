
import React from 'react';

export function CompanyBanner() {
  return (
    <div className="w-full bg-white py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 place-items-center px-4">
        <img src="/images/anderson-airforce.jpg" alt="Anderson Air Force" className="h-20 object-contain" />
        <img src="/images/disney-orlando.jpg" alt="Disney Orlando" className="h-20 object-contain" />
        <img src="/images/marriott-kauai.jpg" alt="Marriott Kauai" className="h-20 object-contain" />
        <img src="/images/trump-int.gif.jpeg" alt="Trump International" className="h-20 object-contain" />
      </div>
    </div>
  );
}
