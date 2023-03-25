<script>
import Footer from './components/footer.vue'
import Logo from "./components/logo.vue";
import Shop from "../../assets/icons/icon-shop.vue";
import Search from "../../assets/icons/icon-search.vue";
import User from "../../assets/icons/icon-user.vue";
import Bars from "../../assets/icons/icon-bars.vue";
import Close from "../../assets/icons/icon-close.vue";
import Play from "../../assets/icons/icon-play.vue";
import Tcard from "./components/team-card.vue";
import Card from "./components/card.vue";
import { FEATURE } from "./Models/cofee";
import {
  SECTION,
  MENU,
  FOODCATAGORY,
  FEATURES,
  TEAMS,
  REVIEW,
  BLOG,
} from "./Models/restaurentModel";

export default {
  data() {
    return {
      feature: FEATURE,
      navigation: ["Home", "Menu", "Blog", "Pages", "About", "Shop", "Contact"],
      screenWidth: screen.width,
      isOpen: false,
      section: SECTION,
      catagory: FOODCATAGORY,
      features: FEATURES,
      menu: MENU,
      teams: screen.width > 650 ? TEAMS : TEAMS.slice([0], [2]),
      review: REVIEW,
      blog: BLOG,
      menuCatagory: {},
      isModalOpen: false,
      isSocial: false,
      tabIndex: 0,
      reviewIndex: 0,
      yOffset: window.scrollY,
      social: ["facebook", "twitter", "pinterest", "youtube"],
      setMenuIndex: "Breakfast",
      carousel: {
        currentOffset: 0,
        windowSize: 3,
        paginationFactor: screen.width < 650 ? 188 : 333,
      },
    };
  },
  components: {
    Logo,
    Shop,
    Search,
    User,
    Bars,
    Close,
    Play,
    Tcard,
    Card,
    Footer,
  },
  computed: {
    atEndOfReview() {},
    atEndOfList() {
      return (
        this.carousel.currentOffset <=
        this.carousel.paginationFactor *
          -1 *
          (this.catagory.length - 1 - this.carousel.windowSize)
      );
    },
    endOfReviewList() {
      return this.reviewIndex === this.review.length - 1;
    },
    aheadOfReviewList() {
      return this.reviewIndex === 0;
    },
    getMenuCatagory() {
      // return Object.keys(Object.assign({ ...this.menu }));
      return Object.keys(this.menu);
    },
    atHeadOfList() {
      return this.carousel.currentOffset === 0;
    },
  },

  methods: {
    getScreenResolution() {
      console.log(this.modalOffset);
    },

    setTabIndex(i) {
      this.tabIndex = i;
    },

    addIndex() {
      if (!this.endOfReviewList) {
        this.reviewIndex++;
      }
    },
    removeIndex() {
      if (!this.aheadOfReviewList) {
        this.reviewIndex--;
      }
    },
    openMenu() {
      this.isOpen = true;
    },
    closeMenu() {
      this.isOpen = false;
    },
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.carousel.currentOffset -= this.carousel.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.carousel.currentOffset += this.carousel.paginationFactor;
      }
    },
    openModal() {
      this.isModalOpen = true;
      console.log(this.pageYOffset);
      document.body.style.overflowY = "hidden";
    },
    closeModal() {
      this.isModalOpen = false;
      document.body.style.overflowY = "scroll";
    },
    imagePath(imgName) {
      return `../../assets/restaurent/${imgName}.png`;
    },
    pageYOffset() {
      return `${window.scrollY}px`;
    },
    modalOffset() {
      return `${window.scrollY + 150}px`;
    },
  },
};
</script>

