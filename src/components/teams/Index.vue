<template>
     <div class="content content-result">
        <div class="container">
            <div class="col-md-12">
                <div class="col-md-12">                    
                    <div class="card">
                        <div class="card-header card-header-secondary">
                            <h2 class="card-title">ADMINISTRADOR DE EQUIPOS</h2>
                            <p class="card-category">Equipos registrados</p>
                        </div>
                        <div class="card-body">
                            <div class="row">                                
                                <div class="col-12 text-right" style="display: flex;justify-content:right;">
                                    <button class="btn btn-round btn-sm btn-warning " v-on:click="registerTeam">Registrar equipo</button>
                                </div>
                                <h2 class="subtitle">
                                    <br/>
                                    <!-- <button class="btn btn-secondary bt-1" type="submit" v-on:click="tableFromJson">Create Table from JSON data</button> -->
                                    <p id='showData'></p>
                                </h2>
                            </div>
                            <div class="table-responsive">
                                <table class="table table-striped">
                                    <thead class="text">
                                        <th class="col-md-3 text-center">Nombre</th>
                                        <th class="col-md-3 text-center">Ciudad</th>
                                        <th class="col-md-3 text-center">Correo</th>
                                        <th class="col-md-3 text-center">Acciones</th>                                        
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in resultado" :key="index">
                                        <td class="text-center">{{item.nombreEquipo}}</td>
                                        <td class="text-center">{{item.ciudad}}</td>
                                        <td class="text-center">{{item.correo_electronico}}</td>
                                        <td class="text-center space-between">
                                            <button v-on:click="updateTeam"><i class="material-icons">edit</i></button>
                                            <a :href="updateTeam" class="space-between"><i class="material-icons">delete</i></a>                                            
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <br>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios"
export default{
    name: 'indexteam',
    data (){
        return{
            resultado:[]
        }
    },
    methods: {
        async getResultado (){
            const resp = await axios.get('https://backend-app-baloncesto2.herokuapp.com/teamsread/')
            this.resultado = resp.data
        },
        registerTeam: function(){
        this.$router.push({name: 'createteam'})
        },
        updateTeam: function(){
        this.$router.push({name: 'updateteam'})
        }
    },
    created(){
        this.getResultado()
    },
}
</script>
<style>

</style>