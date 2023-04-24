import { defineStore } from "pinia";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
import router from "../routes";

export const useSignup = defineStore("signup", {
  state: () => ({
    isUthenticated: false,
    isRegister: true,
    user: [],
  }),
  getters: {},

  actions: {
    async signedUp(signupDetails) {
      console.log("signup called");
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
      this.isRegister = false;
      console.log(this.isRegister);
    },

    async login(signupDetails) {
      console.log("login called");
      this.isSignup = true;
      const { email, password } = signupDetails;
      try {
        await signInWithEmailAndPassword(auth, email, password);
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
      localStorage.setItem('user', JSON.stringify(this.user))
      //After login pusg the router to Home or Cart
      router.push("/restaurent/cart");
      console.log(JSON.parse (localStorage.getItem('user'))); 
    },

    async googleSignin() {
      console.log("GoogleSignin is clicked");
      const provider = new GoogleAuthProvider();

      signInWithPopup(getAuth(), provider)
        .then((result) => {
          // this.user.push(result.user);
          this.isRegister = false;
          localStorage.setItem('user', JSON.stringify(result.user))
          router.push('/cart')
        })
        .catch((error) => {
          console.log(error);
          const credential = GoogleAuthProvider.credentialFromError(error);
        });
    },

    async logout() {
      this.isUthenticated = false;
      await signOut(auth);
      this.user = null;
      localStorage.removeItem('user')
      //Push the router to login  
      router.push("/auth");
      console.log('logout success');
    },

  },
});