<template>
  <div class="restaurent">
    <div class="hero-header">
      <div class="bg flex absolute right-0 z-0">
        <img
          v-if="screenWidth > 600"
          class="bg1"
          :src="'../../src/assets/restaurent/Bg.png'"
          alt="Background"
        />
        <img
          v-else
          class="bg1"
          :src="'../../src/assets/restaurent/bg-new.png'"
          alt="Background"
        />
        <img
          v-if="screenWidth > 600"
          class="bg2 absolute -left-36 top-32"
          :src="'../../src/assets/restaurent/bg2.png'"
          alt="Hero Background"
        />
        <img
          v-else
          class="bg2 absolute -left-16 top-24 scale-125"
          :src="'../../src/assets/restaurent/bg2.png'"
          alt="Hero Background"
        />
      </div>
    </div>
    <div class="navbar flex relative z-10 py-16 max-[640px]:pt-4 text-text1">
      <button v-if="screenWidth < 650" class="mr-7" @click="openMenu">
        <Bars />
      </button>
      <div class="logo"><Logo /></div>
      <div
        v-if="this.screenWidth > 700"
        class="navigation flex justify-between gap-7 mr-7"
      >
        <div v-for="nav in navigation">
          {{ nav }}
        </div>
      </div>
      <div class="icon-group text-white flex grow justify-end">
        <Search />
        <RouterLink to="restaurent/signup"> 
            <User />
        </RouterLink>
        <Shop />
        
      </div>
    </div>
    <Transition>
      <div
        v-if="isOpen"
        class="side-nav-bar text-text1 absolute top-0 left-0"
        @wheel.prevent
        @touchmove.prevent
        @scroll.prevent
      >
        <div class="flex gap-3 mb-4">
          <button @click="closeMenu"><Close /></button><Logo />
        </div>
        <div class="mb-4 ml-4" v-for="navItem in navigation">{{ navItem }}</div>
      </div>
    </Transition>

    <div class="header justify-start flex align-middle">
      <div>
        <h3 class="head-2 font-font3 text-primary text-xl mb-6">
          {{ section.hero.subTitle }}
          <div class="line text-primary"></div>
        </h3>
        <h1 class="hero-head block font-font1 text-text1 font-bold mb-8">
          {{ section.hero.title }}
          <div class="inline-block">
            <img
              v-if="screenWidth > 640"
              class="translate-y-5"
              :src="'../../src/assets/restaurent/Group.png'"
              alt="Hero Background"
            />
          </div>
        </h1>
        <p class="text-text2 font-font2 text-base w-9/12">
          {{ section.hero.description }}
        </p>
        <div class="button-group flex gap-4 py-6">
          <button class="btn-primary rounded-md">Show more</button>
          <button
            class="btn-primary-outline rounded-md"
            @click="getScreenResolution"
          >
            Place an order
          </button>
        </div>
      </div>
    </div>
    <div class="flex gap-3 items-center py-10 max-[640px]:py-4 flex-col">
      <p class="text-text3">Scrolldowan</p>
      <div class="vr-line bg-text3"></div>
    </div>

    <div class="about col-2 my-25 max-[640px]:my-4">
      <div class="about-image">
        <img
          :src="'../../src/assets/restaurent/decoLeaf.png'"
          alt="Decoration Leaf"
          class="decorImage"
        />
        <img :src="'../../src/assets/restaurent/about.png'" alt="About Image" />
      </div>
      <div class="about-text flex flex-col m-auto p-16 max-sm:p-0">
        <h3 class="head-2 font-font3 text-primary text-xl mb-6">
          {{ section.about.subTitle }}
          <div class="line text-primary"></div>
        </h3>
        <h1 class="about-head block font-font1 text-text1 font-bold mb-8">
          {{ section.about.title }}
        </h1>
        <p class="text-text3 font-font2 text-base">
          {{ section.about.description }}
        </p>
        <div class="flex gap-4 my-8 items-center">
          <button class="btn-primary rounded">Show more</button>
          <div @click="openModal" class="flex items-center gap-2">
            <button class="playflex bg-primary p-4 rounded-full">
              <Play />
            </button>
            <span class="text-base text-text2 font-bold cursor-pointer"
              >Watch video</span
            >
          </div>
        </div>

        <Teleport to="#modal">
          <div v-if="isModalOpen">
            <div class="flex justify-center items-center">
              <div
                class="backdrop"
                @click="closeModal"
                :style="{ top: pageYOffset() }"
              ></div>
              <div
                :style="{ top: modalOffset() }"
                class="modal h-2/3 w-2/3 max-[640px]:w-4/5 max-[640px]:h-auto"
              >
                <iframe
                  @wheel.prevent
                  @touchmove.prevent
                  @scroll.prevent
                  class="h-full w-full"
                  src="https://www.youtube.com/embed/9VtxCxtsMAI"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </Teleport>
      </div>
    </div>
    <div class="catagory my-36 max-[640px]:my-24">
      <div class="flex items-center flex-col">
        <h1
          class="about-head block font-font1 text-text1 font-bold text-center"
        >
          {{ section.catagory.title }}
        </h1>
        <p
          class="text-text3 font-font2 text-base text-center my-3 mb-16 max-[640px]:mb-8 max-w-sm"
        >
          {{ section.catagory.description }}
        </p>
      </div>

      <div
        class="carousel-wrapper flex items-center justify-center text-primary"
      >
        <button
          class="carousel-nav-left h-14 w-14 rounded bg-primary flex justify-center items-center mr-1 z-0"
          @click="moveCarousel(-1)"
          :disabled="atHeadOfList"
        >
          <img
            :src="'../../src/assets/restaurent/arrow.png'"
            class="rotate-180"
            :class="atHeadOfList ? 'invert' : ''"
          />
        </button>
        <div class="carousel flex justify-center">
          <div class="carousel-overflow-container overflow-hidden">
            <div
              class="carousel-cards flex"
              :style="{
                transform:
                  'translateX' + '(' + carousel.currentOffset + 'px' + ')',
              }"
            >
              <div
                v-for="cat in catagory"
                class="carousel-card mx-2 cursor-pointer text-center"
              >
                <div class="car-img-div">
                  <img
                    :src="cat.imgUrl"
                    alt="About Image"
                    class="select-none carousel-image"
                  />
                </div>
                <p class="text-text2 font-font1 font-bold text-xl my-3">
                  {{ cat.title }}
                </p>
                <p class="text-text3 mb-4">{{ cat.noOfItems }} Items</p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-nav-right h-14 w-14 rounded bg-primary flex justify-center items-center ml-1 z-0"
          @click="moveCarousel(1)"
          :disabled="atEndOfList"
        >
          <img
            :src="'../../src/assets/restaurent/arrow.png'"
            class="rotate-0"
            :class="atEndOfList ? 'invert' : ''"
          />
        </button>
      </div>
    </div>
    <div class="choose-section col-2 my-20 max-[640px]:16">
      <div class="choose-img-section">
        <img
          :src="'../../src/assets/restaurent/choose.png'"
          class="object-scale-down"
        />
      </div>
      <div class="flex justify-end flex-col m-auto p-16 max-sm:p-0">
        <h3 class="head-2 font-font3 text-primary text-xl mb-6">
          {{ section.whyChoose.subTitle }}
          <div class="line text-primary"></div>
        </h3>
        <h1 class="about-head block font-font1 text-text1 font-bold mb-6">
          {{ section.whyChoose.title }}
        </h1>

        <div>
          <p
            v-for="details in features[tabIndex].description"
            class="text-text3 font-font2 text-base pb-4"
          >
            {{ details }}
          </p>
        </div>

        <div class="flex gap-4 flex-wrap transition-all">
          <button
            class="flex items-center justify-center gap-2 bg-white px-2 py-3 btn-feature rounded-md"
            v-for="(data, index) in features"
            @click="setTabIndex(index)"
          >
            <img
              :src="`../../src/assets/restaurent/${data.imgName}.png`"
              :alt="data.title"
            />
            <span class="font-font1 text-xl text-text2 font-bold">{{
              data.title
            }}</span>
          </button>
        </div>
      </div>
    </div>
    <!-- Food Menu Section -->
    <div class="foodMenu my-36">
      <div class="flex items-center flex-col">
        <h1
          class="about-head block font-font1 text-text1 font-bold text-center"
        >
          {{ section.foodMenu.title }}
        </h1>
        <p
          class="text-text3 font-font2 text-base text-center my-3 mb-16 max-w-sm"
        >
          {{ section.foodMenu.description }}
        </p>
      </div>
      <div class="menuSection">
        <div class="btn-group-menu flex justify-center flex-wrap gap-12">
          <button
            class="pb-6 text-xl text-text3"
            v-for="(menuTitle, index) in getMenuCatagory"
            @click="() => (setMenuIndex = menuTitle)"
          >
            {{ menuTitle }}
          </button>
        </div>
        <div class="menu-items py-16">
          <div
            v-for="items in menu[setMenuIndex]"
            class="menu-item flex items-center my-4 border-b-2"
          >
            <div class="flex flex-col gap-2">
              <h1 class="text-2xl font-bold text-text1">{{ items.name }}</h1>
              <p class="text-base text-text2 font-font1">
                {{ items.description }}
              </p>
              <p class="text-text3 mb-4">{{ items.cal }}</p>
            </div>
            <div class="self-start ml-auto">
              <span class="text-xl font-bold font-font1 text-primary"
                >₹{{ items.price }}</span
              >
            </div>
          </div>
        </div>
        <div class="flex justify-center">
          <button @click="openModal" class="btn-primary-outline">
            View Menu
          </button>
        </div>
      </div>
    </div>
    <div class="teamSection mt-32 mb-96 max-[640px]:mb-0">
      <div class="div">
        <div class="team-text flex flex-col items-center justify-center">
          <h1
            class="about-head block font-font1 text-white font-bold text-center"
          >
            {{ section.teamMember.title }}
          </h1>
          <img src="../../assets/" alt="" />
          <p
            class="text-white font-font2 text-base my-3 mb-16 max-[640px]:mb-0 max-w-sm"
          >
            {{ section.teamMember.description }}
          </p>
        </div>
        <div class="members flex justify-center gap-6 flex-wrap">
          <div v-for="team in teams">
            <Tcard :team="team" />
          </div>
        </div>
      </div>
    </div>
    <div class="review-section col-2">
      <div
        class="review-text flex flex-col justify-start pb-16 pr-20 max-[640px]:pr-0"
      >
        <div></div>

        <h3 class="head-2 font-font3 text-primary text-xl">
          {{ section.testimonials.subTitle }}
          <div class="line text-primary"></div>
        </h3>
        <h1 class="about-head block font-font1 text-text1 font-bold">
          {{ section.testimonials.title }}
        </h1>
        <img
          class="h-14 w-14 mb-8"
          src="../../assets/restaurent/Quotes.png"
          alt="Quote"
        />

        <p class="text-text3 font-font2 text-base mb-2 h-28 max-sm:h-48">
          {{ review[reviewIndex].review }}
        </p>

        <div class="user-section mt-4 flex items-center">
          <div class="user-details flex gap-4 items-center">
            <img
              :src="review[reviewIndex].profileUrl"
              :alt="review[reviewIndex].profileName"
            />
            <div>
              <h2 class="text-lg text-text1">
                {{ review[reviewIndex].profileName }}
              </h2>
              <p class="text-text3">{{ review[reviewIndex].role }}</p>
            </div>
          </div>

          <div class="navigation-btn-group ml-auto">
            <button
              @click="removeIndex"
              class="right-btn mr-2 disabled:opacity-20 active:scale-110 active:rotate-180"
              :disabled="aheadOfReviewList"
            >
              <img src="../../assets/restaurent/reviewArrow.png" alt="" />
            </button>
            <button
              @click="addIndex"
              class="disabled:opacity-20 active:scale-110"
              :disabled="endOfReviewList"
            >
              <img src="../../assets/restaurent/reviewArrow.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <div class="review-image flex-col">
        <img
          class="object-contain ml-8"
          src="../../assets/restaurent/review.png"
          alt=""
        />
        <div class="rating shadow-xl p-8 max-sm:p-3 rounded-md">
          <div class="flex">
            <h1 class="text-xl max-sm:text-sm font-bold text-text1">
              {{ section.testimonials.foodReview.head }}
            </h1>
            <h3 class="ml-auto font-bold text-base max-sm:text-sm text-text2">
              10.00$
            </h3>
          </div>
          <div class="flex my-3">
            <img
              v-for="n in 5"
              src="../../assets/restaurent/star.png"
              alt="start"
            />
          </div>
          <p class="text-text3 max-sm:text-xs">
            {{ section.testimonials.foodReview.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="blog-section">
      <div class="flex items-center flex-col">
        <h1
          class="about-head block font-font1 text-text1 font-bold text-center"
        >
          {{ section.blog.title }}
        </h1>
        <p
          class="text-text3 font-font2 text-base text-center my-3 mb-16 max-w-sm"
        >
          {{ section.blog.description }}
        </p>
      </div>
      <div
        class="cards flex gap-12 justify-center max-sm:flex-wrap max-sm:justify-center"
      >
        <div v-for="bg in blog">
          <Card :blog="bg" />
        </div>
      </div>
    </div>
    <div class="partner-section py-32">
      <div class="flex items-center flex-col mb-14">
        <h3 class="head-2 font-font3 text-primary text-xl">
          {{ section.partners.subTitle }}
          <div class="line text-primary"></div>
        </h3>
        <h1
          class="about-head block font-font1 text-text1 font-bold text-center"
        >
          {{ section.partners.title }}
        </h1>
      </div>
      <div class="partnerImage flex justify-between flex-wrap">
        <img src="../../assets/restaurent/p1.png" alt="" />
        <img src="../../assets/restaurent/p2.png" alt="" />
        <img src="../../assets/restaurent/p3.png" alt="" />
        <img src="../../assets/restaurent/p4.png" alt="" />
        <img src="../../assets/restaurent/p5.png" alt="" />
        <img src="../../assets/restaurent/p6.png" alt="" />
      </div>
    </div>
  </div>
  <Footer />
 
</template>

<style scoped>

.restaurent {
  background-color: #e5e5e5;
  padding: 0 15%;
  scroll-behavior: smooth;
}
.icon-group {
  margin-left: 20vw;
  gap: 2.5rem;
}
.header {
  display: flex;
  flex: 29.5%;
  max-width: 29.5vw;
  height: 65vh;
  align-items: center;
}
.hero-head {
  font-size: 60px;
}
.bg {
  flex: 35%;
  max-width: 45vw;
}
.line {
  background-color: rgb(25, 90, 0);
  display: inline-block;
  width: 27px;
  height: 1px;
  margin-left: 1.5em;
}
.btn-primary {
  padding: 16px 48px;
  background-color: rgb(25, 90, 0);
  color: #fff;
}
.btn-primary-outline {
  padding: 15px 47px;
  color: rgb(25, 90, 0);
  border: 1px solid rgb(25, 90, 0);
}
.decorImage {
  position: absolute;
  left: 0;
  margin-top: 60vh;
}
.vr-line {
  height: 60px;
  width: 1px;
}
.navigation {
  margin-left: 9vw;
}
.about {
  margin: 5vw 0;
}

.about-head {
  font-size: 48px;
}
.carousel {
  /* width: 1235px; */
  width: 100%;
}
.carousel-nav-left:disabled,
.carousel-nav-right:disabled {
  background-color: rgba(25, 90, 0, 0.3);
  border-color: black;
}
.carousel-nav-left {
  position: absolute;
  left: 11%;
}
.carousel-nav-right {
  position: absolute;
  right: 11%;
}
.carousel-nav-right:active {
  transform: scale(0.9);
}
.carousel-cards {
  transition: transform 150ms ease-out;
  transform: translatex(0px);
}
.carousel-card:first-child {
  margin-left: 0;
}
.carousel-card:last-child {
  margin-right: 0;
}

.carousel-cards > div {
  flex: 20%;
  max-width: 24%;
  min-width: 24%;
}
.car-img-div {
  height: 350px;
  max-height: 350px;
}
.car-img-div > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.invert {
  filter: invert(100%);
}
.vedeoModal {
  height: 100vh;
  width: 100vw;
}
.backdrop {
  position: absolute;
  left: 0;
  /* top: 100vh; */
  height: 100vh;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.982);
  display: fixed;
  justify-content: center;
  align-items: center;
}
.modal {
  position: absolute;
  left: 17vw;
  background-color: #000;
}
.choose-section {
  align-items: start;
}
.btn-feature {
  transition: all 0.3s;
  /* border: 8px solid #fff; */
  background-color: #fff;
  flex: 100%;
  max-width: 47%;
  min-width: 47%;
}
.btn-feature:focus {
  border-left: 6px solid rgb(25, 90, 0);
}
.btn-group-menu {
  border-bottom: 2px solid #d4d3d3;
}
.btn-group-menu button {
  border: 2px solid transparent;
  transform: translateY(2px);
  transition: all 0.4s ease-in-out;
}
.btn-group-menu button:focus {
  border-bottom: 2px solid rgb(25, 90, 0);
  color: rgb(25, 90, 0);
}
.menu-items {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 2rem;
}
.div {
  height: 460px;
  background: linear-gradient(0deg, rgba(25, 90, 0, 0.9), rgba(25, 90, 0, 0.9)),
    url(../../assets/restaurent/teamBg.png);
  background-position: center;
  margin: 0 calc(21% * -1);
}
.team-text {
  padding-top: 5%;
}
.user-details img {
  height: 72px;
  width: 72px;
  border-radius: 50%;
  object-fit: cover;
}
.right-btn {
  transform: rotate(180deg);
}
.rating {
  height: 213px;
  /* width: 434px; */
  width: 22vw;
  background-color: #fff;
  position: relative;
  top: calc(-213px + 26px);
  left: -36px;
}
.footer {
  /* background:red, #fff; */
  background-color: #b9c7b5;
  padding: 5% 15%;
  display: grid;
  grid-template-columns: 25% 27% auto 25%;
}
.footer .subscribe-field {
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
  padding-left: 20px;
}
.footer .send {
  padding: 12px;
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
}
.footer .subscribe-field:focus {
  outline: none;
}

@media only screen and (max-width: 1450px) {
  .restaurent {
    padding: 0 10%;
  }
  .bg {
    flex: 35%;
    max-width: 40vw;
  }
  .header {
    height: 60vh;
  }
  .vr-line {
    height: 40px;
    width: 1px;
  }
  .carousel-nav-left {
    left: 5%;
  }
  .carousel-nav-right {
    right: 5%;
  }
  .carousel-cards > div {
    flex: 30%;
    max-width: 35%;
    min-width: 35%;
    max-height: 250px;
  }
}

@media only screen and (max-width: 640px) {
  .restaurent {
    padding: 0 5%;
    overflow: hidden;
  }
  .navbar {
    display: block;
  }
  .hero-head {
    font-size: 40px;
    line-height: 48px;
    margin-right: 2vw;
  }
  .icon-group {
    margin-left: 8vw;
    gap: 1rem;
  }
  .bg {
    flex: 95%;
    max-width: 75%;
  }
  .header {
    flex: 89.5%;
    max-width: 89.5vw;
    margin-top: 35vh;
  }
  .btn-primary-outline,
  .btn-primary {
    padding: 8px 28px;
  }
  .side-nav-bar {
    background-color: rgb(255, 255, 255);
    width: 100vw;
    height: 100vh;
    z-index: 20;
    padding: 1em;
    transition: all 3s;
  }
  .decorImage {
    transform: scale(0.28);
    left: -90px;
    margin-top: 20vh;
  }
  .about-head {
    font-size: 40px;
    line-height: 48px;
  }
  .v-enter-active,
  .v-leave-active {
    transition: all 0.5s ease;
  }
  .v-enter-from,
  .v-leave-to {
    transform: translateX(-100vw);
  }
  .carousel-wrapper {
    margin-bottom: 20vh;
  }
  .carousel-nav-left,
  .carousel-nav-right {
    margin-top: 35vh;
    height: 32px;
    width: 32px;
  }
  .carousel-nav-left {
    left: 30%;
  }
  .carousel-nav-right {
    right: 30%;
  }
  .carousel-cards > div {
    flex: 25%;
    max-width: 48%;
    min-width: 48%;
    max-height: 250px;
    height: 185px;
    background-color: rgba(25, 90, 0, 1);
  }
  .btn-feature {
    flex: 100%;
    max-width: 100%;
    min-width: 100%;
  }
  .modal {
    position: absolute;
    top: 150vh;
    margin: 10vh auto 0;
    transform: translateY(-50%);
  }
  .div {
    height: 286px;
  }
  .btn-group-menu button {
    /* border-bottom: 2px solid #d4d3d3; */
    flex: 20%;
    min-width: 20%;
  }
  .menu-items {
    display: grid;
    grid-template-columns: auto;
    column-gap: 2rem;
  }
  .teamSection {
    margin-bottom: 13em;
  }
  .review-text {
    padding-right: 0px;
  }
  .rating {
    height: 130px;
    width: 73vw;
    position: relative;
    top: calc(-136px + 26px);
    left: 0;
  }
  .partnerImage {
    justify-content: center;
  }
  .partnerImage img {
    max-width: 30%;
    object-fit: scale-down;
  }
  .footer {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5% 5%;
  }
  .copy {
    padding: 5% 5%;
  }
}
</style>
