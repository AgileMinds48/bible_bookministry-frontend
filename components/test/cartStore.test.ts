import { act } from "react";
import { useCartStore, CartItem } from "../../app/utils/cartStore"; 

// Sample item for reuse in tests
const sampleItem: Omit<CartItem, "quantity"> = {
  id: 1,
  title: "Sample Book",
  price: 50,
  image: "sample.jpg",
};

// Reset the cart before each test
beforeEach(() => {
  act(() => {
    useCartStore.getState().clearCart();
  });
});

describe("useCartStore", () => {
  // Test initial state
  it("should start with an empty cart", () => {
    const state = useCartStore.getState();
    expect(state.items).toEqual([]);
  });

  // Test addToCart
  it("should add a new item to the cart", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
    });
    const state = useCartStore.getState();
    expect(state.items.length).toBe(1);
    expect(state.items[0].quantity).toBe(1);
  });

  it("should increase quantity if item already exists", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().addToCart(sampleItem);
    });
    const state = useCartStore.getState();
    expect(state.items[0].quantity).toBe(2);
  });

  // Test removeFromCart
  it("should remove item from cart", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().removeFromCart(sampleItem.id);
    });
    const state = useCartStore.getState();
    expect(state.items).toEqual([]);
  });

  // Test updateQuantity
  it("should update item quantity", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().updateQuantity(sampleItem.id, 5);
    });
    const state = useCartStore.getState();
    expect(state.items[0].quantity).toBe(5);
  });

  it("should not allow quantity less than 1", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().updateQuantity(sampleItem.id, 0);
    });
    const state = useCartStore.getState();
    expect(state.items[0].quantity).toBe(1);
  });

  // Test clearCart
  it("should clear all items from cart", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().clearCart();
    });
    const state = useCartStore.getState();
    expect(state.items).toEqual([]);
  });

  // Test getTotalItems
  it("should calculate total number of items", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().addToCart(sampleItem);
    });
    const total = useCartStore.getState().getTotalItems();
    expect(total).toBe(2);
  });

  // Test getTotalPrice
  it("should calculate total price of items", () => {
    act(() => {
      useCartStore.getState().addToCart(sampleItem);
      useCartStore.getState().addToCart(sampleItem);
    });
    const total = useCartStore.getState().getTotalPrice();
    expect(total).toBe(100);
  });
});