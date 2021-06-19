import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: [{
                id: '1',
                name: "News 1",
                description: '<p>Voici la description de la news 1</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg'
            },
            {
                id: '2',
                name: "News 2",
                description: '<p>Voici la description de la news 2</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg'
            },
            {
                id: '3',
                name: "News 3",
                description: '<p>Voici la description de la news 3</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg'
            },
            {
                id: '4',
                name: "News 4",
                description: '<p>Voici la description de la news 4</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg'
            },
            {
                id: '5',
                name: "News 5",
                description: '<p>Voici la description de la news 5</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg'
            },
            {
                id: '6',
                name: "News 6",
                description: '<p>Voici la description de la news 6</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg'
            },
            {
                id: '7',
                name: "News 7",
                description: '<p>Voici la description de la news 7</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg'
            },
            {
                id: '8',
                name: "News 8",
                description: '<p>Voici la description de la news 8</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg'
            },
        ],
        artistsList: [{
                name: 'Ella Mai',
                image: {
                    source: 'assets/anonyme.png',
                    alt: 'Artist picture unavailable'
                },
                description: 'Ella Mai Howell est un auteure-compositrice-interprète anglaise. Elle signe sur le label de DJ Mustard 10 Summers Records et Interscope Records. Elle sort un EP Ready en février 2017, dont la chanson Boo\'d Up sera classé à la 6ᵉ place du Billboard Hot 100 et certifiée disque de platine aux États-Unis en 2018.',
                albums: ['Ella Mai', 'Ready', 'Change', 'Time'],
                chemin: 'ellamai'
            },
            {
                name: 'Ari Lennox',
                image: {
                    source: 'https://www.places-concert.com/images/visuels/artists_ari_lennox_18062019112800.jpg',
                    alt: 'Ari Lennox'
                },
                description: 'Courtney Shanade Salter, connue professionnellement sous le nom d\'Ari Lennox, est une auteure-compositrice-interprète américaine de R&B de Washington, DC. Elle est la première artiste féminine à être signée sur le label de J. Cole, Dreamville Records.',
                albums: ['Shea Butter Baby'],
                concerts: ['28 Août 2021, Clapham, UK - YAM Carnival'],
                chemin: 'arilennox'
            }
        ]
    },
    mutations: {},
    actions: {},
    modules: {}
})