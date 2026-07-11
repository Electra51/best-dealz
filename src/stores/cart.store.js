import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import toast from 'react-hot-toast';

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (product) => {
        set((state) => {
          const existing = state.items.find((i) => i.id === product.id);
          if (existing) {
            toast.success(`${product.name} quantity updated!`, {
              icon: '🛒',
              style: { background: '#1f2937', color: '#fff' },
            });
            return {
              items: state.items.map((i) =>
                i.id === product.id ? { ...i, qty: i.qty + 1 } : i
              ),
            };
          }
          toast.success(`${product.name} added to cart!`, {
            icon: '✅',
            style: { background: '#1f2937', color: '#fff' },
          });
          return { items: [...state.items, { ...product, qty: 1 }] };
        });
      },

      removeItem: (id) => {
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          toast.error(`${item?.name} removed from cart`, {
            icon: '🗑️',
            style: { background: '#1f2937', color: '#fff' },
          });
          return { items: state.items.filter((i) => i.id !== id) };
        });
      },

      updateQuantity: (id, qty) => {
        if (qty < 1) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) => (i.id === id ? { ...i, qty } : i)),
        }));
      },

      clearCart: () => {
        set({ items: [] });
        toast('Cart cleared', { icon: '🧹' });
      },

      getCartTotal: () => {
        const state = get();
        return state.items.reduce((total, item) => total + item.price * item.qty, 0);
      },

      getCartCount: () => {
        const state = get();
        return state.items.reduce((count, item) => count + item.qty, 0);
      },
    }),
    {
      name: 'dealora-cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ items: state.items }),
    }
  )
);