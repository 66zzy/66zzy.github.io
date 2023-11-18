<script setup>
//原helloworld
</script>

<template>
  <p>
    <!--使用 router-link 组件进行导航 -->
    <!--通过传递 `to` 来指定链接 -->
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
    <router-link to="/">    
      <img src="src/assets/星回乾行.png" alt="星回“乾”行" id="logo"/>
    </router-link>
  </p>
  <!-- 路由出口 -->
  <!-- 路由匹配到的组件将渲染在这里 -->
  <router-view></router-view>
</template>

<style scoped>
#logo{
    width: 15vw;
    position: absolute;
    left: 5vw;
    top:2vw;
}</style>
