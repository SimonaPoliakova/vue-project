<template>
  <div>
    <div v-if="showThankYouMessage" class="thank-you-message">
      Thank you for your order!
    </div>
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
  data() {
    return {
      showThankYouMessage: false,
    };
  },
  mounted() {
    this.showThankYouMessage = true;
    setTimeout(() => {
      this.showThankYouMessage = false;
    }, 3000);
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

.thank-you-message {
  text-align: center;
  margin-top: -30px;
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border-radius: 4px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
</style>
