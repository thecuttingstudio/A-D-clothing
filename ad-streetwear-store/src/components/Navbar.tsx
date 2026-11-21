import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PageName } from '../types';
import { BrandLogo } from './BrandLogo';

export const Navbar: React.FC = () => {
  const { route, navigate, cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isTransparent = route.page === 'home' && !scrolled && !mobileMenuOpen;

  const navItems: { label: string; page: PageName }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'SHOP', page: 'shop' },
    { label: 'MEN', page: 'men' },
    { label: 'WOMEN', page: 'women' },
    { label: 'NEW ARRIVALS', page: 'new-arrivals' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          isTransparent
            ? 'bg-transparent border-b border-white/10 py-4'
            : 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
              className="lg:hidden w-11 h-11 flex items-center justify-center text-white hover:text-[#C8101E]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
            <BrandLogo size="md" onClick={() => navigate('home')} />
          </div>

          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
            {navItems.map((item) => {
              const active = route.page === item.page;
              return (
                <button
                  type="button"
                  key={item.label}
                  onClick={() => navigate(item.page)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative font-mono-tech text-xs tracking-[0.18em] uppercase py-2 transition-colors ${
                    active ? 'text-white' : 'text-white/75 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] bg-[#9E0B16] transition-all duration-300 ${
                      active ? 'w-full' : 'w-0'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 sm:gap-3">
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalog"
              className="min-w-[44px] min-h-[44px] px-2 text-white/85 hover:text-white flex items-center justify-center gap-2"
            >
              <Search className="w-5 h-5" />
              <span className="hidden xl:inline font-mono-tech text-[11px] tracking-[0.15em] text-[#9A9A9A]">
                SEARCH
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate('wishlist')}
              aria-label="Wishlist"
              className="relative w-11 h-11 flex items-center justify-center text-white/85 hover:text-white"
            >
              <Heart className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1.5 right-1 min-w-[16px] h-[16px] px-1 bg-[#9E0B16] text-white font-mono-tech text-[9px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className="relative min-w-[44px] min-h-[44px] px-2 text-white hover:text-[#C8101E] flex items-center justify-center gap-1.5"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="font-mono-tech text-xs tracking-wider">({cartCount})</span>
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 bg-[#050505] pt-24 pb-8 px-6 flex flex-col justify-between lg:hidden page-enter overflow-y-auto h-[100dvh]"
        >
          <nav className="space-y-2">
            {(
              [
                { label: 'HOME', page: 'home' },
                { label: 'SHOP ALL', page: 'shop' },
                { label: "MEN'S COLLECTION", page: 'men' },
                { label: "WOMEN'S COLLECTION", page: 'women' },
                { label: 'NEW ARRIVALS', page: 'new-arrivals' },
                { label: 'ABOUT A&D', page: 'about' },
                { label: 'CONTACT STUDIO', page: 'contact' },
                { label: `WISHLIST (${wishlist.length})`, page: 'wishlist' }
              ] as { label: string; page: PageName }[]
            ).map((link, idx) => (
              <button
                type="button"
                key={link.label}
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate(link.page);
                }}
                className="w-full text-left font-display text-3xl uppercase text-white hover:text-[#C8101E] flex items-center justify-between min-h-[48px] border-b border-white/5"
              >
                <span>{link.label}</span>
                <span className="font-mono-tech text-xs text-[#777777]">0{idx + 1}</span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};
