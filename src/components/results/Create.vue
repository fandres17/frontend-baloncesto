<template>
    <div class="content content-createTeam">
        <div class="container">
            <div class="col-md-12">
                <div class="col-me-12">
                    <form v-on:submit.prevent="processCreateTeam" id="frm-createTeam">                 
                        <div class="card">
                            <div class="card-header">
                                <h2 class="card-title">Registro de resultados</h2>
                                <p class="card-category">Informacion necesaria</p>
                            </div>
                            <div class="card-body">
                                <div class="col-md-12">
                                    <div class="row space-between">
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Local</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text"  name="" id="" placeholder="Equipo local">                                           
                                            </div>
                                        </div>
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Visitante</label>
                                            </div>
                                            
                                            <div class="row">
                                                <input class="from-control" type="text"  name="" id="" placeholder="Equipo visitante">                                     
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row space-between">
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Marcador local</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text"  name="" id="" placeholder="Marcador local">                                           
                                            </div>
                                        </div>
                                        <div class="col-md-5 space">
                                            <div class="row">
                                                <label for="" class="col-form-label col-md-5">Marcador visitante</label>
                                            </div>
                                            <div class="row">
                                                <input class="from-control" type="text"  name="" id="" placeholder="Marcador visitante">                                     
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-hover footer-createTeam">
                                <button class="btn btn-success" type="submit">Guardar</button>
                                <button class="btn btn-danger" v-on:click="indexResult">Cancelar</button>
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
    name:'',
    methods:{
        indexResult: function() {
            this.$router.push({name: 'indexresult'})
        }
    }
    
}
</script>
<style>

</style>