<script>
import { PhHorse, PhHeart, PhCube } from "@phosphor-icons/vue";
export default {
  name: "RestuarentAppTest",

  data() {
    return {};
  },
  components: {
    PhHorse,
    PhCube,
    PhHeart,
  },

  mounted() {},

  methods: {},
};
</script>

<template>
  <section class="col secondary-text">
    <div class="col col-1">col-1</div>
    <div class="col col-2">col-2</div>
    <div class="col col-3">col-3</div>
    <div class="col col-4">col-4</div>
    <div class="col col-5">col-5</div>
    <div class="col col-6">col-6</div>
    <div class="col col-7">col-7</div>
    <div class="col col-8">col-8</div>
    <div class="col col-9">col-9</div>
    <div class="col col-10">col-10</div>
    <div class="col col-11">col-11</div>
    <div class="col col-12">col-12</div>
  </section>
  <div class="flex gap-3 mrt-5 pd-5 ">
    <div class="col-1 ">sub-col-1</div>
    <div class="col-2 bg-white">sub-col-2</div>
    <div class="col-3 ">sub-col-3</div>
  </div>
</template>

<style scoped>
div {
  /* color: var(--grey4); */
  /* height: var(--space-10); */
  background-color: rgba(255, 0, 0, 0.3);
  justify-content: center;
}
</style>
