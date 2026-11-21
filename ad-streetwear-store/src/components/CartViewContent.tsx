import React, { useState } from 'react';
import { ShoppingBag, Check, Trash2, Minus, Plus, Lock } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatINR } from '../data/products';
import { EditorialImage } from './EditorialImage';

interface CartViewContentProps {
  isDrawer?: boolean;
  onClose?: () => void;
}

export const CartViewContent: React.FC<CartViewContentProps> = ({
  isDrawer = false,
  onClose
}) => {
  const {
    cart,
    updateCartQty,
    removeFromCart,
    clearCart,
    cartSubtotal,
    navigate,
    showToast
  } = useStore();

  const [promoCode, setPromoCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const freeShippingThreshold = 2999;
  const remainingForFreeShip = Math.max(0, freeShippingThreshold - cartSubtotal);
  const progressPct = Math.min(100, (cartSubtotal / freeShippingThreshold) * 100);
  const discountAmount = discountApplied ? Math.round(cartSubtotal * 0.1) : 0;
  const shippingFee = cartSubtotal === 0 || cartSubtotal >= freeShippingThreshold ? 0 : 149;
  const finalTotal = Math.max(0, cartSubtotal - discountAmount + shippingFee);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'AD10') {
      setDiscountApplied(true);
      showToast('PROMO CODE AD10 APPLIED — 10% OFF', true);
    } else {
      showToast('TRY CODE "AD10" FOR 10% PRIVILEGE DISCOUNT');
    }
  };

  if (checkoutSuccess) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center min-h-[420px]">
        <div className="w-14 h-14 bg-[#9E0B16] text-white flex items-center justify-center mb-6">
          <Check className="w-7 h-7" />
        </div>
        <h3 className="font-display text-3xl uppercase text-white">
          WELCOME TO THE INNER CIRCLE.
        </h3>
        <button
          type="button"
          onClick={() => {
            setCheckoutSuccess(false);
            if (onClose) onClose();
            navigate('shop');
          }}
          className="mt-8 bg-white text-black font-mono-tech text-xs font-semibold tracking-[0.2em] uppercase px-8 min-h-[48px]"
        >
          CONTINUE EXPLORING
        </button>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center flex flex-col items-center justify-center min-h-[380px]">
        <ShoppingBag className="w-10 h-10 text-[#666666] mb-4" />
        <h3 className="font-display text-2xl uppercase text-white">YOUR BAG IS EMPTY</h3>
        <button
          type="button"
          onClick={() => {
            if (onClose) onClose();
            navigate('shop');
          }}
          className="mt-6 bg-[#9E0B16] hover:bg-[#C8101E] text-white font-mono-tech text-xs font-semibold tracking-[0.2em] uppercase px-7 min-h-[48px]"
        >
          EXPLORE COLLECTION
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="bg-[#0E0E0E] border-b border-white/10 px-5 py-3.5">
        <div className="flex items-center justify-between font-mono-tech text-[11px] mb-2">
          <span>
            {remainingForFreeShip === 0
              ? 'COMPLIMENTARY EXPRESS SHIPPING UNLOCKED'
              : `ADD ${formatINR(remainingForFreeShip)} FOR FREE SHIPPING`}
          </span>
          <span>{Math.round(progressPct)}%</span>
        </div>
        <div className="w-full h-1 bg-white/10">
          <div style={{ width: `${progressPct}%` }} className="h-full bg-[#9E0B16]" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto divide-y divide-white/10 px-5">
        {cart.map((item) => (
          <div key={`${item.id}-${item.color}-${item.size}`} className="py-5 flex gap-4">
            <div className="w-20 h-28 shrink-0 border border-white/10 overflow-hidden">
              <EditorialImage src={item.image} alt={item.name} aspectClass="w-full h-full" />
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h4 className="font-display text-base uppercase text-white">{item.name}</h4>
                  <p className="font-mono-tech text-[11px] text-[#9A9A9A] mt-1">
                    {item.color} // {item.size}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => removeFromCart(item.id, item.size, item.color)}
                  className="text-[#888888] hover:text-[#C8101E]"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <div className="flex items-center border border-white/15 bg-[#050505]">
                  <button
                    type="button"
                    onClick={() => updateCartQty(item.id, item.size, item.color, -1)}
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="px-2.5 font-mono-tech text-xs">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateCartQty(item.id, item.size, item.color, 1)}
                    className="w-8 h-8 flex items-center justify-center"
                  >
                    <Plus className="w-3 h-3" />
                  </button>
                </div>
                <span className="font-mono-tech text-sm">
                  {formatINR(item.price * item.quantity)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/15 bg-[#080808] p-5 space-y-4">
        <form onSubmit={handleApplyPromo} className="flex gap-2">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="PROMO CODE (TRY AD10)"
            className="flex-1 bg-[#050505] border border-white/15 px-3.5 min-h-[44px] font-mono-tech text-xs text-white uppercase"
          />
          <button
            type="submit"
            className="border border-white/25 text-white font-mono-tech text-xs px-4 min-h-[44px]"
          >
            APPLY
          </button>
        </form>
        <div className="flex justify-between font-mono-tech text-sm font-bold text-white">
          <span>TOTAL (INR)</span>
          <span>{formatINR(finalTotal)}</span>
        </div>
        <button
          type="button"
          onClick={() => {
            setCheckoutSuccess(true);
            setTimeout(() => clearCart(), 350);
          }}
          className="w-full bg-[#9E0B16] hover:bg-[#C8101E] text-white font-mono-tech text-xs font-semibold tracking-[0.22em] uppercase min-h-[50px] flex items-center justify-center gap-2"
        >
          <Lock className="w-3.5 h-3.5" />
          <span>PROCEED TO CHECKOUT</span>
        </button>
        {isDrawer && (
          <button
            type="button"
            onClick={() => {
              if (onClose) onClose();
              navigate('cart');
            }}
            className="w-full border border-white/15 text-white/85 font-mono-tech text-[11px] uppercase min-h-[44px]"
          >
            VIEW FULL BAG PAGE
          </button>
        )}
      </div>
    </div>
  );
};
