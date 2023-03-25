<script>
export default {
  props: {
    team: {},
  },
  data() {
    return {
      name: "This is a team card",
    };
  },
};
</script>
<template>
  <div class="tcard">
    <div class="tcard-image">
      <div  class="social-container">
        <div class="social facebook">
          <img src="../../../assets/restaurent/facebook.png" alt="facebook" />
        </div>
        <div class="social twitter">
          <img src="../../../assets/restaurent/twittwr.png" alt="twitter" />
        </div>
        <div class="social youtube">
          <img src="../../../assets/restaurent/youtube.png" alt="youtube" />
        </div>
        <div class="social pinterest">
          <img src="../../../assets/restaurent/pinterest.png" alt="pinterest" />
        </div>
      </div>
      <img class="tcardImage" :src="team.imgURL" alt="chef image" />
    </div>
    <div class="tcard-text text-center py-4 max-[640px]: ">
      <h1 class="text-xl max-[640px]:text-sm font-bold text-text1 mb-2 max-[640]:mb-0">{{ team.name }}</h1>
      <p class="text-text3 text-xs">{{ team.position }}</p>
    </div>
  </div>
</template>
<style scoped>
.tcard {
  background-color: #fff;
}
.social {
  height: 35px;
  width: 36px;
  background-color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.social-container {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 25vh;
  left: 7vw;
  gap: 10px;
}
.youtube {
  background-color: orange;
}
.tcard-image {
  height: 310px;
  width: 310px;
  transform: translateY(-171px);
}
.tcardImage {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
@media only screen and (max-width: 640px) {
  .tcard-image {
  height: 150px;
  width: 150px;
  transform: translateY(-120px);
}
.social {
  height: 18px;
  width: 18px;
  padding: 5px;
}
.social-container {
  position: relative;
  display: flex;
  flex-direction: column;
  top: 14vh;
  left: 17vw;
  gap: 10px;
}
}
</style>
