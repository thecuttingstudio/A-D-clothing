import React from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CartViewContent } from './CartViewContent';

export const CartDrawer: React.FC = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useStore();
  if (!isCartOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setIsCartOpen(false)}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex justify-end"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md bg-[#070707] border-l border-white/15 h-[100dvh] flex flex-col shadow-2xl page-enter"
      >
        <div className="px-5 py-3.5 border-b border-white/15 flex items-center justify-between bg-[#050505]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-4 h-4 text-[#C8101E]" />
            <h2 className="font-display text-xl uppercase text-white">
              SHOPPING BAG ({cartCount})
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="w-10 h-10 flex items-center justify-center text-white/75 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="flex-1 overflow-hidden">
          <CartViewContent isDrawer={true} onClose={() => setIsCartOpen(false)} />
        </div>
      </div>
    </div>
  );
};
