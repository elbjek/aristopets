import VueRouter from 'vue-router';
import keepers from '../src/components/keepers.vue';
import givers from '../src/components/givers.vue'
import index from '../src/components/index.vue'

export default new VueRouter({
    routes: [
        {path:'/index', component:index},
        {path:'/keepers', component: keepers},
        {path:'/givers', component:givers}
    ]
});