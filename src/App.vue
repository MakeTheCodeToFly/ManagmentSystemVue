<template>
  <div id="app">
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <!--<Home msg="11"></Home>-->

    <p>
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-link to="/home">Go to home</router-link>
      <router-link to="/page">Go to page</router-link>

    </p>
      <router-view></router-view>
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'
//import Home from './components/home.vue'
export default {

//  components: {
//    HelloWorld,
//    Home

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
