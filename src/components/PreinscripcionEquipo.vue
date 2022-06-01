<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Preinscribir Equipo al torneo</h2>
            <form v-on:submit.prevent="processSignUp">

                <input type="text" v-model="preinscripcion.nombreEquipo" placeholder="Nombre de equipo">
                <br>
                <input type="email" v-model="preinscripcion.correo_electronico" placeholder="Correo electronico">
                <br>
                <input type="text" v-model="preinscripcion.ciudad" placeholder="Ciudad">
                <br>
                <input type="text" v-model="preinscripcion.nombre_encargado" placeholder="Nombre encargado">
                <br>
                <input type="text" v-model="preinscripcion.apellido_encargado" placeholder="Apellido encargado">
                <br>
                <input type="text" v-model="preinscripcion.telefono_encargado" placeholder="Teléfono">
                <br>
                <input type="date" v-model="preinscripcion.fecha_preinscripcion" placeholder="Fecha de preinscripcion">
                <br>
                <button type="submit">Registrar Equipo</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "Preinscription",
    data: function () {
        return {
            preinscripcion: {
                nombreEquipo: "",
                correo_electronico: "",
                ciudad: "",
                nombre_encargado:"",
                apellido_encargado: "",
                telefono_encargado:"",
                fecha_preinscripcion: "",
               
            }
        }
    },
    methods: {
        processSignUp: function () {
            axios.post(
                "https://backend-app-baloncesto2.herokuapp.com/preinscription/",
                this.preinscripcion,
                { headers: {} }
            )
                .then((result) => {
                    let dataRegister=true
                    alert("Preinscripción de equipo exitosa");
                    this.$router.push({ name: "results" });
                })
                .catch((error) => {
                    console.log(error)

                    alert("ERROR: Fallo en el registro.");
                });
        }
    }
}
</script>

<style>
.signUp_user {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container_signUp_user {
    border: 3px solid #283747;

    border-radius: 10px;

    width: 45%;
    height: auto;
    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

}

.signUp_user h2 {
    color: #283747;

}

.signUp_user form {

    width: 60%;
    height: 550px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signUp_user input {

    height: 40px;
    width: 100%;

    box-sizing: border -box;

    padding: 10px 20px;

    margin: 5px 0;
    border: 1px solid #283747;

}

.signUp_user button {

    width: 155px;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    justify-content: center;
    border: 1px solid #E5E7E9;

    border-radius: 5px;

    padding: 10px 25px;

    margin: 5px 0 25px 0;

}

.signUp_user button:hover {

    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>
