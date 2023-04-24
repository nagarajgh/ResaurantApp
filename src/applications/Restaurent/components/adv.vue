<script>
export default {
  name: "RestuarentAppAdv",

  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <div class="adv relative">
    <div class="adv-image">
      <img src="../../../assets/restaurent/adv.png" alt="" />
    </div>
    <div class="adv-text absolute top-7 left-4">
      <h3 class="font-font2 text-white font-bold">Perfect Taste</h3>
      <h3 class="font-font2 text-white font-bold text-xl">
        Classic Restaurant
      </h3>
      <h3 class="font-font2 text-primary font-bold">45.00$</h3>
    </div>
    <button class="absolute bottom-7 left-4 flex gap-2">
      <span class="font-font2 text-white">Shop Now</span>
      <img src="../../../assets/restaurent/ArrowCircleRight.png" alt="" />
    </button>
  </div>
</template>

<style scoped>
.adv-image img {
  min-height: 286px;
  object-fit: cover;
}
</style>
