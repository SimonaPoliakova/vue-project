<template>
  <div class="product">
    <img class="product-image" :src="product.image" :alt="product.name" />
    <div class="product-details">
      <h2 class="product-name">{{ product.name }}</h2>
      <p class="product-description">{{ product.description }}</p>
      <p class="product-price">{{ product.price }}€</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 5px;
  margin: 10px;
  text-align: center;
  height: 100%;
}

.product-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product-name {
  font-size: 1.2em;
  margin-bottom: 5px;
}

.product-description {
  color: #555;
  margin-bottom: 10px;
}

.product-price {
  font-weight: bold;
}
</style>
