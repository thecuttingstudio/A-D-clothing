import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ size = 'md', onClick }) => {
  const sizes = {
    sm: 'text-2xl',
    md: 'text-3xl',
    lg: 'text-5xl md:text-6xl'
  };

  return (
    <button
      type="button"
      onClick={onClick}
      className={`font-display font-bold tracking-tighter text-white select-none inline-flex items-center group min-h-[44px] ${sizes[size]}`}
      aria-label="A&D Luxury Streetwear Home"
    >
      <span>A</span>
      <span className="text-[#C8101E] mx-[1px] transition-transform duration-300 group-hover:scale-110">
        &amp;
      </span>
      <span>D</span>
    </button>
  );
};
