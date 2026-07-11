import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ShopFilters = ({ filters, updateFilter, clearFilters }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const categories = ['Sneakers', 'Apparel', 'Accessories', 'Bags'];
  const brands = ['Nike', 'Adidas', 'Puma', 'New Balance'];

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg text-gray-900">Filters</h3>
        <button onClick={clearFilters} className="text-sm text-orange-500 hover:underline">Clear All</button>
      </div>

      {/* Category */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Category</h4>
        <div className="space-y-2">
          {categories.map(cat => (
            <label key={cat} className="flex items-center gap-2 cursor-pointer">
              <input type="radio" name="category" checked={filters.category === cat} onChange={() => updateFilter('category', cat)} className="accent-orange-500" />
              <span className="text-gray-600 text-sm">{cat}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Brand */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Brand</h4>
        <div className="space-y-2">
          {brands.map(brand => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filters.brand === brand} onChange={() => updateFilter('brand', filters.brand === brand ? '' : brand)} className="accent-orange-500 rounded" />
              <span className="text-gray-600 text-sm">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
        <div className="flex items-center gap-2">
          <input type="number" placeholder="Min" value={filters.minPrice || ''} onChange={e => updateFilter('minPrice', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm" />
          <span className="text-gray-400">-</span>
          <input type="number" placeholder="Max" value={filters.maxPrice === 1000 ? '' : filters.maxPrice} onChange={e => updateFilter('maxPrice', e.target.value)} className="w-full px-3 py-2 border rounded-lg text-sm" />
        </div>
      </div>

      {/* Rating */}
      <div>
        <h4 className="font-semibold text-gray-900 mb-3">Minimum Rating</h4>
        <div className="flex gap-2">
          {[4, 3, 2, 1].map(r => (
            <button key={r} onClick={() => updateFilter('rating', r)} className={`px-3 py-1 rounded-full text-sm border ${filters.rating === r ? 'bg-orange-500 text-white border-orange-500' : 'bg-white text-gray-600 border-gray-200'}`}>
              {r}★ & up
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button onClick={() => setMobileOpen(true)} className="lg:hidden w-full py-3 bg-gray-100 rounded-xl font-semibold text-gray-900 flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" /></svg>
        Show Filters
      </button>

      <div className="hidden lg:block bg-white p-6 rounded-2xl border border-gray-100 sticky top-24">
        <FilterContent />
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setMobileOpen(false)} className="fixed inset-0 bg-black/50 z-40 lg:hidden" />
            <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'spring', damping: 25 }} className="fixed top-0 left-0 bottom-0 w-80 bg-white z-50 p-6 overflow-y-auto lg:hidden">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Filters</h2>
                <button onClick={() => setMobileOpen(false)} className="p-2 hover:bg-gray-100 rounded-full"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button>
              </div>
              <FilterContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ShopFilters;