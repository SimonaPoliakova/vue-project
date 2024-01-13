import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import ProductDetails from "@/views/ProductDetails.vue";
import OrderDetails from "@/views/OrderDetails.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/product/:id", component: ProductDetails, props: true },
  { path: "/order/:orderId", component: OrderDetails, props: true },
  { path: "/about", component: () => import("@/views/About.vue") },
  { path: "/cart", component: () => import("@/views/Cart.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
