<template>
  <div>
    <div v-if="showSuccessMessage" class="success-message">
      Item added successfully!
    </div>
    <div v-if="showErrorMessage" class="error-message">
      Please choose your size before adding to the cart.
    </div>
    <h1>{{ product.name }}</h1>
    <img :src="product.image" :alt="product.name" />
    <p>{{ product.description }}</p>
    <p>Price: ${{ product.price }}</p>
    <label for="shoeSize">Select Size:</label>
    <select id="shoeSize" v-model="selectedSize">
      <option v-for="size in product.sizes" :key="size">{{ size }}</option>
    </select>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
import axios from "axios";
import { useCartStore } from "@/stores/cart";

export default {
  data() {
    return {
      product: {
        name: "",
        image: "",
        description: "",
        price: 0,
        sizes: [],
      },
      selectedSize: "",
      showSuccessMessage: false,
      showErrorMessage: false,
    };
  },
  methods: {
    async fetchProductDetails() {
      const productId = this.$route.params.id;

      try {
        const { data } = await axios.get(`/products.json`);
        this.product = data.find((product) => product.id == productId);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    },
    addToCart() {
      if (!this.selectedSize) {
        this.showErrorMessage = true;

        setTimeout(() => {
          this.showErrorMessage = false;
        }, 2000);

        console.error("Please select a size before adding to the cart.");
        return;
      }

      const cartStore = useCartStore();
      cartStore.addToCart({
        ...this.product,
        selectedSize: this.selectedSize,
      });

      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 2000);

      console.log("Product added to the cart:", this.product);
    },
  },
  created() {
    this.fetchProductDetails();
  },
};
</script>

<style scoped>
.success-message {
  color: green;
  font-weight: bold;
  margin-top: 10px;
}

.error-message {
  color: red;
  font-weight: bold;
  margin-top: 10px;
}
</style>
