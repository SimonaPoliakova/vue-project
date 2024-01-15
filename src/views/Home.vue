<template>
  <div>
    <img src="/src/img/home.jpg" alt="Welcome Image" class="welcome-image" />
    <h1>Welcome to the Shoe eShop!</h1>
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    ProductList,
  },
};
</script>

<style scoped>
.welcome-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  margin-top: -30px;
}
</style>
