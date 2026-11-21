import React from 'react';
import { Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { BrandLogo } from './BrandLogo';

export const Footer: React.FC = () => {
  const { navigate } = useStore();

  return (
    <footer className="bg-[#030303] border-t border-white/10 pt-20 pb-12">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16 border-b border-white/10">
          <div className="space-y-4">
            <BrandLogo size="lg" onClick={() => navigate('home')} />
            <p className="font-mono-tech text-xs tracking-[0.25em] text-[#C8101E] uppercase">
              WEAR YOUR IDENTITY.
            </p>
            <p className="text-sm text-[#9A9A9A]">
              Luxury architectural streetwear engineered in heavyweight fabrics.
            </p>
          </div>
          <div className="space-y-2 font-mono-tech text-xs text-[#9A9A9A]">
            <h3 className="text-white tracking-[0.2em] uppercase mb-3">NAVIGATION</h3>
            <button type="button" onClick={() => navigate('shop')} className="block hover:text-white">SHOP ALL</button>
            <button type="button" onClick={() => navigate('men')} className="block hover:text-white">MEN&apos;S COLLECTION</button>
            <button type="button" onClick={() => navigate('women')} className="block hover:text-white">WOMEN&apos;S COLLECTION</button>
            <button type="button" onClick={() => navigate('new-arrivals')} className="block hover:text-white">NEW ARRIVALS</button>
            <button type="button" onClick={() => navigate('about')} className="block hover:text-white">ABOUT A&amp;D</button>
            <button type="button" onClick={() => navigate('contact')} className="block hover:text-white">CONTACT</button>
          </div>
          <div className="space-y-4 font-mono-tech text-xs text-[#9A9A9A]">
            <h3 className="text-white tracking-[0.2em] uppercase">PROMISE</h3>
            <div className="flex items-center gap-2"><Truck className="w-4 h-4 text-[#C8101E]" /><span>EXPRESS PAN-INDIA DISPATCH</span></div>
            <div className="flex items-center gap-2"><RotateCcw className="w-4 h-4 text-[#C8101E]" /><span>7-DAY EASY SIZE EXCHANGE</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-[#C8101E]" /><span>100% AUTHENTIC STUDIO DROP</span></div>
          </div>
        </div>
        <div className="pt-8 flex flex-col sm:flex-row justify-between font-mono-tech text-[11px] text-[#777777]">
          <span>© {new Date().getFullYear()} A&amp;D APPAREL STUDIO. ALL RIGHTS RESERVED.</span>
          <span>PRICES IN INR (₹) // BUILT DIFFERENT. WORN DIFFERENT.</span>
        </div>
      </div>
    </footer>
  );
};
