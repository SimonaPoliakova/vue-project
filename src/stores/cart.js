import { defineStore } from "pinia";

export const useCartStore = defineStore({
  id: "cart",
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      this.items.push(product);
    },
    removeFromCart(index) {
      this.items.splice(index, 1);
    },
    clearCart() {
      this.items = [];
    },
  },
});
