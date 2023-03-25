<script>
import Logo from '../../Restaurent/components/logo.vue'
import { SECTION } from '../Models/restaurentModel';
export default{
data(){
    return{
        section: SECTION,
    }
},
components:{
Logo,

}
}
</script>
<template>
  <div class="footer-main">
    <div class="footer flex justify-between">
      <div class="subscribe flex gap-4 flex-col">
        <Logo />
        <span class="text-lg font-font2 text-text2 mt-2 w-4/6"
          >Subscribe our newsletter and get discount 25%off</span
        >
        <div class="flex">
          <input
            class="subscribe-field h-10"
            type="email"
            placeholder="Enter Your Email"
          />
          <button class="send bg-primary">
            <img src="../../../assets/restaurent/send.png" />
          </button>
        </div>

        <div class="social flex gap-4 my-4">
          <img src="../../../assets/icons/fpinterest.png" alt="pinteresr" />
          <img src="../../../assets/icons/ftwitter.png" alt="twitter" />
          <img src="../../../assets/icons/ffacebook.png" alt="facebook" />
          <img src="../../../assets/icons/finsta.png" alt="instagram" />
          <img src="../../../assets/icons/fyoutube.png" alt="youtube" />
        </div>
      </div>
      <div class="contact flex flex-col gap-2">
        <h3 class="text-text1 font-font1 text-xl font-bold mb-4">{{section.footer.contactDetails.title}}</h3>
        <div class="">
          <img src="../../../assets/icons/MapPin.png" />
          <span>{{section.footer.contactDetails.location}}</span>
        </div>
        <div class="flex">
          <img src="../../../assets/icons/Phone.png" />
          <span>{{section.footer.contactDetails.phoene}}</span>
        </div>
        <div class="">
          <img src="../../../assets/icons/EnvelopeSimpleOpen.png" />
          <span>{{ section.footer.contactDetails.email }}</span>
        </div>
        <div class="">
          <img src="../../../assets/icons/clock.png" />
          <span>{{section.footer.contactDetails.runningTime}}</span>
        </div>
      </div>
      <div class="links flex flex-col gap-2">
         <h3 class="text-text1 font-font1 text-xl font-bold mb-4">Links</h3>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Our Menu</div>
        <div>Team</div>
        <div>Team</div>
        <div>FAQ</div>
      </div>
      <div class="insta ">
        <h3 class="text-text1 font-font1 text-xl font-bold mb-4">Instagram</h3>
        <div class=" flex flex-wrap gap-2 ml-auto justify-center">
          <img v-for="n in 6" class="h-24 w-24 object-cover"  src="https://images.unsplash.com/photo-1552539618-7eec9b4d1796?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=502&q=80" alt="">
        </div>
      </div>
    </div>
    <div class="copy flex bg-primary max-sm:flex-col max-sm:gap-4">
      <span class="max-sm:text-center ">Copyright © 2000-2020.logo.com. All rights reserved</span>
      <div class="privacy flex ml-auto max-sm:ml-0 gap-12 max-sm:justify-around">
        <span> Partner</span>
        <span>Terms of use</span>
        <span>privacy</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.footer {
  background-color: rgb(185, 199, 181);
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
.contact div {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.contact img {
  width: 19.5px;
  object-fit: contain;
}
.copy {
  padding: 22px 15%;
  color: #fff;
}
@media only screen and (max-width: 640px) {
    .footer{
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: 5% 5%;
  }
  .copy{
    padding: 5% 5%;
  }
}
</style>