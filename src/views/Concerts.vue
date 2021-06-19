<template>
  <div class="concerts">
    <h1>Concerts</h1>
    <div class="news-container">
      <div 
      v-for="concert in concerts"
      :key="concert.name">
      <div class="news-box">
        <div>
        <h3>{{ concert.name}}</h3>
        <p>{{ concert.date }}</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Concerts',
    components:{},
    mounted(){
      axios
      .get('http://localhost:3000/concerts')
      .then((response) => {
        this.concerts = response.data;
      console.log(this.concerts)
      });
    },
    data(){
      return {
       // news: this.$store.state.news
       concerts: []
      }
    }
}
</script>
<style scoped>
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