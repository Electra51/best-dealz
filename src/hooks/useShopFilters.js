import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

export const useShopFilters = (allProducts) => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // URL থেকে filters গুলো read করা
  const filters = useMemo(() => ({
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    minPrice: Number(searchParams.get('minPrice')) || 0,
    maxPrice: Number(searchParams.get('maxPrice')) || 1000,
    rating: Number(searchParams.get('rating')) || 0,
    sort: searchParams.get('sort') || 'default',
    search: searchParams.get('search') || '',
  }), [searchParams]);

  // URL এ filters update করা
  const updateFilter = (key, value) => {
    const newParams = new URLSearchParams(searchParams);
    
    // যদি value থাকে তবে set করো, না থাকে (empty/0) তবে delete করো
    if (value) {
      newParams.set(key, String(value));
    } else {
      newParams.delete(key);
    }
    
    setSearchParams(newParams);
  };

  // সব filters clear করা
  const clearFilters = () => setSearchParams({});

  // Products কে filter এবং sort করা
  const filteredProducts = useMemo(() => {
    if (!allProducts) return [];
    
    let result = [...allProducts];
    
    // Filtering
    if (filters.category) result = result.filter(p => p.category === filters.category);
    if (filters.brand) result = result.filter(p => p.brand === filters.brand);
    if (filters.minPrice) result = result.filter(p => p.price >= filters.minPrice);
    if (filters.maxPrice && filters.maxPrice !== 1000) result = result.filter(p => p.price <= filters.maxPrice);
    if (filters.rating) result = result.filter(p => p.rating >= filters.rating);
    if (filters.search) {
      result = result.filter(p => 
        p.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        p.brand.toLowerCase().includes(filters.search.toLowerCase())
      );
    }
    
    // Sorting
    if (filters.sort === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (filters.sort === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    if (filters.sort === 'rating') result = [...result].sort((a, b) => b.rating - a.rating);
    
    return result;
  }, [allProducts, filters]);

  return { filters, updateFilter, clearFilters, filteredProducts };
};