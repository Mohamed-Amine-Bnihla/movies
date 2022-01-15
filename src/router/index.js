import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=> import(/* webpackChunkName: "home" */ '@/views/Home.vue')

  },
  {
    path:"/movie/:id",
    name:"movie",
  component: ()=> import(/* webpackChunkName: "movie" */ '@/views/Movie.vue'),
      props:true,
  },
  {
    path:"/tv/:id",
    name:"tv",
      component: ()=>  import(/* webpackChunkName: "tv" */ '@/views/Tv.vue'),
    props:true,
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
