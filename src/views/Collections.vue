<template>
  <div>
    <h1>Collections</h1>
    <router-link :to="{ name: 'article' }">
      <div>
        <h2>{{ article.title }}</h2>
        <p>{{ article.shortDescription }}</p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {
        title:
          "Converse Honors Japan's Ukiyo-e Art With Two All Star Hi Models",
        shortDescription:
          "Paying homage to the works of Katsushika Hokusai and Utagawa Kuniyoshi.",
      },
    };
  },
};
</script>

<style scoped></style>
