import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatINR } from '../data/products';
import { EditorialImage } from './EditorialImage';

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, navigate } = useStore();
  const [size, setSize] = useState('L');
  const [color, setColor] = useState('');

  useEffect(() => {
    if (quickViewProduct) {
      setSize(quickViewProduct.sizes.includes('L') ? 'L' : quickViewProduct.sizes[0]);
      setColor(quickViewProduct.colors[0].name);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setQuickViewProduct(null)}
      className="fixed inset-0 z-[95] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-[#0B0B0B] border border-white/20 max-w-3xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden page-enter"
      >
        <div className="aspect-[3/4] bg-[#111111]">
          <EditorialImage
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            aspectClass="w-full h-full"
            className="editorial-grade"
          />
        </div>
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <span className="font-mono-tech text-[10px] text-[#9A9A9A]">
                {quickViewProduct.gsm}
              </span>
              <button type="button" onClick={() => setQuickViewProduct(null)}>
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <h3 className="font-display text-3xl uppercase text-white mt-2">
              {quickViewProduct.name}
            </h3>
            <p className="font-mono-tech text-xl text-white mt-2">
              {formatINR(quickViewProduct.price)}
            </p>
            <p className="text-sm text-[#AAAAAA] mt-3">{quickViewProduct.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickViewProduct.colors.map((c) => (
                <button
                  type="button"
                  key={c.name}
                  onClick={() => setColor(c.name)}
                  className={`px-3 py-1.5 border font-mono-tech text-xs ${
                    color === c.name ? 'border-white text-white' : 'border-white/20 text-[#9A9A9A]'
                  }`}
                >
                  {c.name}
                </button>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-6 gap-1.5">
              {quickViewProduct.sizes.map((sz) => (
                <button
                  type="button"
                  key={sz}
                  onClick={() => setSize(sz)}
                  className={`min-h-[38px] font-mono-tech text-xs border ${
                    size === sz ? 'bg-white text-black border-white font-bold' : 'border-white/20 text-white'
                  }`}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <button
              type="button"
              onClick={() => {
                addToCart(quickViewProduct, size, 1, true, color);
                setQuickViewProduct(null);
              }}
              className="w-full bg-[#9E0B16] hover:bg-[#C8101E] text-white font-mono-tech text-xs uppercase min-h-[48px]"
            >
              ADD TO BAG — {formatINR(quickViewProduct.price)}
            </button>
            <button
              type="button"
              onClick={() => {
                const id = quickViewProduct.id;
                setQuickViewProduct(null);
                navigate('product', { productId: id });
              }}
              className="w-full border border-white/20 text-white font-mono-tech text-xs uppercase min-h-[44px]"
            >
              VIEW FULL DETAILS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
