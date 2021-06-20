<template>
  <div class="News">
    <h1 class="display-3 ma-4 d-flex justify-center">News</h1>
    <div class="news-container">
      <div 
      v-for="article in news"
      :key="article.id">
      <v-card width="800px" hover outlined class="ma-2" :to="{ name: 'article', params: { id: article.id }}">
      <div class="news-box">
        <img :src=" article.thumbnail" alt="thumbnail" width="200px">
        <div>
        <h3>{{ article.name}}</h3>
        <div v-html="article.description">
          {{ article.description  }}
        </div>
        <v-btn rounded color="#6c5ce7" class="white--text" >Lire l'article ></v-btn>

        </div>
        </div>
      </v-card>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'News',
    components: {
    },
    data(){
      return {
       // news: this.$store.state.news
       //news: [],
      }
    },
    mounted(){
      this.$store.dispatch('getNews');
    },
    computed: {
        news() {
             return this.$store.state.news
        }
    }
}
</script>

<style>

.news-container{
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