<template>
  <div class="text-center">
    <h1 class="display-3 ma-4  justify-center">Sorties Albums</h1>
    <div class="ma-4" style="display: inline-flex;">
      <div 
      v-for="album in albums"
      :key="album.id">
      <router-link :to="{ name: 'album', params: { id: album.id }}">
      <div class="album-box">
        <img :src=" album.cover" alt="cover" width="150px">
        <h3 class="text-caption text-decoration-none black--text">{{ album.name}}</h3>
      </div>
      </router-link>
      </div>
    </div>
    <h1 class="display-3 ma-4 d-flex justify-center">News</h1>
  
    <div class="news-container">
      <div 
      v-for="article in news"
      :key="article.id">
      <v-card width="600px" hover :to="{ name: 'article', params: { id: article.id }}">
      <div class="news-box">
        <img :src=" article.thumbnail" alt="thumbnail" width="200px">
        <div>
        <h3>{{ article.name}}</h3>
        <div v-html="article.description">
          {{ article.description  }}
        </div>
        <div>
          <v-btn rounded color="#6c5ce7" class="white--text" >Lire l'article ></v-btn>
        </div>
        </div>
        </div>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Accueil',
    components:{},
    data(){
      return {
       // news: this.$store.state.news
       //news: [],
       //albums: []
      }
    },
    mounted(){
      this.$store.dispatch('getNews');
      this.$store.dispatch('getAlbums');
    },
    computed: {
        news() {
             return this.$store.state.news
        },
        albums() {
             return this.$store.state.albums
        }
    }
}
</script>
<style scoped>
.news-container {
    display: grid;
    place-items: center;
}

.albums-container{
  display: grid;
  place-items: center;
}


.news-box{
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

  text-align: left;
  display: flex;
  justify-content: flex-start;
}

img{
  padding: 10px;
}

</style>