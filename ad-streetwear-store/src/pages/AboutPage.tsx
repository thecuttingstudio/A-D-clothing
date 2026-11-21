import React from 'react';
import { useStore } from '../context/StoreContext';
import { CAMPAIGN_IMAGE } from '../data/products';
import { EditorialImage } from '../components/EditorialImage';
import { usePageMeta } from '../hooks/usePageMeta';

export const AboutPage: React.FC = () => {
  const { navigate } = useStore();
  usePageMeta({ title: 'About A&D', urlPath: '/about' });

  return (
    <div className="pt-28 pb-24 max-w-[1440px] mx-auto px-4 sm:px-8 page-enter">
      <h1 className="font-display font-bold text-5xl sm:text-7xl uppercase text-white max-w-4xl">
        WE DON&apos;T FOLLOW THE CULTURE. WE CREATE OUR OWN.
      </h1>
      <div className="mt-10 aspect-[16/9] max-h-[560px] border border-white/15 overflow-hidden">
        <EditorialImage src={CAMPAIGN_IMAGE} alt="A&D Manifesto" priority={true} aspectClass="w-full h-full" />
      </div>
      <p className="mt-10 text-lg text-[#CCCCCC] max-w-3xl leading-relaxed">
        A&amp;D was built for people who don&apos;t need permission to stand out. Every piece
        represents confidence, individuality, and freedom.
      </p>
      <button
        type="button"
        onClick={() => navigate('shop')}
        className="mt-8 bg-[#9E0B16] text-white font-mono-tech text-xs uppercase px-8 min-h-[50px]"
      >
        EXPLORE COLLECTION
      </button>
    </div>
  );
};
