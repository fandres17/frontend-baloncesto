<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            <form v-on:submit.prevent="processSignUp" id="frm-signup">
                <input type="text" v-model="user.username" placeholder="Username">
                <input type="password" v-model="user.password" placeholder="Password">
                <input type="text" v-model="user.first_name" placeholder="First Name">
                <input type="text" v-model="user.last_name" placeholder="Last Name">
                <input type="text" v-model="user.cedula" placeholder="Cedula">
                <input type="email" v-model="user.email" placeholder="Email">
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SignUp",
    data: function () {
        return {
            user: {
                username: "",
                password: "",
                first_name: "",
                last_name: "",
                cedula:"",
                email: "",
                account: {
                    lastChangeDate: (new Date()).toJSON().toString(),
                    balance: 0,
                    isActive: true
                }
            }
        }
    },
    methods: {
        processSignUp: function () {
            axios.post(
                "https://backend-app-baloncesto2.herokuapp.com/user/",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    let dataSignUp = {
                        username: this.user.username,
                        token_access: result.data.access,
                        token_refresh: result.data.refresh,
                    }

                    this.$emit('completedSignUp', dataSignUp)

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
.signUp_user{
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
    margin: 20px;
}

#frm-signup {

    width: 70%;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.signUp_user input {

    height: 35px;
    width: 100%;
    box-sizing: border -box;
    padding: 10px 20px;
    margin: 5px 0;
    border: 1px solid #283747;

}

.signUp_user button {

    width:  155px;
    height: 40px;
    color: #E5E7E9;
    background: #283747;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 25px;
    margin: 5px 0 25px 0;
    justify-content: center;

}

.signUp_user button:hover {

    color: #E5E7E9;
    background: crimson;
    border: 1px solid #283747;
}
</style>
