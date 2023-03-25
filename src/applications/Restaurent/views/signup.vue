<script>
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { ref } from "vue";
import Header from "../components/header.vue";
import Footer from "../components/footer.vue";
import router from "../../../routes";
import pinia from "../../../store/store";
import { useSignup } from "../../../store/signup";

const signup = useSignup(pinia());

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      remember: false,
      errors: "",
      signupForm: ref({}),
    };
  },
  components: {
    Header,
    Footer,
  },
  methods: {
    signup(){
      console.log("signup is clicked");
      const formData = {
        name: this.name,
        email: this.email,
        password: this.password
      }
      signup.signedUp(formData)
  
    },

    handleGoogleSignin() {
      console.log("GoogleSignin is clicked");
      // const provider = new GoogleAuthProvider();

      // signInWithPopup(getAuth(), provider)
      //   .then((result) => {
      //     signup.signedUp();
      //     signup.user.push(result.user);
      //     console.log(signup.isSignup);
      //     console.log(signup.user);
      //     router.push("/restaurent");
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     const credential = GoogleAuthProvider.credentialFromError(error);
      //   });
    },
  },
};
</script>

<template>
  <Header />
  <div class="signup bg-secondary flex justify-center py-32">
    <div class=" bg-white flex flex-col gap-4 shadow-md  rounded-xl">
      <form
        @submit.prevent="handleGoogleSignin"
        class="form flex flex-col gap-4 p-8"
      >
        <h1 class="font-font1 text-text1 text-xl font-bold">Signup</h1>
        <input
          class="h-11 rounded-md"
          id="name"
          type="text"
          name="name"
          v-model="name"
        />
        <input
          class="h-11 rounded-md"
          id="email"
          type="email"
          name="email"
          v-model="email"
        />
        <input
          class="h-11 rounded-md"
          id="passwd"
          type="password"
          name="passwd"
          v-model="password"
        />
        <div class="flex items-center gap-2">
          <input
            class="check-box"
            type="checkbox"
            id="remember"
            name="remember"
            v-model="remember"
          />
          <span class="text-text1 text-sm">Remember me?</span>
        </div>
        <button @click="signup" class="py-2 bg-primary text-white mt-4 rounded">Sign Up</button>
        <p class="text-sm text-text3 mb-4 ml-auto">Forget Password?</p>
      </form>
      <h3 class="text-center p-1 or">OR</h3>
      <!-- <button @click="handleGoogleSignin" class="social-signup flex">
          <img src="../../../assets/restaurent/Google.png" />
          <span class="text">Sign up with Google</span>
        </button>
        <button class="social-signup flex">
          <img src="../../../assets/restaurent/apple.png" />
          <span class="text">Sign up with Apple</span>
        </button> -->
    </div>
  </div>
  <Footer />
</template>

<style scoped>
.text {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.form {
  /* width: 22%; */
  width: 424px;
  box-shadow: 0px 4px 80px rgba(25, 90, 0, 0.2);
}
.form input {
  background-color: inherit;
  border: 1px solid #e0e0e0;
  padding: 0 1em;
}
.form input:focus {
  outline: none;
  background-color: rgba(25, 90, 0, 0.1);
  border: 1px solid rgba(25, 90, 0, 1);
}
.check-box {
  height: 20px;
  width: 20px;
  border: 1px solid #e0e0e0;
  background-color: inherit;
}
.check-box:checked {
  background-color: rgba(25, 90, 0, 1);
}
.social-signup {
  padding: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;
}
</style>
