<template>
  <div class="product-list">
    <router-link
      v-for="product in products"
      :to="'/product/' + product.id"
      :key="product.id"
    >
      <Product :product="product" />
    </router-link>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const { data } = await axios.get("/products.json");
        this.products = data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },
  },
};
</script>

<style scoped>
.product-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;
  margin: 50px;
}
</style>
