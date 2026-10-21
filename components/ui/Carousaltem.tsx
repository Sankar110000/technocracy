"use client"

import { ArrowRight } from 'lucide-react';
import React from 'react';

export interface CarousalItemProps {
  /** Video source URL */
  videoUrl: string;
  /** Description text for the product */
  description: string;
  /** Path or URL to route to on click */
  path: string;
  /** Optional title or badge text */
  title?: string;
  /** Active state determined by parent carousel */
  isActive?: boolean;
  /** Ref to control video element from parent if needed */
  videoRef?: (el: HTMLVideoElement | null) => void;
  /** Optional custom click handler (e.g. react-router navigate) */
  onNavigate?: (path: string) => void;
}

export function CarousalItem({
  videoUrl,
  description,
  path,
  title,
  isActive = false,
  videoRef,
  onNavigate,
}: CarousalItemProps) {
  const handleClick = () => {
    if (onNavigate) {
      onNavigate(path);
    } else {
      window.location.href = path;
    }
  };

  return (
    <div
      onClick={handleClick}
      className="w-full h-full flex-shrink-0 relative cursor-pointer group/slide overflow-hidden select-none"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoUrl}
        muted
        playsInline
        loop
        className="w-full h-full object-cover"
      />

      {/* Dark Gradient Overlay for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Content Overlay */}
      <div className="absolute bottom-12 left-6 right-6 flex flex-col items-start gap-2 text-left z-10">
        {title && (
          <span className="bg-white/20 backdrop-blur-md text-xs font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider text-white">
            {title}
          </span>
        )}

        {/* Product Description */}
        <p className="text-lg md:text-2xl font-bold line-clamp-2 max-w-xl text-white drop-shadow-md">
          {description}
        </p>

        {/* Navigation Link / CTA */}
        <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-white/90 group-hover/slide:text-white group-hover/slide:translate-x-1.5 transition-all duration-300">
          <span>Explore this product</span>
          <ArrowRight/>
        </div>
      </div>
    </div>
  );
}

export default CarousalItem;