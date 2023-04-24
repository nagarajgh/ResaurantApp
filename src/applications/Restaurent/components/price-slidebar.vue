<script>
export default {
  name: "RestuarentAppPriceSlidebar",

  data() {
    return {
      range: 0,
    };
  },

  methods: {},
};
</script>

<template>
  <div class="mt-4 flex flex-col gap-4">
    <!-- <hr class="bg-primary h-4 rounded-lg"/> -->
    <input
      class="bg-primary"
      min="0"
      max="3500"
      step="1"
      v-model="range"
      type="range"
    />
    <div class="font-font2 text-text3 flex justify-between"
      ><span>{{ `from ₹${0} to ₹${range}` }}</span> 
      <span>Filter</span></div
    >
  </div>
</template> 
<style scoped>
input[type="range"] {
appearance: none;
  margin-right: 15px;
  width: 100%;
  height: 5px;
  background-color: rgba(25, 90, 0, 1);
  border-radius: 5px;
  background-size: 70% 100%;
  background-repeat: no-repeat;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: rgba(25, 90, 0, 1);
  border: 5px solid #fff;
  cursor: pointer;
  box-shadow: 0 0 4px 0 #555;
  transition: background 0.3s ease-in-out;
}

input[type="range"]::-webkit-slider-runnable-track {
  -webkit-appearance: none;
  box-shadow: none;
  border: none;
  background: transparent;
}
</style>
