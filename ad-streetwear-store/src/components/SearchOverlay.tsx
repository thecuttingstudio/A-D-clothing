import React, { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, formatINR } from '../data/products';
import { EditorialImage } from './EditorialImage';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate } = useStore();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return PRODUCTS.slice(0, 4);
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q))
    );
  }, [query]);

  if (!isSearchOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => setIsSearchOpen(false)}
      className="fixed inset-0 z-[100] bg-black/92 backdrop-blur-md p-4 sm:p-10 overflow-y-auto"
    >
      <div onClick={(e) => e.stopPropagation()} className="max-w-4xl mx-auto pt-6 page-enter">
        <div className="flex items-center justify-between border-b border-white/25 pb-4">
          <div className="flex items-center gap-4 flex-1">
            <Search className="w-6 h-6 text-[#C8101E]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="SEARCH ARCHIVE..."
              className="w-full bg-transparent text-xl sm:text-2xl font-display uppercase text-white focus:outline-none"
            />
          </div>
          <button type="button" onClick={() => setIsSearchOpen(false)}>
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {results.map((item) => (
            <button
              type="button"
              key={item.id}
              onClick={() => {
                setIsSearchOpen(false);
                navigate('product', { productId: item.id });
              }}
              className="border border-white/10 bg-[#0A0A0A] text-left"
            >
              <div className="aspect-[3/4]">
                <EditorialImage src={item.image} alt={item.name} aspectClass="w-full h-full" />
              </div>
              <div className="p-3">
                <h4 className="font-display text-sm uppercase text-white truncate">{item.name}</h4>
                <span className="font-mono-tech text-xs text-[#CCCCCC]">{formatINR(item.price)}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
