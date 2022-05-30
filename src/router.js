

import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import PreinscripcionEquipo from './components/PreinscripcionEquipo.vue'
import Results from './components/Results.vue'

const routes = [{
  path: '/',
  name: 'root',
  component: App
},
{
  path: '/user/logIn',
  name: "logIn",
  component: LogIn
},
{
  path: '/user/signUp',
  name: "signUp",
  component: SignUp
},
{
  path: '/user/home',
  name: "home",
  component: Home
},
{
  path: '/user/account',
  name: "account",
  component: Account
},
{
  path: '/user/preinscription',
  name: "preinscription",
  component: PreinscripcionEquipo
},
{
  path: '/user/results',
  name: "results",
  component: Results
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;