import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO/SEO';

const NotFound = () => {
  return (
    <>
      <SEO 
        title="Page Not Found - RoyNect"
        description="The page you are looking for could not be found. Return to RoyNect's homepage to explore our premium Kashmiri honey and Apis Cerana honey products."
        keywords="RoyNect, 404, page not found, Kashmiri honey, Apis cerana honey"
        ogImage="/mainImg2.png?url"
      />
      <div className="w-full min-h-screen bg-[url(/bg.svg)] bg-cover bg-top flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 text-center max-w-md">
          The page you are looking for could not be found. Return to our homepage to explore our premium Kashmiri honey products.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-amber-600 text-white rounded-full font-medium hover:bg-amber-700 transition-colors"
        >
          Return to Homepage
        </Link>
      </div>
    </>
  );
};

export default NotFound; 