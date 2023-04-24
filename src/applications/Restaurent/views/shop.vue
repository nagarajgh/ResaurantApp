<script>
import Dropdown from "../components/dropdown.vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import ShopItemCard from "../components/shop-item-card.vue";
import Serachbar from "../components/searchbar.vue";
import Adv from "../components/adv.vue";
import PriceSlide from "../components/price-slidebar.vue";
export default {
  name: "RestuarentAppShop",

  data() {
    return {
      message: "Thi is Shop component",
      sortItems: ["Newest", "Oldest", "Price-low to high", "Price-high to low"],
      showItems: ["Default"],
      productTags: ['Services','Our Menu','Pizza','Cupcake','Burger','Cookies','Our Shop','Tandoori Chicken']
    };
  },
  components: {
    Header,
    Footer,
    Dropdown,
    ShopItemCard,
    Serachbar,
    Adv,
    PriceSlide,
  },
};
</script>

<template>
  <Header></Header>
  <div class="shop bg-secondary">
    <div class="dropdowns flex gap-9 my-4">
      <Dropdown labelName="Sort By" :items="sortItems" />
      <Dropdown labelName="Show" :items="showItems" />
    </div>
    <div class="shopingItems grid gap-x-6">
      <div class="itemSection grid gap-6">
        <div v-for="n in 15" class="">
          <ShopItemCard />
        </div>
      </div>
      <div class="filterSection border border-text3 px-8 py-6 rounded-md">
        <Serachbar />
        <div class="catagory my-6">
          <h2 class="font-font1 text-lg font-bold">Catagory</h2>
          <div v-for="n in 8" class="mb-4">
            <input class="check-box" type="checkbox" />
            <label class="font-font1 text-text1 text-lg ml-2"
              >Check text
            </label>
          </div>
        </div>
        <Adv />
        <div class="mt-6">
          <h2 class="font-font1 text-lg font-bold">Filter By Price</h2>
          <PriceSlide />
        </div>
        <div class="latest-product mt-4 flex flex-col gap-4">
          <h2 class="font-font1 text-lg font-bold">Latest Products</h2>
          <div v-for="n in 4" class="flex gap-3">
            <img
              src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
              alt=""
              class="h-16 w-16 object-cover"
            />
            <div class="flex flex-col justify-between">
              <h3 class="font-bold font-font2 text-text1 text-start">Burger</h3>
              <div class="flex">
                <img
                  v-for="n in 5"
                  src="../../../assets/restaurent/star.png"
                  alt="star"
                />
              </div>
              <div class="font-font1 text-text2">₹340</div>
            </div>
          </div>
        </div>
        <div class="product-tag mt-6">
          <h2 class="font-font1 text-lg font-bold">Latest Products</h2>
          <div class="flex flex-wrap gap-5 my-6">
            <div v-for="productName in productTags" class="font-font2 text-text2">{{ productName }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style scoped>
.shop {
  padding: 5% 15%;
}
.shopingItems {
  grid-template-columns: 75% 25%;
}
.itemSection {
  grid-template-columns: 1fr 1fr 1fr;
}
.check-box {
  appearance: none;
  height: 15px;
  width: 15px;
  background-color: inherit;
  border: 1px solid grey;
}
.check-box:checked{
  background-color: green;
}
.check-box:checked::after{
  content: '✔';
font-size: 8px;
color: #fff;
}
</style>
