<template>
  <div class="concerts">
    <h1 class="display-3 ma-4 d-flex justify-center">Concerts</h1>
    <div class="concert-container">
      <ul
      v-for="concert in concerts"
      :key="concert.name">
      <div class="concert-box">
        <li>
        <p style="font-weight:bold;">{{ concert.name}}</p>
        <p>{{ concert.date }}</p>
        </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Concerts',
    components:{},
   data(){
      return {
       // news: this.$store.state.news
       //concerts: []
      }
    },
    mounted(){
      this.$store.dispatch('getConcerts');
    },
    computed: {
        concerts() {
             return this.$store.state.concerts
        }
    }
}
</script>
<style scoped>

.concert-container{
    display: grid;
    place-items: center;
}
ul{
  list-style: url('../assets/concert.png');
}

img{
  padding: 10px;
}
</style>