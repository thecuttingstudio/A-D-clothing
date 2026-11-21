import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { CartItem, PageName, Product, RouteState } from '../types';
import { PRODUCTS } from '../data/products';

interface StoreContextValue {
  route: RouteState;
  navigate: (page: PageName, params?: RouteState['params']) => void;
  cart: CartItem[];
  addToCart: (
    product: Product,
    size?: string,
    quantity?: number,
    openDrawer?: boolean,
    colorName?: string | null
  ) => void;
  updateCartQty: (id: string, size: string, color: string, delta: number) => void;
  removeFromCart: (id: string, size: string, color: string) => void;
  clearCart: () => void;
  cartCount: number;
  cartSubtotal: number;
  wishlist: string[];
  toggleWishlist: (productId: string) => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isSearchOpen: boolean;
  setIsSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  quickViewProduct: Product | null;
  setQuickViewProduct: React.Dispatch<React.SetStateAction<Product | null>>;
  policyModal: string | null;
  setPolicyModal: React.Dispatch<React.SetStateAction<string | null>>;
  showToast: (message: string, accent?: boolean) => void;
}

const StoreContext = createContext<StoreContextValue | null>(null);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [route, setRoute] = useState<RouteState>({ page: 'home', params: {} });

  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('ad_streetwear_cart_v2');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [wishlist, setWishlist] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('ad_streetwear_wishlist_v2');
      return saved
        ? JSON.parse(saved)
        : ['ad-heavyweight-480gsm-hoodie', 'ad-crimson-emblem-graphic-tee'];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [policyModal, setPolicyModal] = useState<string | null>(null);
  const [toast, setToast] = useState<{ message: string; accent: boolean; id: number } | null>(
    null
  );

  useEffect(() => {
    try {
      localStorage.setItem('ad_streetwear_cart_v2', JSON.stringify(cart));
    } catch {
      // Ignore storage quota errors
    }
  }, [cart]);

  useEffect(() => {
    try {
      localStorage.setItem('ad_streetwear_wishlist_v2', JSON.stringify(wishlist));
    } catch {
      // Ignore storage quota errors
    }
  }, [wishlist]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsCartOpen(false);
        setIsSearchOpen(false);
        setQuickViewProduct(null);
        setPolicyModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const showToast = (message: string, accent = false) => {
    setToast({ message, accent, id: Date.now() });
  };

  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  const navigate = (page: PageName, params: RouteState['params'] = {}) => {
    setRoute({ page, params });
    setIsCartOpen(false);
    setIsSearchOpen(false);
    setQuickViewProduct(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (
    product: Product,
    size = 'L',
    quantity = 1,
    openDrawer = true,
    colorName: string | null = null
  ) => {
    const selectedSize = product.sizes.includes(size) ? size : product.sizes[0];
    const selectedColor = colorName || product.colors[0].name;

    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          item.size === selectedSize &&
          item.color === selectedColor
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity
        };
        return updated;
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          color: selectedColor,
          size: selectedSize,
          quantity
        }
      ];
    });
    showToast(
      `ADDED TO BAG — ${product.name.toUpperCase()} (${selectedColor.toUpperCase()} / ${selectedSize})`,
      true
    );
    if (openDrawer) setIsCartOpen(true);
  };

  const updateCartQty = (id: string, size: string, color: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === id && item.size === size && item.color === color) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const removeFromCart = (id: string, size: string, color: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.id === id && item.size === size && item.color === color)
      )
    );
    showToast('ITEM REMOVED FROM BAG');
  };

  const clearCart = () => setCart([]);

  const toggleWishlist = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId);
    setWishlist((prev) => {
      const exists = prev.includes(productId);
      if (exists) {
        showToast(`REMOVED FROM SAVED — ${product?.name.toUpperCase() || ''}`);
        return prev.filter((id) => id !== productId);
      }
      showToast(`SAVED TO WISHLIST — ${product?.name.toUpperCase() || ''}`, true);
      return [...prev, productId];
    });
  };

  const cartCount = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const cartSubtotal = useMemo(
    () => cart.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [cart]
  );

  return (
    <StoreContext.Provider
      value={{
        route,
        navigate,
        cart,
        addToCart,
        updateCartQty,
        removeFromCart,
        clearCart,
        cartCount,
        cartSubtotal,
        wishlist,
        toggleWishlist,
        isCartOpen,
        setIsCartOpen,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        policyModal,
        setPolicyModal,
        showToast
      }}
    >
      {children}
      {toast && (
        <div
          key={toast.id}
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-[110] bg-[#0B0B0B] border border-white/25 px-5 py-3.5 shadow-2xl flex items-center gap-3 page-enter max-w-[92vw]"
        >
          <span
            className={`w-2 h-2 shrink-0 ${toast.accent ? 'bg-[#C8101E]' : 'bg-white'}`}
          />
          <span className="font-mono-tech text-xs tracking-wider text-white uppercase">
            {toast.message}
          </span>
        </div>
      )}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextValue => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used inside StoreProvider');
  return ctx;
};
