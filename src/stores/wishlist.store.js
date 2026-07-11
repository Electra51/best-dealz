import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';

export const useWishlistStore = create(
  persist(
    (set, get) => ({
      items: [],

      toggleItem: (product) => {
        set((state) => {
          const exists = state.items.find((i) => i.id === product.id);
          if (exists) {
            toast('Removed from wishlist', {
              icon: '',
              style: { background: '#1f2937', color: '#fff' },
            });
            return { items: state.items.filter((i) => i.id !== product.id) };
          }
          toast.success('Added to wishlist!', {
            icon: '❤️',
            style: { background: '#1f2937', color: '#fff' },
          });
          return { items: [...state.items, product] };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      isInWishlist: (id) => {
        const state = get();
        return state.items.some((i) => i.id === id);
      },

      clearWishlist: () => {
        set({ items: [] });
        toast('Wishlist cleared', { icon: '🧹' });
      },

      getWishlistCount: () => {
        const state = get();
        return state.items.length;
      },
    }),
    {
      name: 'dealora-wishlist-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);