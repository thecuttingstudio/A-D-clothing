import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, COLLECTIONS_META, INSTAGRAM_POSTS, HERO_IMAGE, CAMPAIGN_IMAGE } from '../data/products';
import { usePageMeta } from '../hooks/usePageMeta';
import { EditorialImage } from '../components/EditorialImage';
import { ProductCard } from '../components/ProductCard';
import { Reveal } from '../components/Reveal';

export const HomePage: React.FC = () => {
  const { navigate } = useStore();
  usePageMeta({ title: 'Luxury Streetwear & Urban Apparel', image: HERO_IMAGE, urlPath: '/' });

  const latestDrop = PRODUCTS.filter((p) => p.isNewDrop).slice(0, 4);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller).slice(0, 4);

  return (
    <div className="page-enter">
      <section className="relative min-h-screen w-full overflow-hidden bg-[#050505] flex items-center">
        <div className="absolute inset-0">
          <EditorialImage
            src={HERO_IMAGE}
            alt="A&D Hero Streetwear Campaign"
            priority={true}
            aspectClass="w-full h-full"
            className="filter contrast-125 brightness-[0.42] saturate-75"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 w-full pt-28 pb-16">
          <span className="inline-block border border-white/20 bg-black/60 px-3.5 py-1.5 font-mono-tech text-[11px] tracking-[0.24em] text-white uppercase mb-6">
            A&amp;D // DROP 04 — WEAR YOUR IDENTITY.
          </span>
          <h1 className="font-display font-bold uppercase text-white text-5xl sm:text-7xl lg:text-8xl leading-[0.92]">
            BUILT DIFFERENT.
            <br />
            <span className="text-[#C8101E]">WORN DIFFERENT.</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-[#D0D0D0] max-w-xl">
            Streetwear isn&apos;t a trend. It&apos;s an identity. Heavyweight silhouettes starting at ₹999.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => navigate('shop')}
              className="bg-[#9E0B16] hover:bg-[#C8101E] text-white font-mono-tech text-xs tracking-[0.22em] uppercase px-8 min-h-[52px] flex items-center gap-2"
            >
              <span>SHOP COLLECTION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => navigate('about')}
              className="bg-black/45 hover:bg-white text-white hover:text-black font-mono-tech text-xs tracking-[0.22em] uppercase px-8 min-h-[52px] border border-white/30"
            >
              EXPLORE A&amp;D
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-20">
        <Reveal>
          <div className="flex items-end justify-between mb-12">
            <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase text-white">LATEST DROP</h2>
            <button type="button" onClick={() => navigate('new-arrivals')} className="font-mono-tech text-xs text-white underline flex items-center gap-2">
              <span>VIEW ALL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestDrop.map((p) => (
            <ProductCard key={p.id} product={p} badgeOverride="NEW DROP" />
          ))}
        </div>
      </section>

      <section className="bg-[#030303] border-y border-white/10 py-28 text-center px-4">
        <div className="font-display font-bold text-5xl sm:text-8xl uppercase leading-[0.92] text-white">
          NO RULES.
          <br />
          <span className="text-white/45">NO LIMITS.</span>
          <br />
          JUST <span className="text-[#C8101E]">IDENTITY.</span>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-20">
        <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase text-white mb-12">COLLECTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {COLLECTIONS_META.map((col) => (
            <div
              key={col.id}
              onClick={() => navigate(col.id === 'Men' ? 'men' : col.id === 'Women' ? 'women' : 'shop', { initialCategory: col.id })}
              className="group relative aspect-[16/10] overflow-hidden border border-white/10 cursor-pointer"
            >
              <EditorialImage src={col.image} alt={col.title} aspectClass="w-full h-full" className="editorial-grade group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-display font-bold text-4xl uppercase text-white">{col.title}</h3>
                <p className="font-mono-tech text-xs text-white/80 mt-1">{col.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#080808] border-y border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7 min-h-[420px]">
            <EditorialImage src={CAMPAIGN_IMAGE} alt="A&D Campaign" aspectClass="w-full h-full" className="editorial-grade" />
          </div>
          <div className="lg:col-span-5 p-10 lg:p-16 flex flex-col justify-center">
            <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase text-white">NOT MADE TO FIT IN.</h2>
            <p className="mt-4 text-[#CCCCCC]">Made for those who never follow the crowd.</p>
            <button
              type="button"
              onClick={() => navigate('shop')}
              className="mt-8 self-start bg-white text-black font-mono-tech text-xs uppercase px-8 min-h-[48px]"
            >
              SHOP ARCHIVE
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-20">
        <h2 className="font-display font-bold text-4xl sm:text-6xl uppercase text-white mb-12">BEST SELLERS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 sm:px-8 pb-24">
        <h2 className="font-display font-bold text-3xl sm:text-5xl uppercase text-white mb-8">@AD.STREETWEAR</h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <button
              type="button"
              key={post.id}
              onClick={() => navigate('product', { productId: post.productId })}
              className="aspect-[3/4] overflow-hidden border border-white/10"
            >
              <EditorialImage src={post.image} alt={post.caption} aspectClass="w-full h-full" className="editorial-grade" />
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
