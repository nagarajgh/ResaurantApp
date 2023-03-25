import StickyNote from '../applications/sticky-note/board.vue'
import Restaurent from '../applications/Restaurent/restaurent.vue'
import Signup from '../applications/Restaurent/views/signup.vue'
import Home from '../home.vue'
let routes = [
    {
        path: "/",
        name: "home",
        component: Home,
        meta:{
            requiresAuth: true
        }
    },
    {
        path: "/sticky-note",
        name: "sticky-note",
        component: StickyNote
    },
    {
        path: "/restaurent",
        name: "restaurent",
        component: Restaurent
    },
    {
        path: "/restaurent/signup",
        name: "signup",
        component: Signup
    }
]
export default routes