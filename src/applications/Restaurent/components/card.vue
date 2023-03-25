<script>
export default {
  props: {
    blog: {},
  },
};
</script>
<template>
  <div class="blog-card rounded-md flex flex-col items-center">
    <div class="image">
      <img
        class="rounded-md"
        src="https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
        alt=""
      />
    </div>
    <div class="text p-6">
      <div class="flex gap-2 mb-4">
        <img src="../../../assets/restaurent/Calendar.png" alt="" />
        <span class="font-font1 text-text3 mr-4">{{ blog.date }}</span>
        <img src="../../../assets/restaurent/Chats.png" alt="" />
        <span class="font-font1 text-text3">comments({{ blog.comments }})</span>
      </div>
      <h1 class="text-xl text-text1 font-font1 font-bold mb-3">
        {{ blog.title }}
      </h1>
      <p class="text-text2 mb-3">{{ blog.description }}</p>
      <button class="flex gap-2 mb-4">
        <span class="text-text2 text-sm">read more</span>
        <img src="../../../assets/restaurent/reviewArrow.png" />
      </button>
    </div>
  </div>
</template>
<style scoped>
.image {
  width: 392px;
  height: 312px;
}
.image img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  transform: translateY(-19px);
}
.blog-card {
  background-color: #fff;
  width: 424px;
  height: 570px;
}
.text {
  height: 250px;
}
.text img {
  height: 24px;
  width: 24px;
}
@media only screen and (max-width: 640px){
  .blog-card {
  background-color: #fff;
  width: 100%;
  height: 500px;
} 


.image {
  width: 90%;
  height: 223px;
}
}
</style>
