<script>
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
export default {
  name: "RestuarentAppNotFound",

  data() {
    return {};
  },
  components:{
   Header,
   Footer 
  },
  methods:{
    gotoHome(){
        console.log('home');
    }
  },
};
</script>

<template>
    <Header />
  <div class="nf text-center ">
    <h1 class="font-font1 text-primary font-bold text-8xl mb-8">404</h1>
    <h3 class="font-font1 text-text1 font-bold text-4xl mb-6">Oops! Look likes something going wrong</h3>
    <p class="text-text2 font-font2 text-lg mb-8 desc ">
      Page Cannot be found! we’ll have it figured out in no time. Menwhile,
      cheek out these fresh ideas:
    </p>
    <RouterLink to="/restaurent">
      <button class=" bg-primary text-white px-12 py-4 rounded" @click="gotoHome">Go to Home</button>
    </RouterLink>
  </div>
  <Footer />
</template> 

<style scoped>
.nf {
    padding: 5% 15%;
  height: auto;
  width: 100%;
  background-color: #e5e5e5;
}
.desc{
    padding: 0 23em;
}
</style>
