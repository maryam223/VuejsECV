<template>
  <div class="artistes">
    <h1>Artistes</h1>
    <div class="artists-container">
      <div 
      v-for="artiste in artistes"
      :key="artiste.id">
      <router-link :to="{ name: 'artiste', params: { id: artiste.id }}">
      <div class="artists-box">
        <img :src=" artiste.avatar" alt="photo artiste" width="100px">
        <div>
        <h3>{{ artiste.name}}</h3>
        </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Artistes',
    components:{},
    data(){
      return {
       //artists: [],
      }
    },
    mounted(){
      this.$store.dispatch('getArtistes');
    },
    computed: {
        artistes() {
             return this.$store.state.artistes
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