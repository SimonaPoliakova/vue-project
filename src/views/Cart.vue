<template>
  <div class="cart-container">
    <div
      v-if="showRemoveSuccessMessage"
      class="overlay-message success-message"
    >
      Product removed successfully!
    </div>
    <div v-if="showClearSuccessMessage" class="overlay-message success-message">
      Cart cleared successfully!
    </div>
    <h2>Cart</h2>
    <div class="table-container">
      <table class="cart-table">
        <thead>
          <tr>
            <th>Product</th>
            <th>Size</th>
            <th>Price</th>
            <th>Total Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in cartItems" :key="index">
            <td>{{ item.name }}</td>
            <td>{{ item.selectedSize }}</td>
            <td>${{ item.price.toFixed(2) }}</td>
            <td>${{ item.totalPrice.toFixed(2) }}</td>
            <td>
              <button @click="removeFromCart(index)">Remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="total-container">
      <p>Total: ${{ calculateTotalPrice().toFixed(2) }}</p>
    </div>
    <div class="button-container">
      <button @click="clearCart" class="cart-button">Clear Cart</button>
      <button @click="checkout" class="cart-button checkout-button">
        Checkout
      </button>
    </div>
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
    calculateTotalPrice() {
      return this.cartItems.reduce((total, item) => total + item.totalPrice, 0);
    },
    checkout() {
      this.$router.push('/shipping-details');
    },
  },
};
</script>

<style scoped>
.overlay-message {
  position: absolute;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 30%;
  text-align: center;
  color: white;
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  z-index: 999;
}

.success-message {
  background-color: green;
}

.cart-container {
  width: 70%;
  margin: 0 auto;
}

.table-container {
  width: 100%;
  margin-top: 20px;
  overflow-x: auto;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.cart-table th,
.cart-table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: left;
}

.cart-table th {
  background-color: #f2f2f2;
}

.total-container {
  margin-top: 10px;
  text-align: right;
}

.button-container {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
}

.cart-button {
  background-color: #ff6666;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

.cart-button:hover {
  background-color: #ff4d4d;
}

.checkout-button {
  background-color: #4caf50;
}

.checkout-button:hover {
  background-color: #337a35;
}
</style>
