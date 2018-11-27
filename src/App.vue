<template>
  <div id="app">
      <!-- 使用 router-link 组件来导航. -->
      <!-- 通过传入 `to` 属性指定链接. -->
      <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
      <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<!--</body>-->
<script>
//  import Header from './components/common/header.vue'
//  import Footer from './components/common/footer.vue'
  export default {
//      components:  {
//          Header,
//          Footer
//      }
  }
</script>
<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
