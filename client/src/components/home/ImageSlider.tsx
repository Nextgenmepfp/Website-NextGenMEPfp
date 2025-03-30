import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ImageSliderProps = {
  images: string[];
  autoPlayInterval?: number;
};

export function ImageSlider({ images, autoPlayInterval = 5000 }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious();
    }
  };

  return (
    <div 
      className="relative w-full h-[600px] overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Project ${index + 1}`}
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
        
        {/* Navigation Arrows - Only visible on desktop */}
        <div className="hidden md:block">
          <button 
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          >
            ←
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full z-10"
          >
            →
          </button>
        </div>
      </div>

      {/* Controls */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6 text-primary" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-2 rounded-full"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6 text-primary" />
      </button>

      
    </div>
  );
}