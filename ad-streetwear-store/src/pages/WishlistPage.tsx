import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useStore();
  const saved = PRODUCTS.filter((p) => wishlist.includes(p.id));
  usePageMeta({ title: 'Saved Wishlist', urlPath: '/wishlist' });

  return (
    <div className="pt-28 pb-24 max-w-[1440px] mx-auto px-4 sm:px-8 page-enter">
      <h1 className="font-display font-bold text-5xl uppercase text-white mb-8">
        WISHLIST ({saved.length})
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {saved.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
