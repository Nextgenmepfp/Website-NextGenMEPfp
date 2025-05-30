import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SliderImage = {
  image: string;
  title: string;
  location: string;
};

type ImageSliderProps = {
  images: SliderImage[];
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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
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
      <div className="relative w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.image}
              alt={image.title}
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-0 left-0 right-0 p-4">
              <div className="bg-black bg-opacity-60 px-6 py-3 rounded-lg inline-block">
                <span className="text-white text-2xl font-bold">{image.title}</span>
                <span className="text-white mx-2">–</span>
                <span className="text-white text-xl">{image.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}