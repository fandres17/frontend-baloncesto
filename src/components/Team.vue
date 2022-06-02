<template>
    <div class="logIn_user">
        <h2>LA LIGA BTK</h2>
        
        <div class="container_logIn_user">
            <form v-on:submit.prevent="processLogInUser">
                <input type="text"  placeholder="Username" class="form-control">
                <br>
                <input type="password"  placeholder="Password">
                <br>
                <button type="submit">Entrar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    
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