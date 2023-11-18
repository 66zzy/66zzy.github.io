<template>
    <div>
        <img src="src/assets/speit.png" alt="speit" id="back"/>
    </div>
    <div id="pgpg">
    <router-link to="/cj">
            <img src="src/assets/抽奖.png" alt="抽奖" id="cj"/>
    </router-link>
    <router-link to="/tp">
        <img src="src/assets/投票.png" alt="投票" id="tp"/>
    </router-link>
    </div>
</template>

<script setup>

</script>

<style scoped>
#back{
    height: 100%;
    position: absolute;
    right: 0vw;
    top:0vw;
    opacity: 20%;
}
#cj, #tp{
    position: absolute;
    top: 20vw;
    width: 35vw;
    border-radius: 2vw;
}
#cj:hover,#tp:hover{
    transform: scale(1.1);
    box-shadow: 0 1vw 1.2vw rgba(0,0,0,0.5);
}
#cj{
    left: 10vw;
}
#tp{
    right: 10vw;
}
</style>
