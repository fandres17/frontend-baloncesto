

import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Home from './components/Home.vue'
import Account from './components/Account.vue'
import PreinscripcionEquipo from './components/PreinscripcionEquipo.vue'
import Results from './components/Results.vue'
import Team from './components/Team.vue'
import Index_Team from './components/teams/Index.vue'
import Create_team from './components/teams/Create.vue'
import Update_team from './components/teams/Update.vue'
import Index_Result from './components/results/Index.vue'
import Create_Result from './components/results/Create.vue'
import Index_Pre from './components/preinscription/Index.vue'


const routes = [{
  path: '/',
  name: 'App',
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
  path: '/home',
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
},
{
  path: '/team',
  name: "team",
  component: Team
},
{
  path: '/team/index',
  name: "indexteam",
  component:Index_Team
},
{
  path: '/team/create',
  name: "createteam",
  component: Create_team
},
{
  path: '/team/update/',
  name: "updateteam",
  component: Update_team
},
{
  path: '/result/index/',
  name: "indexresult",
  component: Index_Result
},
{
  path: '/result/create/',
  name: "createresult",
  component: Create_Result
},
{
  path: '/preinscription/index',
  name:"indexpre",
  component: Index_Pre
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;