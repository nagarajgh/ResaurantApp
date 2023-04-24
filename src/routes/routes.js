import StickyNote from "../applications/sticky-note/board.vue";
import Restaurent from "../applications/Restaurent/restaurent.vue";
import Signup from "../applications/Restaurent/views/signup.vue";
import Cart from "../applications/Restaurent/views/cart.vue";
import Home from "../home.vue";


let routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/sticky-note",
    name: "sticky-note",
    component: StickyNote,
  },
  {
    path: "/test",
    name: "test",
    component: () => import ("../applications/Test/test.vue"),
  },
  {
    path: "/restaurent",
    name: "restaurent",
    component: Restaurent,
  },
  {
    path: "/restaurent/auth",
    name: "auth",
    component: Signup,
    alias: "/auth",
    meta: {
      transition: "slide-left",
    },
  },
  {
    path: "/restaurent/cart",
    name: "cart",
    component: Cart,
    alias: "/cart",
    meta: {
      requiredAuth: true,
      transition: "slide-left",
    },
  },
  {
    path: "/restaurent/shop",
    name: "shop",
    component: () => import('../applications/Restaurent/views/shop.vue'),
  },
  {
    path: "/404",
    component: () => import ("../applications/Restaurent/views/notFound.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];
export default routes;
