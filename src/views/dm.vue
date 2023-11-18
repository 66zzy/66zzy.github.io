<template>
    <input type="text" name="弹幕" placeholder="发一条弹幕吧" id="dm" v-model.lazy="danmu">
    <marquee behavior="" direction="left" id="content">{{ danmu }}</marquee>
</template>

<script>
export default {
    name:"dm",
    data(){return{
        danmu:""
    }}
}
</script>

<style>
#dm{
    position: absolute;
    left: 80vw;
    width: 15vw;
    height: 2vw;
    bottom: 10vw;
    border-radius: 0.5vw;
    background-color: transparent;
    font-size: large;
}
#content{
    font-size:larger;
}
</style>