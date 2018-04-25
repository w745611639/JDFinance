import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue";
import Money from '../Money/index.vue';
import WhiteBar from '../whitebar/index.vue';
import Crowd from '../crowd/index.vue';
import '../../css/reset.scss'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        }, 
        {
        	path: "/money",
        	name: "money",
        	component: Money
        },
        {
        	path: "/whitebar",
        	name: "whitebar",
        	component: WhiteBar
        },
        {
        	path: "/crowd",
        	name: "crowd",
        	component: Crowd
        },
    ],
})
