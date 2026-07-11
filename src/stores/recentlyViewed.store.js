import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const MAX_RECENT = 10;

export const useRecentlyViewedStore = create(
  persist(
    (set, get) => ({
      items: [],

      addItem: (product) => {
        set((state) => {
          // Remove if already exists to move it to top
          const filtered = state.items.filter((i) => i.id !== product.id);
          // Add to beginning, limit to MAX_RECENT
          const newItems = [product, ...filtered].slice(0, MAX_RECENT);
          return { items: newItems };
        });
      },

      removeItem: (id) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      clearHistory: () => {
        set({ items: [] });
      },

      getRecentlyViewed: () => {
        const state = get();
        return state.items;
      },
    }),
    {
      name: 'dealora-recently-viewed-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);