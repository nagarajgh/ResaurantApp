<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import CartList from "../components/cart-list.vue";
export default {
  name: "RestuarentAppCart",

  data() {
    return {
      message: "component",
      tableHead: ["Product", "Price", "Quantity", "Total", "Remove"],
    };
  },
  methods: {},
  components: {
    Header,
    Footer,
    CartList,
  },
};
</script>

<template>
  <Header />
  <div class="cart">
    <div class="scroll-view mb-32 max-sm:mb-20">
      <table class="w-full">
        <thead>
          <th class="text-text1 text-lg" v-for="head in tableHead">
            {{ head }}
          </th>
        </thead>
        <tr v-for="n in 5">
          <CartList />
        </tr>
      </table>
    </div>
    <div class="checkout col-2 gap-8 max-sm:gap-0">
      <div class="coupon felx flex-col gap-6">
        <h2 class="font-font1 text-3xl font-bold text-text1">Coupon Code</h2>
        <div class="coupon_field p-6 border border-text3 rounded">
          <p class="text-text3 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non
          </p>
          <div class="flex">
            <input
              class="subscribe-field h-12 w-full"
              type="email"
              placeholder="Enter Here Code"
            />
            <button class="send bg-primary -z-0">
              <span class="text-white">Apply</span>
            </button>
          </div>
        </div>
      </div>

      <div class="total flex flex-col gap-6">
        <h2 class="font-font1 text-3xl font-bold text-text1">Total Bill</h2>
        <div class="border border-text3 rounded">
          <div class="total_amount p-6 border-b border-text3">
            <div class="text-text1 font-font1 font-bold text-xl">
              Cart Subtotal
            </div>
            <div class="text-text1 font-font1 font-bold text-xl ml-auto">$120.00</div>
            <div class="text-text3 font-font1  text-lg">
              Shipping Charge
            </div>
            <div class="text-text3 font-font1  text-lg ml-auto">$120.00</div>

          </div>
          <div class="p-6 flex">
            <div class="text-text3 font-font1  text-lg">
              Shipping Charge
            </div>
            <div class="text-text3 font-font1  text-lg ml-auto">$120.00</div>
          </div>
        </div>
        <button class="bg-primary text-white p-5 w-full flex justify-center gap-2">
          Proceed to Checkout
          <img src="../../../assets/icons/CheckSquareOffset.png" alt="checkout">
        </button>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.cart {
  background-color: #e5e5e5;
  padding: 5% 15%;
}
table {
  table-layout: auto;
}

thead th:first-child {
  text-align: left;
  padding: 30px 0;
  min-width: 15em;
}

th {
  min-width: 10em;
}
tr {
  border-bottom: 1px solid #d5d5d5;
}
.subscribe-field {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  padding-left: 20px;
  background-color: inherit;
  border: 1px solid grey;
}
.send {
  padding: 12px;
  border-radius: 6px;
  transform: translate(-5px);
}
.total_amount {
  display: grid;
  grid-template-columns: auto auto;
  gap:  2rem;
}
.price {
  margin-left: auto;
}

@media only screen and (max-width: 640px) {
  .cart {
    padding: 2% 5%;
  }
  thead th:first-child {
    text-align: left;
    padding: 16px 0;
    min-width: 12em;
  }
  .scroll-view {
    display: block;
    overflow-x: scroll;
    white-space: nowrap;
  }
}
</style>
