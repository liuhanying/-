<template>
  <div id="app">
    <HeaderBar/>


    <router-view/>
    

    <FooterBar/>

    
  </div>
</template>

<script>
import router from "./router";

import HeaderBar from "@/components/headerBar/HeaderBar";
import FooterBar from "@/components/footerBar/FooterBar";
export default {
  name: 'App',
  components:{
    HeaderBar,
    FooterBar
  }
}
</script>

<style>

</style>
