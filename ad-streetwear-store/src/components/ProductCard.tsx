import React, { useState } from 'react';
import { Heart, Eye, Plus } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { formatINR } from '../data/products';
import { EditorialImage } from './EditorialImage';

interface ProductCardProps {
  product: Product;
  badgeOverride?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, badgeOverride }) => {
  const { navigate, addToCart, wishlist, toggleWishlist, setQuickViewProduct } = useStore();
  const [selectedSize, setSelectedSize] = useState(
    product.sizes.includes('L') ? 'L' : product.sizes[0]
  );
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const isWishlisted = wishlist.includes(product.id);

  return (
    <article className="group relative bg-[#0A0A0A] border border-white/10 hover:border-white/30 transition-colors duration-300 flex flex-col">
      <div
        onClick={() => navigate('product', { productId: product.id })}
        className="relative aspect-[3/4] w-full overflow-hidden bg-[#111111] cursor-pointer"
      >
        <EditorialImage
          src={product.image}
          alt={`${product.name} in ${selectedColor}`}
          aspectClass="w-full h-full"
          className="editorial-grade transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-0"
        />

        <img
          src={product.secondaryImage}
          alt={`${product.name} alternate editorial angle`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover editorial-grade opacity-0 scale-105 transition-all duration-700 ease-out group-hover:opacity-100 group-hover:scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/20 pointer-events-none" />

        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {(badgeOverride || product.isNewDrop) && (
            <span className="bg-[#9E0B16] text-white font-mono-tech text-[10px] font-semibold tracking-[0.18em] px-2.5 py-1 uppercase">
              {badgeOverride || 'NEW DROP'}
            </span>
          )}
          <span className="bg-black/80 backdrop-blur-sm border border-white/10 text-[#CCCCCC] font-mono-tech text-[9px] tracking-[0.14em] px-2 py-0.5 uppercase">
            {product.category}
          </span>
        </div>

        <div
          className="absolute top-2.5 right-2.5 flex flex-col gap-1.5 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => toggleWishlist(product.id)}
            aria-label={
              isWishlisted
                ? `Remove ${product.name} from wishlist`
                : `Save ${product.name} to wishlist`
            }
            aria-pressed={isWishlisted}
            className={`w-11 h-11 flex items-center justify-center border transition-all duration-200 ${
              isWishlisted
                ? 'bg-[#9E0B16] border-[#9E0B16] text-white'
                : 'bg-black/80 border-white/15 text-white hover:border-white'
            }`}
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
          <button
            type="button"
            onClick={() => setQuickViewProduct(product)}
            aria-label={`Quick preview ${product.name}`}
            className="w-11 h-11 flex items-center justify-center bg-black/80 border border-white/15 text-white hover:bg-white hover:text-black transition-all duration-200"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between bg-[#080808]">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display text-lg uppercase tracking-wide leading-tight">
              <button
                type="button"
                onClick={() => navigate('product', { productId: product.id })}
                className="text-left text-white hover:text-[#C8101E] transition-colors"
              >
                {product.name}
              </button>
            </h3>
            <span className="font-mono-tech text-sm font-semibold text-white shrink-0">
              {formatINR(product.price)}
            </span>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2">
            <span className="font-mono-tech text-[10px] text-[#9A9A9A] tracking-wider uppercase truncate">
              {selectedColor}
            </span>
            <div className="flex items-center gap-1.5" role="radiogroup" aria-label="Color options">
              {product.colors.map((c) => {
                const active = selectedColor === c.name;
                return (
                  <button
                    type="button"
                    key={c.name}
                    onClick={() => setSelectedColor(c.name)}
                    aria-label={`Select color ${c.name}`}
                    aria-checked={active}
                    role="radio"
                    title={c.name}
                    style={{ backgroundColor: c.hex }}
                    className={`w-5 h-5 border transition-transform ${
                      active
                        ? 'border-white scale-110 ring-1 ring-[#C8101E]'
                        : 'border-white/30 opacity-80 hover:opacity-100'
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1 overflow-x-auto">
            {product.sizes.map((sz) => (
              <button
                type="button"
                key={sz}
                onClick={() => setSelectedSize(sz)}
                aria-label={`Select size ${sz}`}
                className={`min-w-[26px] min-h-[28px] px-1.5 font-mono-tech text-[10px] transition-colors ${
                  selectedSize === sz
                    ? 'text-white bg-white/15 border border-white/40 font-semibold'
                    : 'text-[#888888] hover:text-white'
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => addToCart(product, selectedSize, 1, true, selectedColor)}
            aria-label={`Add ${product.name} to bag`}
            className="shrink-0 bg-white text-black hover:bg-[#9E0B16] hover:text-white font-mono-tech text-[11px] font-semibold tracking-wider uppercase px-3.5 min-h-[38px] transition-colors duration-200 flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>ADD</span>
          </button>
        </div>
      </div>
    </article>
  );
};
