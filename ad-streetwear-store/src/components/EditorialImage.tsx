import React, { useState, useEffect } from 'react';

const FALLBACK_EDITORIAL_IMAGE =
  'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=900&q=80';

interface EditorialImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  aspectClass?: string;
}

export const EditorialImage: React.FC<EditorialImageProps> = ({
  src,
  alt,
  className = '',
  priority = false,
  aspectClass = ''
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setImgSrc(src);
    setLoaded(false);
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#111111] ${aspectClass}`}>
      {!loaded && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#141414] via-[#0B0B0B] to-[#171717]"
        />
      )}
      <img
        src={imgSrc || FALLBACK_EDITORIAL_IMAGE}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          if (imgSrc !== FALLBACK_EDITORIAL_IMAGE) {
            setImgSrc(FALLBACK_EDITORIAL_IMAGE);
          }
          setLoaded(true);
        }}
        className={`w-full h-full object-cover ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
      />
    </div>
  );
};
