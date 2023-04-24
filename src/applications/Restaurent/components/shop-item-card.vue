<script>
export default {
  name: "RestuarentAppShopItemCard",

  data() {
    return {};
  },

};
</script>

<template>
  <div>
    <div class="image-section">
      <img
        src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="food"
      />
    </div>
    <div class="price-section mt-2">
      <h1 class="text-text1 font-font2 font-bold text-lg">Food title</h1>
      <p>
        <span class="font-font2 text-primary">₹380.00</span>
        <span class="font-font2 text-text3 ml-4"> <strike>₹480.00</strike></span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.image-section img{
    width: 312px;
   height: 267px; 
   object-fit: cover;
}
</style>
