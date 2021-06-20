<template>
  <div class="News">
    <h1>News</h1>
    <div class="news-container">
      <div 
      v-for="article in news"
      :key="article.id">
      <router-link :to="{ name: 'article', params: { id: article.id }}">
      <div class="news-box">
        <img :src=" article.thumbnail" alt="thumbnail" width="200px">
        <div>
        <h3>{{ article.name}}</h3>
        <div v-html="article.description">
          {{ article.description  }}
        </div>
        </div>
        </div>
        </router-link>
      </div>
    </div>
    
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'News',
    components: {
    },
    mounted(){
      axios
      .get('http://localhost:3000/news')
      .then((response) => {
        this.news = response.data;
      console.log(this.news)
      });
    },
    data(){
      return {
       // news: this.$store.state.news
       news: [],
      }
    }
}
</script>

<style>
.news-box{
  border: solid 1px black;
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