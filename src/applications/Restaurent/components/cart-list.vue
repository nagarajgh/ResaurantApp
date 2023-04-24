<script>
export default {
  name: "RestuarentAppCartList",

  data() {
    return {};
  },

  methods: {},
};
</script>

<template>
  <td>
    <div class="flex gap-3">
      <img
        src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt=""
        class="h-24 w-24 object-cover"
      />
      <div>
        <h3 class="font-bold font-font2 text-text1 text-start">Burger</h3>
        <div class="flex">
          <img
            v-for="n in 5"
            src="../../../assets/restaurent/star.png"
            alt="star"
          />
        </div>
      </div>
    </div>
  </td>
  <td>
    <div class="text-text1 font-font1">₹350</div>
  </td>
  <td class="">
    <div class="pile inline-flex">
      <div class="flex gap-3 px-3">
        <button>-</button>
        <span>1</span>
        <button>+</button>
      </div>
    </div>
  </td>
  <td>
    <div class="text-text1 font-font1">₹890</div>
  </td>
  <td>
    <button class="hover:text-primary">X</button>
  </td>
</template>

<style scoped>
.pile {
  border: 1px solid #cbcaca;
  border-radius: 15px;
  padding: 2px;
  color: #1f242e;
}
td {
  text-align: center;
  padding: 20px 0;
  min-width: 5em;
}
td:nth-child(3) {
  vertical-align: middle;
}
</style>
