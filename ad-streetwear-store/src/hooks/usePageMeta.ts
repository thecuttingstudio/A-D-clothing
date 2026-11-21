import { useEffect } from 'react';
import { Product } from '../types';
import { HERO_IMAGE } from '../data/products';

interface PageMetaOptions {
  title?: string;
  description?: string;
  image?: string;
  urlPath?: string;
  productSchema?: Product | null;
}

export const usePageMeta = ({
  title,
  description,
  image,
  urlPath = '/',
  productSchema = null
}: PageMetaOptions) => {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | A&D — WEAR YOUR IDENTITY.`
      : 'A&D | Luxury Streetwear & Urban Apparel — WEAR YOUR IDENTITY.';
    const metaDesc =
      description ||
      'A&D is a luxury streetwear label crafting heavyweight oversized tees, 480 GSM hoodies, cargo bottoms, and outerwear.';
    const metaImg = image || HERO_IMAGE;

    document.title = fullTitle;

    const upsertMeta = (attrName: string, attrValue: string, content: string) => {
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    upsertMeta('name', 'description', metaDesc);
    upsertMeta('property', 'og:site_name', 'A&D');
    upsertMeta('property', 'og:title', fullTitle);
    upsertMeta('property', 'og:description', metaDesc);
    upsertMeta('property', 'og:type', productSchema ? 'product' : 'website');
    upsertMeta('property', 'og:image', metaImg);
    upsertMeta('name', 'twitter:card', 'summary_large_image');
    upsertMeta('name', 'twitter:title', fullTitle);
    upsertMeta('name', 'twitter:description', metaDesc);
    upsertMeta('name', 'twitter:image', metaImg);

    const scriptId = 'ad-structured-data-jsonld';
    let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = scriptId;
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }

    const schemas: Record<string, unknown>[] = [
      {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'A&D',
        slogan: 'WEAR YOUR IDENTITY.',
        url: window.location.origin
      }
    ];

    if (productSchema) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: productSchema.name,
        image: [productSchema.image, productSchema.secondaryImage],
        description: productSchema.description,
        sku: productSchema.sku,
        brand: { '@type': 'Brand', name: 'A&D' },
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: productSchema.price,
          availability: 'https://schema.org/InStock'
        }
      });
    }

    scriptEl.textContent = JSON.stringify(schemas);
  }, [title, description, image, urlPath, productSchema]);
};
