import Vue from 'vue'
import VueRouter from 'vue-router'
import Inscription from '../views/Inscription.vue'
import Connexion from '../views/Connexion.vue'
import Accueil from '../views/Accueil.vue'
import News from '../views/News.vue'
import Artistes from '../views/Artistes.vue'
import Concerts from '../views/Concerts.vue'
import Sorties from '../views/Sorties.vue'
import EllaMai from '../views/EllaMai.vue'
import Ari from '../views/Ari.vue'
import Artiste from '../views/Artiste.vue'
import Article from '../views/Article.vue'
import Album from '../views/Album.vue'


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
        path: '/news',
        name: 'News',
        component: News
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
        path: '/sorties',
        name: 'Sorties',
        component: Sorties
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
        path: '/artiste/:id',
        name: 'artiste',
        component: Artiste,
        params: true
    },
    {
        path: '/article/:id',
        name: 'article',
        component: Article,
        params: true
    },
    {
        path: '/album/:id',
        name: 'album',
        component: Album,
        params: true
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router