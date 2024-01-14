import { defineStore } from "pinia";

const CART_KEY = "cart";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: loadState(),
  }),
  actions: {
    addToCart(product) {
      this.items = ensureArray(this.items);

      const existingItem = this.items.find((item) => item.id === product.id);

      if (existingItem) {
        existingItem.totalPrice += product.price;
      } else {
        const newItem = {
          ...product,
          totalPrice: product.price,
        };
        this.items.push(newItem);
      }

      saveState(this.items);
    },
    removeFromCart(index) {
      this.items = ensureArray(this.items);
      this.items.splice(index, 1);
      saveState(this.items);
    },
    clearCart() {
      this.items = [];
      saveState(this.items);
    },
  },
});

function ensureArray(value) {
  return Array.isArray(value) ? value : [];
}

function saveState(state) {
  localStorage.setItem(CART_KEY, JSON.stringify(state));
}

function loadState() {
  const savedState = localStorage.getItem(CART_KEY);

  const parsedState = savedState ? JSON.parse(savedState) : [];
  parsedState.forEach((item) => {
    if (item.totalPrice === undefined) {
      item.totalPrice = item.price;
    }
  });

  return parsedState;
}
