
<template> 
  <div id="main">

    <router-link to="/"><h5 id=ini>inicio</h5></router-link>
    <router-link to="/registrar"><h5 id=registrar>registrar</h5></router-link>
    <router-link to="/menu_perdidos"><h5>menu_perdidos</h5></router-link>
    <router-link to="/perdi_1mas"><h5>perdi_1mas</h5></router-link>
    <router-link to="/menu_encontrados"><h5>menu_encontrados</h5></router-link>
    <router-link to="/encontre_1mas"><h5>encontre_1mas</h5></router-link>
    <router-link to="/info_mascotaen"><h5>info_mascotaen</h5></router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import  'bootstrap/dist/css/bootstrap.css' 
import  'bootstrap-vue/dist/bootstrap-vue.css'
export default {

};
</script>




<style scoped>
   #ini {background-color: rgb(220, 48, 226);  
 width: 100%;
 height: 100%;
  } 

</style>
