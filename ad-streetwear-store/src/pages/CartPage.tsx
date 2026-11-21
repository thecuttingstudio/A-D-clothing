import React from 'react';
import { useStore } from '../context/StoreContext';
import { CartViewContent } from '../components/CartViewContent';
import { usePageMeta } from '../hooks/usePageMeta';

export const CartPage: React.FC = () => {
  const { cartCount } = useStore();
  usePageMeta({ title: `Shopping Bag (${cartCount})`, urlPath: '/cart' });

  return (
    <div className="pt-28 pb-24 max-w-4xl mx-auto px-4 sm:px-8 page-enter">
      <h1 className="font-display font-bold text-5xl uppercase text-white mb-8">
        SHOPPING BAG ({cartCount})
      </h1>
      <div className="border border-white/15 bg-[#080808]">
        <CartViewContent isDrawer={false} />
      </div>
    </div>
  );
};
