<template>
  <div id="app" class="app">
    <div class="header">
      <h1><a v-on:click="loadHome">LA LIGA BKT</a></h1>
      <nav>
        <button class="btn" v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button class="btn" v-if="is_auth" v-on:click="loadResultIndex"> Resultados </button>
        <button class="btn" v-if="is_auth" v-on:click="loadTeamIndex"> Equipos </button>
        <button class="btn" v-if="is_auth" v-on:click="logOut"> Cerrar Sesión </button>
        <button class="btn" v-if="!is_auth" v-on:click="loadLogIn"> Iniciar Sesión </button>
        <button class="btn" v-if="!is_auth" v-on:click="loadSignUp"> Registrarse </button>
        <button class="btn" v-if="!is_auth" v-on:click="loadPreinscription"> Pre-inscribción</button>
        <button class="btn" v-if="!is_auth" v-on:click="loadResults">Resultados</button>
        <button class="btn" v-if="!is_auth" v-on:click="loadTeam">Equipos</button>

      </nav>
    </div>

    <div class="main-component">
      <router-view v-on:completedLogIn="completedLogIn" v-on:completedSignUp="completedSignUp" v-on:logOut="logOut">
      </router-view>
    </div>

    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      is_auth: false
    }
  },
  components: {
  },
  methods: {
    verifyAuth: function () {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false)
        this.$router.push({ name: "home" });
      else
        this.$router.push({ name: "home" });
    },

    loadLogIn: function () {
      this.$router.push({ name: "logIn" })
    },
    loadSignUp: function () {
      this.$router.push({ name: "signUp" })
    },
    loadResults: function () {
      this.$router.push({ name: "results" })
    },
    
    loadPreinscription: function () {
      this.$router.push({ name: "preinscription" })
    },
    completedLogIn: function (data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function (data) {
      alert("Registro Exitoso");
      this.completedLogIn(data);
    },
    
     logOut: function () {
    console.log("logging out")
    localStorage.clear();
    alert("Sesión Cerrada");
    this.verifyAuth();
    },
      loadHome: function () {
    console.log("accediendo a home")
    this.$router.push({ name: "home" });
  },

  loadResultIndex: function () {
    this.$router.push({ name: "indexresult" });
  },
  loadTeam: function () {
  this.$router.push({ name: "team" })
  },
  loadTeamIndex: function() {
  this.$router.push ({name:"indexteam"})
  }
  },
  created: function () {
    this.verifyAuth()
  }
}
</script>

<style>
body {
  margin: 0 0 0 0;
}
*{
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 85px;
  background-color: #bf6719;
  color: #E5E7E9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

.header h1 {
  width: 20%;
  text-align: center;
}
.header h1 a {
 text-decoration: none;
 color: #E5E7E9;
}
.header nav {
  height: 100%;
  width: 750px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 20px;
}

.header nav button {

  color: #E5E7E9;
  background: #283747;
  border: 1px solid #E5E7E9;
  border-radius: 5px;
  padding: 8px 16px;
}

.header nav button:hover {

  color: #283747;
  background: #E5E7E9;
  border: 1px solid #E5E7E9;
}

.main-component {
  height: 90vh;
  margin: 0%;
  padding: 0%;
  background: #FDFEFE;
}

.footer {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 80px;
  background-color: #bf6719;
  color: #E5E7E9;
}

.footer h2 {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn{
  margin:3px;
  width: 140px;
  height: auto;
}
</style>
