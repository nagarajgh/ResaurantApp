<script>
import Logo from "../components/logo.vue";
import { PhMagnifyingGlass, PhUser, PhTote } from "@phosphor-icons/vue";
import pinia from "../../../store/store";
import { useSignup } from "../../../store/signup";

const signup = useSignup(pinia());
export default {
  data() {
    return {
      navigation: ["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"],
    };
  },
  components: {
  Logo,
   PhMagnifyingGlass,
   PhUser,
   PhTote,
  },
  methods:{
    logout(){
      signup.logout()
    }
  },
};
</script>

<template>
  <div class="header z-10">
    <div class="navigation-bar bg-primary flex justify-between">
      <div class="logo"><Logo /></div>
      <div class="nav-name flex gap-8">
        <li class="text-secondary list-none" v-for="nav in navigation">
          {{ nav }}
        </li>
      </div>
      <div class="nav-icons flex gap-8">
        <PhMagnifyingGlass />
        <PhUser />
        <PhTote />
        <button @click="logout"><img src="../../../assets/icons/CheckSquareOffset.png" /></button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  height: calc(410px + (28px * 2.5));
  background: url(../../../assets/restaurent/header.png);
  background-position: center;
}
.header .navigation-bar {
  padding: 28px 15%;
  background-color: rgba(28, 92, 0, 0.8);
  position: fixed;
  z-index: 99;
  top: 0;
  width: 100%;
  backdrop-filter: blur(20px);
}
</style>
