"use client"

import React, { useState, useEffect, useRef } from 'react';
import CarousalItem from './Carousaltem';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export interface CarouselData {
  id: string | number;
  videoUrl: string;
  description: string;
  path: string;
  title?: string;
}

// Props for the main Carousel component
export interface CarousalProps {
  items: CarouselData[],
  autoPlayInterval?: number;
  className?: string;
}

export function Carousal({
  items = [],
  autoPlayInterval = 500,
  className = '',
}: CarousalProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const totalItems = items.length;

  // Auto-play timer effect
  useEffect(() => {
    if (totalItems <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [totalItems, autoPlayInterval, isPaused]);

  // Handle video play/pause sync on index change
  useEffect(() => {
    videoRefs.current.forEach((videoEl, index) => {
      if (videoEl) {
        if (index === currentIndex) {
          videoEl.currentTime = 0;
          videoEl.play().catch(() => {
            // Autoplay might be muted/blocked by browser policies
          });
        } else {
          videoEl.pause();
        }
      }
    });
  }, [currentIndex]);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  const handleDotClick = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return <div className="p-4 text-center text-gray-500">No items to display</div>;
  }

  return (
    <div
      className={`relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-xl group bg-black text-white ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides Container */}
      <div
        className="flex transition-transform duration-500 ease-out w-full h-[450px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <CarousalItem
            key={item.id || index}
            videoUrl={item.videoUrl}
            description={item.description}
            path={item.path}
            title={item.title}
            isActive={index === currentIndex}
            videoRef={(el) => {
              videoRefs.current[index] = el;
            }}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {totalItems > 1 && (
        <>
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous slide"
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
            <ArrowLeft/>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next slide"
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/70 text-white p-2.5 rounded-full backdrop-blur-sm transition-opacity duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100"
          >
             <ArrowRight/>
          </button>
        </>
      )}

      {/* Navigation Dots */}
      {totalItems > 1 && (
        <div className="absolute bottom-4 left-0 right-0 z-20 flex justify-center items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleDotClick(idx, e)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`transition-all duration-300 rounded-full ${currentIndex === idx
                  ? 'w-6 h-2 bg-white'
                  : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousal;