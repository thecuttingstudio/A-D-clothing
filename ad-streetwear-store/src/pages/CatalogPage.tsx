import React, { useState, useMemo, useEffect } from 'react';
import { PRODUCTS, formatINR } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { usePageMeta } from '../hooks/usePageMeta';

interface CatalogPageProps {
  mode?: 'shop' | 'men' | 'women' | 'new-arrivals';
  initialCategory?: string;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({ mode = 'shop', initialCategory = 'All' }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedSize, setSelectedSize] = useState('ALL');
  const [maxPrice, setMaxPrice] = useState(5000);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    if (mode === 'men') setSelectedCategory('Men');
    else if (mode === 'women') setSelectedCategory('Women');
    else if (mode === 'new-arrivals') setSelectedCategory('New Arrivals');
    else setSelectedCategory(initialCategory || 'All');
  }, [mode, initialCategory]);

  usePageMeta({ title: mode.toUpperCase(), urlPath: `/${mode}` });

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];
    if (selectedCategory === 'New Arrivals') list = list.filter((p) => p.isNewDrop);
    else if (selectedCategory !== 'All') {
      list = list.filter(
        (p) =>
          p.category.toLowerCase() === selectedCategory.toLowerCase() ||
          p.tags.some((t) => t.toLowerCase() === selectedCategory.toLowerCase())
      );
    }
    if (selectedSize !== 'ALL') list = list.filter((p) => p.sizes.includes(selectedSize));
    list = list.filter((p) => p.price <= maxPrice);
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    return list;
  }, [selectedCategory, selectedSize, maxPrice, sortBy]);

  return (
    <div className="pt-28 pb-24 max-w-[1440px] mx-auto px-4 sm:px-8 page-enter">
      <h1 className="font-display font-bold text-5xl sm:text-7xl uppercase text-white mb-8">
        {mode.replace('-', ' ').toUpperCase()}
      </h1>
      <div className="bg-[#0A0A0A] border border-white/10 p-4 mb-10 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {['All', 'Tees', 'Hoodies & Sweats', 'Bottoms', 'Outerwear', 'Accessories'].map((cat) => (
            <button
              type="button"
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-2 font-mono-tech text-xs uppercase border ${
                selectedCategory === cat ? 'bg-white text-black border-white' : 'border-white/15 text-white/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono-tech text-xs text-[#9A9A9A]">UNDER {formatINR(maxPrice)}</span>
          <input
            type="range"
            min={999}
            max={5000}
            step={250}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-[#050505] border border-white/15 px-3 py-2 font-mono-tech text-xs text-white"
          >
            <option value="featured">FEATURED</option>
            <option value="price-asc">PRICE: LOW TO HIGH</option>
            <option value="price-desc">PRICE: HIGH TO LOW</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
};
