import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../routes";

export const useSignup = defineStore("signup", {
  state: () => ({
    isSignup: false,
    user: [],
  }),
  getters: {},
  actions: {
    async signedUp(signupDetails) {
      this.isSignup = true;
      const { email, password } = signupDetails;
      try {
        await createUserWithEmailAndPassword(auth, email, password);
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("Email alredy in use");
            break;
          case "auth/invalid-email":
            alert("Invalid Email");
          default:
            alert("Somrthing went wrong");
            break;
        }
        return;
      }
      this.user = auth.currentUser;
      console.log(this.user);
      //push the router to Login
      router.push("/restaurent");
    },
    async login() {
        //After login pusg the router to Home or Cart
    },

    async logout() {
        this.isSignup = false;
        await signOut(auth)
        this.user = null
        //Push the router to login

    },
  },
});
