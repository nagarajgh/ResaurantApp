<script>
import Home from '../src/home.vue'

export default {
  components: {
    Home,
  },
}
</script>

<template>
  <!-- <router-view>
  </router-view> -->
  <router-view v-slot="{ Component, route }">
  <transition :name="route.meta.transition || 'fade'">
    <component :is="Component" />
  </transition>
</router-view>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Miniver&display=swap');
</style>