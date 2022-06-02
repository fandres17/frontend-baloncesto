<template>
     <div class="content content-result">
        <div class="container">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header text-center">
                        <h2>LISTADO DE EQUIPOS</h2>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <h2 class="subtitle">
                                <br>
                                <!-- <button class="btn btn-secondary bt-1" type="submit" v-on:click="tableFromJson">Create Table from JSON data</button> -->
                                <p id='showData'></p>
                            </h2>
                        </div>
                        <div class="table-responsive">
                            <table class="table table-hover">
                                <thead class="text">
                                    <th class="col-md-4 text-center">Nombre</th>
                                    <th class="col-md-4 text-center">Ciudad</th>
                                    <th class="col-md-4 text-center">Correo</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(item,index) in resultado" :key="index">
                                        <td class="text-center">{{item.nombreEquipo}}</td>
                                        <td class="text-center">{{item.ciudad}}</td>
                                        <td class="text-center">{{item.correo_electronico}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>

</template>

<script>
import axios from "axios";
export default{
    name: 'results',
    data (){
        return{
            resultado:[]
        }
    },
    methods: {
        async getResultado (){
            const resp = await axios.get('https://backend-app-baloncesto2.herokuapp.com/teamsread/')
            this.resultado = resp.data
        }
    },
    created(){
        this.getResultado()
    }
}
</script>
<style>
.logIn_user {
    margin: 20px;
    padding: 0%;
    height: 100%;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
}

.container_logIn_user {
    border: 3px solid #283747;
    border-radius: 10px;
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.logIn_user h2 {
    color: #283747;
}

.logIn_user form {
    width: 70%;
}

.logIn_user input {
    height: 40px;
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;
}

.logIn_user button {
    width: 100%;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0;
}

.logIn_user button:hover {
    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>