<script>
import IconSearch from "../../../assets/icons/icon-search.vue";

import Search from "../../../assets/icons/icon-search.vue";
export default {
  name: "RestuarentAppSearchbar",

  data() {
    return {};
  },

  components: {
    Search,
  },
  methods: {},
};
</script>

<template>
  <div>
    <div class="flex">
      <input
        class="subscribe-field h-12 w-full"
        type="email"
        placeholder="Enter Here Code"
      />
      <button class="send bg-primary ">
        <span class="text-white"> <Search /> </span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.subscribe-field {
    background-color: rgba(25, 90, 0, 0.1);
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  padding-left: 20px;
  border: 1px solid grey;
}
.send {
  padding: 12px;
  border-radius: 6px;
  transform: translate(-5px);
  z-index: 0;
}
</style>
