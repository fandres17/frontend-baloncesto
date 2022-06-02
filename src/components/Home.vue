<template>
    <div class="greetings">
        <div>
            <h1>¡Bienvenido!</h1>
        </div>
        <div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data: function () {
        return {
            username: localStorage.getItem('username') || "none"
        }
    }
}
</script>

<style>
.greetings {
    margin: 0;
    padding: 0%;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.greetings h1 {
    font-size: 50px;
    color: #283747;
}

.greetings span {
    color: crimson;
    font-weight: bold;
}
</style>