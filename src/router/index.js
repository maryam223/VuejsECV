import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Accueil from '../views/Accueil.vue'
import New from '../views/New.vue'
import Artistes from '../views/Artistes.vue'
import Concerts from '../views/Concerts.vue'
import Releases from '../views/Releases.vue'
import EllaMai from '../views/EllaMai.vue'
import Ari from '../views/Ari.vue'
import ArtistBio from '../views/ArtistBio.vue'
import Article from '../views/Article.vue'

Vue.use(VueRouter)

const routes = [
    /*{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */
    /*'../views/About.vue')
     },*/
    {
        path: '/',
        name: 'Accueil',
        component: Accueil
    },
    {
        path: '/new',
        name: 'New',
        component: New
    },
    {
        path: '/artistes',
        name: 'Artistes',
        component: Artistes
    },
    {
        path: '/concerts',
        name: 'Concerts',
        component: Concerts
    },
    {
        path: '/releases',
        name: 'Releases',
        component: Releases
    },
    {
        path: '/ellamai',
        name: 'EllaMai',
        component: EllaMai
    },
    {
        path: '/inscription',
        name: 'Inscription',
        component: Inscription
    },
    {
        path: '/connexion',
        name: 'Connexion',
        component: Connexion
    },
    {
        path: '/ari',
        name: 'Ari',
        component: Ari
    },
    {
        path: '/artistbio',
        name: 'ArtistBio',
        component: ArtistBio
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
        params: true
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router