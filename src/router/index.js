import Vue from 'vue'
import VueRouter from 'vue-router'
import inicio from "../components/inicio.vue";
import registrar from "../components/registrar.vue";
import menu_perdidos from "../components/menu_buscar_mas";
import perdi_1mas from "../components/perdi_mimas";
import menu_encontrados from "../components/menu_encontre_mas";
import encontre_1mas from "../components/encontre_1mas";
import info_mascotaen from "../components/info_mascotaen";

Vue.use(VueRouter)

  const routes = [
  
    {
      path:"/", component:inicio
  },
  {
    path:"/registrar", component:registrar
},

{
    path:"/menu_perdidos", component:menu_perdidos
},

{
    path:"/perdi_1mas", component:perdi_1mas
},

{
    path:"/menu_encontrados", component:menu_encontrados
},

{
    path:"/encontre_1mas", component:encontre_1mas
},

{
    path:"/info_mascotaen", component:info_mascotaen
},
]

const router = new VueRouter({
  routes
})

export default router
