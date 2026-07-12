import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { formatPrice } from '../../utils/helpers';
import { useCartStore } from '../../stores/cart.store';
import { useWishlistStore } from '../../stores/wishlist.store';

const ProductCard = memo(({ product, viewMode = 'grid' }) => {
  const addItem = useCartStore(s => s.addItem);
  const toggleWishlist = useWishlistStore(s => s.toggleItem);
  console.log("product", product);
  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      whileHover={{ y: -4 }}
      className={`group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 ${viewMode === 'list' ? 'flex' : ''}`}
    >
      <div className={`relative bg-gray-50 ${viewMode === 'list' ? 'w-48 shrink-0' : 'aspect-square'} overflow-hidden`}>
        <img src={product.img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.discount > 0 && <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">-{product.discount}%</span>}
          {product.newArrival && <span className="bg-blue-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">NEW</span>}
          {product.trending && <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-1 rounded-full">HOT</span>}
        </div>

        <button 
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-red-50 transition-colors"
          aria-label="Add to wishlist"
        >
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
        </button>
      </div>
      
      <div className="p-4 flex-1 flex flex-col">
        <p className="text-xs text-gray-500 uppercase tracking-wide mb-1">{product.brand}</p>
        <h3 className="font-semibold text-gray-900 truncate mb-2">{product.name}</h3>
        
        <div className="flex items-center gap-1 mb-3">
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-xs text-gray-600 font-medium">{product.ratings} ({product.reviews})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-gray-50">
          <div className="flex items-baseline gap-2">
            <span className="font-bold text-gray-900">{formatPrice(product.price)}</span>
            {product.oldPrice && <span className="text-xs text-gray-400 line-through">{formatPrice(product.oldPrice)}</span>}
          </div>
          <button 
            onClick={() => addItem(product)}
            className="px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg hover:bg-orange-500 transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </motion.div>
  );
});

ProductCard.displayName = 'ProductCard';
export default ProductCard;