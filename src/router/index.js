import { createRouter,createWebHistory } from 'vue-router'

const router = createRouter({
    history:createWebHistory(),
    routes:[
        { name:"home",path:"/", component:()=>import("../views/home.vue") },
        { name:"cj",path:"/cj", component:()=>import("../views/cj.vue") },
        { name:"tp",path:"/tp", component:()=>import("../views/tp.vue") }
    ]
})
export default router