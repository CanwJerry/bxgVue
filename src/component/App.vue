<template>
     <section>
         <v-topBar></v-topBar>
         <v-leftBar></v-leftBar>
         <router-view></router-view>
     </section>
</template>

<script>
//这里vue要求我们对外暴漏一个组件的配置项
//这里因为template已经在上面独立编写了，vue-loader到时候会帮我们处理，所以配置项中就不用谢template了

export default {
    
};
</script>

<style scoped>
 
</style>
