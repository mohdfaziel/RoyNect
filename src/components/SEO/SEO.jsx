import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = '/logo.png',
  ogUrl = 'https://roynect.vercel.app',
  type = 'website',
  productData = null,
  breadcrumbs = null
}) => {
  const siteTitle = 'RoyNect - Premium Kashmiri Honey & Apis Cerana Honey';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;

  // Generate structured data based on page type
  const generateStructuredData = () => {
    if (productData) {
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": productData.name || "RoyNect Pure Apis Cerana Honey",
        "description": productData.description || "100% pure and natural Apis Cerana honey from Bhadarwah, Kashmir. Golden, raw, and unfiltered honey preserving its natural goodness.",
        "image": productData.image || "/logo.png",
        "brand": {
          "@type": "Brand",
          "name": "RoyNect"
        },
        "offers": {
          "@type": "Offer",
          "price": productData.price || "750",
          "priceCurrency": "INR",
          "availability": "https://schema.org/InStock"
        },
        "category": "Natural Honey",
        "keywords": "pure honey, natural honey, Kashmiri honey, Apis cerana honey, organic honey online, Bhadarwah honey"
      };
    } else if (breadcrumbs) {
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": item.url
        }))
      };
    } else {
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "RoyNect",
        "url": "https://roynect.vercel.app",
        "logo": "https://roynect.vercel.app/logo.png",
        "description": "Premium quality Kashmiri honey and Apis Cerana honey products from Bhadarwah, Jammu and Kashmir",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bhadarwah",
          "addressRegion": "Jammu and Kashmir",
          "postalCode": "182222",
          "addressCountry": "IN"
        },
        "sameAs": [
          "https://roynect.vercel.app"
        ]
      };
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="RoyNect - Premium Kashmiri Honey" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={ogUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={ogImage} />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="RoyNect" />
      <meta name="geo.region" content="IN-JK" />
      <meta name="geo.placename" content="Bhadarwah" />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(generateStructuredData())}
      </script>
    </Helmet>
  );
};

export default SEO; 