<template>
  <div>
    <div v-if="showRemoveSuccessMessage" class="success-message">
      Product removed successfully!
    </div>
    <div v-if="showClearSuccessMessage" class="success-message">
      Cart cleared successfully!
    </div>
    <h2>Cart</h2>
    <ul>
      <li v-for="(item, index) in cartItems" :key="index">
        {{ item.name }} - Size: {{ item.selectedSize }} -
        <button @click="removeFromCart(index)">Remove</button>
      </li>
    </ul>
    <button @click="clearCart">Clear Cart</button>
  </div>
</template>

<script>
import { useCartStore } from "@/stores/cart";

export default {
  data() {
    return {
      showRemoveSuccessMessage: false,
      showClearSuccessMessage: false,
    };
  },
  computed: {
    cartItems() {
      return useCartStore().items;
    },
  },
  methods: {
    removeFromCart(index) {
      useCartStore().removeFromCart(index);

      this.showRemoveSuccessMessage = true;

      setTimeout(() => {
        this.showRemoveSuccessMessage = false;
      }, 2000);
    },
    clearCart() {
      useCartStore().clearCart();

      this.showClearSuccessMessage = true;

      setTimeout(() => {
        this.showClearSuccessMessage = false;
      }, 2000);
    },
  },
};
</script>

<style scoped>
.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}
</style>
