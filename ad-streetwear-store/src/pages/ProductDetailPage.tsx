import React, { useState, useEffect, useMemo } from 'react';
import { ShoppingBag, Heart } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, formatINR } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { EditorialImage } from '../components/EditorialImage';

export const ProductDetailPage: React.FC<{ productId?: string }> = ({ productId }) => {
  const { addToCart, wishlist, toggleWishlist } = useStore();
  const product = useMemo(
    () => PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0],
    [productId]
  );

  usePageMeta({ title: product.name, description: product.description, productSchema: product });

  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.includes('L') ? 'L' : product.sizes[0]
  );

  useEffect(() => {
    setSelectedColor(product.colors[0].name);
    setSelectedSize(product.sizes.includes('L') ? 'L' : product.sizes[0]);
  }, [product]);

  const isWishlisted = wishlist.includes(product.id);

  return (
    <div className="pt-28 pb-24 max-w-[1440px] mx-auto px-4 sm:px-8 page-enter">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-6 aspect-[3/4] border border-white/10 overflow-hidden">
          <EditorialImage src={product.image} alt={product.name} priority={true} aspectClass="w-full h-full" className="editorial-grade" />
        </div>
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono-tech text-xs text-[#C8101E]">{product.gsm}</span>
          <h1 className="font-display font-bold text-4xl sm:text-6xl uppercase text-white">{product.name}</h1>
          <p className="font-mono-tech text-3xl text-white">{formatINR(product.price)}</p>
          <p className="text-[#CCCCCC]">{product.description}</p>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button
                type="button"
                key={c.name}
                onClick={() => setSelectedColor(c.name)}
                className={`px-4 py-2 border font-mono-tech text-xs ${
                  selectedColor === c.name ? 'border-white bg-white/10 text-white' : 'border-white/15 text-[#9A9A9A]'
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-6 gap-2">
            {product.sizes.map((sz) => (
              <button
                type="button"
                key={sz}
                onClick={() => setSelectedSize(sz)}
                className={`min-h-[46px] font-mono-tech text-xs border ${
                  selectedSize === sz ? 'bg-white text-black border-white font-bold' : 'border-white/20 text-white'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => addToCart(product, selectedSize, 1, true, selectedColor)}
              className="flex-1 bg-[#9E0B16] hover:bg-[#C8101E] text-white font-mono-tech text-xs uppercase min-h-[52px] flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>ADD TO BAG</span>
            </button>
            <button
              type="button"
              onClick={() => toggleWishlist(product.id)}
              className="w-14 border border-white/20 flex items-center justify-center"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-[#C8101E] text-[#C8101E]' : 'text-white'}`} />
            </button>
          </div>
          <ul className="pt-6 border-t border-white/10 space-y-2 text-sm text-[#AAAAAA] list-disc pl-5">
            {product.details.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
