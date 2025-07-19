import { create } from "zustand";
import { persist } from "zustand/middleware";

// Interface for individual cart items
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

// Interface for the cart store state and actions
interface CartState {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

// Create Zustand store with persistence middleware
export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      // Initial state - empty cart
      items: [],
      
      // Add item to cart or increment quantity if item already exists
      addToCart: (item: Omit<CartItem, "quantity">) =>
        set((state: CartState) => {
          // Check if item already exists in cart
          const existing = state.items.find((i: CartItem) => i.id === item.id);
          
          if (existing) {
            // Item exists, increment quantity
            return {
              items: state.items.map((i: CartItem) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
              ),
            };
          }
          
          // Item doesn't exist, add new item with quantity 1
          return {
            items: [...state.items, { ...item, quantity: 1 }],
          };
        }),
        
      // Remove item completely from cart
      removeFromCart: (id: number) =>
        set((state: CartState) => ({
          items: state.items.filter((i: CartItem) => i.id !== id),
        })),
        
      // Update quantity of specific item (minimum quantity is 1)
      updateQuantity: (id: number, quantity: number) =>
        set((state: CartState) => ({
          items: state.items.map((i: CartItem) =>
            i.id === id ? { ...i, quantity: Math.max(1, quantity) } : i
          ),
        })),
        
      // Clear all items from cart
      clearCart: () => set({ items: [] }),
      
      // Get total number of items in cart (sum of all quantities)
      getTotalItems: () => {
        const state = get();
        return state.items.reduce((total: number, item: CartItem) => total + item.quantity, 0);
      },
      
      // Get total price of all items in cart
      getTotalPrice: () => {
        const state = get();
        return state.items.reduce((total: number, item: CartItem) => total + (item.price * item.quantity), 0);
      },
    }),
    {
      name: "cart-storage", // Unique name for localStorage key
    }
  )
);
