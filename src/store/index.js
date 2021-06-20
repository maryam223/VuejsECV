import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        genres: [],
        news: [],
        albums: [],
        artistes: [],
        concerts: []
    },
    mutations: {
        SET_GENRES(state, genres) {
            state.genres = genres;
        },
        SET_NEWS(state, news) {
            state.news = news;
        },
        SET_ALBUMS(state, albums) {
            state.albums = albums;
        },
        SET_ARTISTES(state, artistes) {
            state.artistes = artistes;
        },
        SET_CONCERTS(state, concerts) {
            state.concerts = concerts;
        }
    },
    actions: {
        getGenres({ commit }) {
            axios.get('http://localhost:3000/genres')
                .then(response => {
                    commit('SET_GENRES', response.data)
                })
        },
        getNews({ commit }) {
            axios.get('http://localhost:3000/news')
                .then(response => {
                    commit('SET_NEWS', response.data)
                })
        },
        getAlbums({ commit }) {
            axios.get('http://localhost:3000/albums')
                .then(response => {
                    commit('SET_ALBUMS', response.data)
                })
        },
        getArtistes({ commit }) {
            axios.get('http://localhost:3000/artists')
                .then(response => {
                    commit('SET_ARTISTES', response.data)
                })
        },
        getConcerts({ commit }) {
            axios.get('http://localhost:3000/concerts')
                .then(response => {
                    commit('SET_CONCERTS', response.data)
                })
        }
    },
    modules: {}
})