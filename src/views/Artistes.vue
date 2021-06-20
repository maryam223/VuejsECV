<template>
  <div class="artistes">
    <h1>Artistes</h1>
    <div class="artists-container">
      <div 
      v-for="artist in artists"
      :key="artist.id">
      <router-link :to="{ name: 'artiste', params: { id: artist.id }}">
      <div class="artists-box">
        <img :src=" artist.avatar" alt="photo artiste" width="100px">
        <div>
        <h3>{{ artist.name}}</h3>
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
    name: 'Artistes',
    components:{},
    mounted(){
      axios
      .get('http://localhost:3000/artists')
      .then((response) => {
        this.artists = response.data;
      console.log(this.artists)
      });
      
    },
    data(){
      return {
       artists: [],
      }
    }
}
</script>

<style scoped>

.artists-container {
    display: inline-flex;
    justify-content: space-around;
}

.artists-box{
  margin: 10px;
  padding: 10px;
  text-align: left;
}

img{
  padding: 10px;
  border-radius: 50%;
}

h3 {
    display: grid;
    place-items: center;
}
</style>