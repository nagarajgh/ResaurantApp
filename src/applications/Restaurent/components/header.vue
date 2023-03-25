<script>
import Logo from "../components/logo.vue";
import Search from "../../../assets/icons/icon-search.vue";
import User from "../../../assets/icons/icon-user.vue";
import Shop from "../../../assets/icons/icon-shop.vue";
export default {
  data() {
    return {
      navigation: ["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"],
    };
  },
  components: {
    Logo,
    User,
    Shop,
    Search,
  },
};
</script>

<template>
  <div class="header">
    <div class="navigation-bar bg-primary flex justify-between">
      <div class="logo"><Logo /></div>
      <div class="nav-name flex gap-8">
        <li class="text-secondary list-none" v-for="nav in navigation">
          {{ nav }}
        </li>
      </div>
      <div class="nav-icons flex gap-8">
        <Search />
        <User />
        <Shop />
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
  top: 0;
  width: 100%;
  backdrop-filter: blur(20px);
}
</style>
