import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiredAuth)) {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      next("/auth");
    }
  }
  next();
});

export default router;
