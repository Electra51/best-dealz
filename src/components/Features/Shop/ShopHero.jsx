import React from 'react';
import { motion } from 'framer-motion';

const ShopHero = () => {
  return (
    <section className="relative bg-linear-to-br from-violet-900 via-purple-900 to-indigo-900 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.nav 
          initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm text-gray-300 mb-6"
        >
          <a href="/" className="hover:text-white transition-colors">Home</a>
          <span>/</span>
          <span className="text-white font-medium">Shop</span>
        </motion.nav>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
            Explore Our <span className="text-orange-500">Premium</span> Collection
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Discover the finest sneakers, apparel, and accessories curated for those who demand the best.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ShopHero;