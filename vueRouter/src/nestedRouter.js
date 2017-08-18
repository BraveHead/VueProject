const User = {
    template: '<div class="user">' +
        ' <h2>User {{ $route.params.id }}</h2>' +
        '<router-view></router-view>' +
    '</div>',
}

const  UserHome = {template: '<div>Home</div>'}
const  UserProfile = {template: '<div>Profile</div>'}
const  UserPosts = {template: '<div>Posts</div>'}

const router = new VueRouter({
    routes: [
        {
            path: '/user/:id', component: User,
            children: [
                {
                    path: '',
                    component: UserHome
                },
                {
                    // 当 /user/:id/profile 匹配成功，
                    // UserProfile 会被渲染在 User 的 <router-view> 中
                    path: 'profile',
                    component: UserProfile
                },
                {
                    // 当 /user/:id/posts 匹配成功
                    // UserPosts 会被渲染在 User 的 <router-view> 中
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})


const app = new Vue({
    router
}).$mount('#app');