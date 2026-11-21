import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { QuickViewModal } from './components/QuickViewModal';
import { SearchOverlay } from './components/SearchOverlay';
import { HomePage } from './pages/HomePage';
import { CatalogPage } from './pages/CatalogPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { CartPage } from './pages/CartPage';
import { WishlistPage } from './pages/WishlistPage';

const MainRouter: React.FC = () => {
  const { route } = useStore();

  switch (route.page) {
    case 'home':
      return <HomePage />;
    case 'shop':
      return (
        <CatalogPage
          mode="shop"
          initialCategory={route.params?.initialCategory || 'All'}
        />
      );
    case 'men':
      return <CatalogPage mode="men" />;
    case 'women':
      return <CatalogPage mode="women" />;
    case 'new-arrivals':
      return <CatalogPage mode="new-arrivals" />;
    case 'product':
      return <ProductDetailPage productId={route.params?.productId} />;
    case 'about':
      return <AboutPage />;
    case 'contact':
      return <ContactPage />;
    case 'cart':
      return <CartPage />;
    case 'wishlist':
      return <WishlistPage />;
    default:
      return <HomePage />;
  }
};

export default function App() {
  return (
    <StoreProvider>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="film-grain" aria-hidden="true" />
      <div className="min-h-screen flex flex-col bg-[#050505] text-[#F5F5F5] selection:bg-[#9E0B16] selection:text-white">
        <Navbar />
        <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          <MainRouter />
        </main>
        <Footer />
        <CartDrawer />
        <QuickViewModal />
        <SearchOverlay />
      </div>
    </StoreProvider>
  );
}
