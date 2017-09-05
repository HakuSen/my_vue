<template>
  <div id="app" class="app">
      <h1>wanwan</h1>
      <!-- <router-view></router-view> -->
   </div>
</template>

<script>
    import Vue from "vue";
    import VueRouter from "vue-router";
    // import router from "./src/route.js";

    export default {
        router: router,
        name: 'app',
    }
</script>

<style lang="css" scoped>
  h1 {
    color: red;
  }
</style>