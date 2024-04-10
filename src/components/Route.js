import { createRouter,createWebHistory } from "vue-router"; //this is fist step
import FormPage from "@/components/FormPage.vue";
import AboutAs from "@/components/AboutAs.vue";
import NotificationPage from "@/components/NotificationPage.vue"
const router =createRouter({
    history:createWebHistory(), // 3rd step
    routes:[{
        path:"/Formpage",
        name:"FormPage",
        component:FormPage
    },
{
    path:"/AboutAs",
    name:"AboutAs",
    component:AboutAs
},
{
    path:"/Notification",// this a link
    name:"Notification", //
    component:NotificationPage
}] //4th  step


}

)
export default router // second step