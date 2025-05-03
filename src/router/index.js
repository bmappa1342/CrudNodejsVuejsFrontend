import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../components/Login.vue"; // Vérifie le chemin
import Register from "../components/Register.vue";
import BookList from "../components/BookList.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login // Assure-toi que le fichier Login est correctement importé
  },
  {
    path: "/register",
    name: "Register",
    component: Register
  },
  {
    path: "/books",
    name: "BookList",
    component: BookList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
