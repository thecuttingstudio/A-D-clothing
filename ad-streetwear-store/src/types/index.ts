export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  sku: string;
  name: string;
  price: number;
  category: string;
  gender: 'Men' | 'Women' | 'Unisex';
  tags: string[];
  isNewDrop: boolean;
  isBestSeller: boolean;
  gsm: string;
  fit: string;
  colors: ProductColor[];
  sizes: string[];
  image: string;
  secondaryImage: string;
  description: string;
  details: string[];
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  color: string;
  size: string;
  quantity: number;
}

export type PageName =
  | 'home'
  | 'shop'
  | 'men'
  | 'women'
  | 'new-arrivals'
  | 'product'
  | 'about'
  | 'contact'
  | 'cart'
  | 'wishlist';

export interface RouteState {
  page: PageName;
  params?: {
    productId?: string;
    initialCategory?: string;
  };
}
