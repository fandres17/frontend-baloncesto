<template>
    <div class="content content-result">
        <div class="container">
            <div class="col-md-12">
                <div class="col-md-12">                    
                    <div class="card">
                        <div class="card-header card-header-secondary">
                            <h2 class="card-title">ADMINISTRADOR DE RESULTADOS</h2>
                            <p class="card-category">Resultados registrados</p>
                        </div>
                        <div class="card-body">
                            <div class="row">                                
                                <div class="col-12 text-right" style="display: flex;justify-content:right;">
                                    <button class="btn btn-round btn-sm btn-warning " v-on:click="createResult">Registrar resultado</button>
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
                                        <th class="col-md-3 text-center">Local</th>
                                        <th class="col-md-3 text-center">Marcador</th>
                                        <th class="col-md-3 text-center">Visitante</th>
                                        <th class="col-md-3 text-center">Acciones</th>                                        
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in equipos" :key="index">
                                        <td  class="text-center">{{item.equipo_local}}</td>
                                        <td  class="text-center">{{item.marcador_local}}  -  {{item.marcador_visita}}</td>
                                        <td  class="text-center">{{item.equipo_visita}}</td>
                                        <td class="text-center">
                                            <a href="" class="space-between"><span class="material-icons">mode_edit</span></a>
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
import axios from 'axios'
export default{
    name: 'results',
    data (){
        return{
            equipos:[]
        }
    },
    methods: {
        async getEquipos (){
            const resp = await axios.get('https://backend-app-baloncesto2.herokuapp.com/results/')
            this.equipos = resp.data
        },
        createResult: function() {
            this.$router.push({name:'createresult'})
        }
    },
    created(){
        this.getEquipos()
    }
}
</script>
<style>

</style>