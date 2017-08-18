
const User = {
    template : '<div> User {{ $route.params.id }}</div>',
    watch: {
        '$route' (to, from){
            console.log('change');
        }
    }
}

const router = new VueRouter({
    routes: [
        {path: '/user/:id', component:User}
    ]
})


const app = new Vue({
    router
}).$mount('#app');