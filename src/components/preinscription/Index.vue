<template>
     <div class="content content-result">
        <div class="container">
            <div class="col-md-12">
                <div class="col-md-12">                    
                    <div class="card">
                        <div class="card-header card-header-secondary">
                            <h2 class="card-title">ADMINISTRADOR DE PREINSCRIPCIONES</h2>
                            <p class="card-category">Lsitado de equipos</p>
                        </div>
                        <div class="card-body">
                            <div class="row">                                
                                <div class="col-12 text-right" style="display: flex;justify-content:right;">
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
                                        <th class="col-md-2 text-center">Equipo</th>
                                        <th class="col-md-2 text-center">Correo</th>
                                        <th class="col-md-2 text-center">Ciudad</th>
                                        <th class="col-md-2 text-center">Encargado</th>
                                        <th class="col-md-2 text-center">Telefono</th>
                                        <th class="col-md-2 text-center">Acciones</th>                                        
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in preinscription" :key="index">
                                        <td class="text-center">{{item.nombreEquipo}}</td>
                                        <td class="text-center">{{item.correo_electronico}}</td>
                                        <td class="text-center">{{item.ciudad}}</td>
                                        <td class="text-center">{{item.nombre_encargado}}  {{apellido_encargado}}</td>
                                        <td class="text-center">{{item.telefono_encargado}}</td>                                                                                
                                        <td class="text-center space-between">
                                            <button class="btn btn-success" >Aceptar</button>                                          
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
    name:'indexpre',
    data(){
        return{
            preinscription: []
        }
    },
    methods:{
        async getPreinscription(){
            const resp = await axios.get('https://backend-app-baloncesto2.herokuapp.com/preinscriptionRead/')
            this.preinscription = resp.data
        }
    },
    created(){
        this.getPreinscription()
    }
}
</script>
<style>

</style>