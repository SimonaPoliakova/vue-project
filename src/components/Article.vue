<template>
  <div v-if="article" class="article-container">
    <h2 class="article-title">{{ article.title }}</h2>
    <div class="image-container">
      <img
        :src="currentImage"
        alt="Article Image"
        class="article-image"
        v-if="currentImage"
      />
      <div class="nav-arrows">
        <button @click="prevImage" class="arrow-button">&lt;</button>
        <button @click="nextImage" class="arrow-button">&gt;</button>
      </div>
    </div>
    <p class="short-description">{{ article.shortDescription }}</p>
    <div class="article-text-container">
      <div v-html="article.content" class="article-content"></div>
      <br />
      <a
        href="https://hypebeast.com/2023/11/converse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info">source</a><br>
        <router-link to="/" class="shop-now-button">Shop Now</router-link>

    </div>
  </div>
  <div v-else>
    <p>No article content available.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    article() {
      return {
        title:
          "Converse Honors Japan's Ukiyo-e Art With Two All Star Hi Models",
        shortDescription:
          "Paying homage to the works of Katsushika Hokusai and Utagawa Kuniyoshi.",
        content:
          "The shoes are part of All Star’s next-gen model that follows the theme of “POP-UP JAPAN,” along with the three elements of “REACT,” “RECYCLE” and “REFINE.” The two pairs honor the great works of Katsushika Hokusai and Utagawa Kuniyoshi; Hokusai’s The Great Wave off Kanagawa, a woodblock print created in 1831, splashes on to the beige canvas uppers while a plain white tongue and heel stripe create a soft contrast, while the skeleton from Kuniyoshi’s Takiyasha the Witch and the Skeleton Spectre appears on the outer phase of the all-black uppers. Both pairs are stamped with the circular Converse All Star ankle logo, along with the rubber All Star heel plate and branded insoles. The sneakers rest on a yellowed midsole and traditional brown outsole, while either white or black laces tie them together for a clean finish. Both pairs will be available on the Converse Japan webstore on November 7 with a retail price of ¥12,100 JPY (approximately $80 USD) each.",
        images: [
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-003.jpg?cbr=1&q=90",
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-001.jpg?cbr=1&q=90",
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-002.jpg?cbr=1&q=90",
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-011.jpg?cbr=1&q=90",
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-009.jpg?cbr=1&q=90",
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F11%2Fconverse-all-star-ukiyoeprint-the-great-wave-off-kanagawa-takiyasha-the-witch-and-the-skeleton-spectre-31310151-31310150-release-info-010.jpg?cbr=1&q=90",
        ],
      };
    },
    currentImage() {
      return this.article.images[this.currentIndex];
    },
  },
  methods: {
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.article.images.length;
    },
    prevImage() {
      this.currentIndex =
        (this.currentIndex - 1 + this.article.images.length) %
        this.article.images.length;
    },
  },
};
</script>

<style scoped>
.article-container {
  text-align: center;
}

.image-container {
  position: relative;
}

.nav-arrows {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.arrow-button {
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  font-size: 24px;
  border: none;
  padding: 8px;
  cursor: pointer;
  outline: none;
}

.arrow-button:hover {
  background-color: rgba(255, 255, 255, 0.8);
}

.article-text-container {
  max-width: 800px;
  margin: 80px auto;
  padding: 0 20px;
}

.article-title {
  font-size: 24px;
  margin-bottom: 10px;
}

.short-description {
  font-size: 20px;
  margin-bottom: 15px;
}

.article-content {
  text-align: left;
  line-height: 1.6;
  font-size: 18px;
  margin: 0 auto;
  margin-top: 20px;
}

.shop-now-button {
  background-color: #4caf50;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  text-decoration: none;
  display: inline-block;
  border-radius: 5px;
  margin-top: 20px;
  transition: background-color 0.3s ease;
}

.shop-now-button:hover {
  background-color: #45a049;
}
</style>
