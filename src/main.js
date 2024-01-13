import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

window.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const pinia = createPinia();

createApp(App).use(router).use(pinia).mount("#app");
