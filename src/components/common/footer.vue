<template>
    <div class="footer">
        footer
    </div>
</template>

<script>
    export default {

    }
</script>

<!--添加 scoped 属性后 当前页面的样式只在此组件生效，不会影响全局同class样式-->
<style scoped>
   .footer{
       height: 20px;
       /*width: 100%;*/
       background: #000000;
   }
</style>
