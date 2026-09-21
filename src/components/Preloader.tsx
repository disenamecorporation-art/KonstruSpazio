import React, { useState, useEffect } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 700);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#1A1F26] flex flex-col items-center justify-center transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        <img
          src="https://i.postimg.cc/qqdW8LwW/image-Photoroom-(51).png"
          alt="Konstru Spazio Logo"
          className="h-20 w-auto animate-bounce object-contain"
        />
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div className="h-full bg-[#E8501E] animate-[shimmer_1.5s_infinite] w-full origin-left animate-pulse" />
        </div>
        <span className="text-xs text-gray-400 font-light tracking-[0.3em] uppercase">
          CONSTRUYENDO TUS IDEAS
        </span>
      </div>
    </div>
  );
};
