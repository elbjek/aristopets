import VueRouter from 'vue-router';
import index from '../src/components/index.vue';
import keepers from '../src/components/keepers.vue';
import givers from '../src/components/givers.vue'


export default new VueRouter({
    routes: [

        {path:'/', component: index},
        {path:'/keepers', component: keepers},
        {path:'/givers', component:givers}
    ]
});