<template>
  <div>
    <h1>Collections</h1>
    <router-link :to="{ name: 'article' }">
      <div class="article-container">
        <img :src="article.image" alt="Article Image" class="article-image" />
        <div class="article-content">
          <h2 class="article-title">{{ article.title }}</h2>
          <p class="article-description">{{ article.shortDescription }}</p>
        </div>
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
        image:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-003.jpg?cbr=1&q=90", // Replace with the actual image URL
      },
    };
  },
};
</script>

<style scoped>
.article-container {
  border: 1px solid #ccc;
  padding: 10px; 
  max-width: 1200px; 
  margin: 0 auto; 
  display: flex;
  align-items: center;
}

.article-image {
  max-width: 580px; 
  margin-right: 10px;
}

.article-content {
  flex: 1;
}

.article-title {
  font-size: 28px; 
  margin-bottom: 5px;
  color: #0050a0; 
}

.article-description {
  font-size: 14px; 
  color: #666; 
}

</style>

