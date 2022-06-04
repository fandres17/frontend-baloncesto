<template>
    <div class="content content-createTeam">
        <div class="container">
            <div class="col-md-12">
                <div class="col-me-12">
                    <form id="frm-createTeam">                 
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Actualización de equipos</h2>
                                <p class="card-category">Informacion basica</p>
                            </div>
                            <div class="card-body">
                                <div class="col-md-12">
                                    <div class="row space-between">
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Nombre</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text" v-model="team.nombreEquipo"  name="" id="" placeholder="Nombre">                                           
                                            </div>
                                        </div>
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Ciudad</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text" v-model="team.ciudad"  name="" id="" placeholder="Ciudad">                                     
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row space-between">
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Correo</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text" v-model="team.correo_electronico"  name="" id="" placeholder="Correo">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-hover footer-createTeam">
                                <button class="btn btn-success" type="submit" v-on:click="updateTeam">Guardar</button>
                                <button class="btn btn-danger" v-on:click="indexTeam">Cancelar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default{
    name:'updateteam',
    data (){
        return{
            team:[]
        }
    },
    methods: { 
        indexTeam: function() {
            this.$router.push({name:'indexteam'})
        },
        updateTeam:function() {
            axios.put("https://backend-app-baloncesto2.herokuapp.com/user/teamswrite/"+this.team.id,this.team,{headers:{}})
            .them(data =>{
                console.log(data)
            })
        },
        async getTeam(){
            const resp = await axios.get('https://backend-app-baloncesto2.herokuapp.com/teamsread/')
            this.team = resp.data[1]
        }
    },
    mounted:function(){
    },
    created(){
        this.getTeam()
    }
}
</script>
<style>

</style>