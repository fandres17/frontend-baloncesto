<template>
<div class="content content-createTeam">
    <div class="container">
        <div class="col-md-12">
            <div class="col-me-12">
                <form v-on:submit.prevent="processCreateTeam" id="frm-createTeam">                 
                    <div class="card">
                        <div class="card-header">
                            <h2 class="card-title">Registro de equipos</h2>
                            <p class="card-category">Informacion necesaria</p>
                        </div>
                        <div class="card-body">
                            <div class="col-md-12">
                                <div class="row space-between">
                                    <div class="col-md-5 space">
                                        <div class="row">
                                            <label for="" class="col-form-label col-md-5">Nombre</label>
                                        </div>
                                        <div class="row">
                                            <input class="from-control" type="text"  name="" id="" placeholder="Nombre">                                           
                                        </div>
                                    </div>
                                    <div class="col-md-5 space">
                                        <div class="row">
                                            <label for="" class="col-form-label col-md-5">Ciudad</label>
                                        </div>
                                        <div class="row">
                                            <input class="from-control" type="text"  name="" id="" placeholder="Ciudad">                                     
                                        </div>
                                    </div>
                                </div>
                                <div class="row space-between">
                                    <div class="col-md-5 space">
                                        <div class="row">
                                            <label for="" class="col-form-label col-md-5">Correo</label>
                                        </div>
                                        <div class="row">
                                            <input class="from-control" type="text"  name="" id="" placeholder="Correo">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-hover footer-createTeam">
                            <button class="btn btn-success" type="submit">Guardar</button>
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
export default {
    name:"createTeam",
    methods: {
        indexTeam: function() {
            this.$router.push({name:'indexteam'})
        }
    }
}
</script>
<style>
.content-createTeam{
    margin: 40px;
}
.footer-createTeam{
    margin-left: auto;
    margin-right: auto;
    margin-bottom:15px;
    margin-top: 10px;
}
.space{
    margin: 10px;
}
.space-between{
    margin: 0 10px;
    justify-content: space-between;
}
</style>