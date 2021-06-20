import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        news: [{
                id: '1',
                name: "News 1",
                description: '<p>Voici la description de la news 1</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '2',
                name: "News 2",
                description: '<p>Voici la description de la news 2</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '3',
                name: "News 3",
                description: '<p>Voici la description de la news 3</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '4',
                name: "News 4",
                description: '<p>Voici la description de la news 4</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '5',
                name: "News 5",
                description: '<p>Voici la description de la news 5</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '6',
                name: "News 6",
                description: '<p>Voici la description de la news 6</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '7',
                name: "News 7",
                description: '<p>Voici la description de la news 7</p>',
                thumbnail: 'https://images-na.ssl-images-amazon.com/images/I/61nPr10h7lL.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
            {
                id: '8',
                name: "News 8",
                description: '<p>Voici la description de la news 8</p>',
                thumbnail: 'https://i.pinimg.com/originals/f6/ce/d3/f6ced3987af44c24cf90ca91983107c8.jpg',
                published: '12/09/2020',
                content: 'Lorem ipsum'
            },
        ],
        albums: [{
                id: '1',
                name: 'QALF',
                released: '2020',
                tracks: '15',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/81TMGEpMdKL._SL1500_.jpg',
                titres: [
                    "MEVTR",
                    "LIFE LIFE",
                    "DEUX TOILES DE MER",
                    "SENTIMENTAL"
                ],
                artistId: '3'
            },
            {
                id: '2',
                name: 'Geography',
                released: '2018',
                tracks: '13',
                cover: 'https://images-na.ssl-images-amazon.com/images/I/81TMGEpMdKL._SL1500_.jpg',
                titres: [
                    "MEVTR",
                    "LIFE LIFE",
                    "DEUX TOILES DE MER",
                    "SENTIMENTAL"
                ],
                artistId: '2'
            }
        ],
        artists: [{
                id: '1',
                name: "Coldplay",
                country: "Great Britain",
                avatar: "https://upload.wikimedia.org/wikipedia/en/1/1d/Coldplay_shot_by_Marcus_Haney_01.png",
                genreId: '1',
                likes: '100310',
                description: "Il est formé par l'auteur-compositeur-interprète Chris Martin et le guitariste Jon Buckland. Le bassiste Guy Berryman rejoint ensuite le groupe, avant que le batteur Will Champion ne vienne compléter le quatuor."
            },
            {
                id: '2',
                name: "Tom misch",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Tom_Misch%2C_The_Novo%2C_April_2018_%28cropped%29.jpg/800px-Tom_Misch%2C_The_Novo%2C_April_2018_%28cropped%29.jpg",
                origin: "Great Britan",
                genreId: '8',
                likes: '1024',
                description: "Thomas Abraham Misch (born 25 June 1995) is an English musician and producer. He began releasing music on SoundCloud in 2012 and released his debut studio album Geography in 2018"
            },
            {
                id: '3',
                name: "Damso",
                avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Festival_des_Vieilles_Charrues_2018_-_Damso_-_006.jpg/800px-Festival_des_Vieilles_Charrues_2018_-_Damso_-_006.jpg",
                origin: "Belgique",
                genreId: '3',
                likes: '20420',
                description: "Damso, de son vrai nom William Kalubi Mwamba, né le 10 mai 1992 à Kinshasa (Zaïre, actuelle République démocratique du Congo), est un rappeur et auteur-compositeur-interprète belgo-congolais."
            }
        ],
    },
    mutations: {},
    actions: {},
    modules: {}
})