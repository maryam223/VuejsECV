<template>
  <div class="genres">
    <h1>genres</h1>
    <div class="genres-container">
      <div 
      v-for="genre in genres"
      :key="genre.id">
      <div class="genres-box">
        <div>
        <h3>{{ genre.name}}</h3>
        <p>{{ genre.id }}</p>
        </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
    name: 'genres',
    components: {
    },
    data(){
      return {
       // genres: this.$store.state.genres
       //genres: [],
      }
    },
    mounted(){
      this.$store.dispatch('getGenres');
    },
    computed: {
        gettersgenres() {
            return this.$store.getters.allGenres
        },
        genres() {
             return this.$store.state.genres
        }
    }
}
</script>

<style>
.genres-box{
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