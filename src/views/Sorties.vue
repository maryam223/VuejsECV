<template>
  <div class="sorties">
    <h1 class="display-3 ma-4 d-flex justify-center">Sorties albums</h1>
    <div class="albums-container">
      <div 
      v-for="album in albums"
      :key="album.id">
      <router-link :to="{ name: 'album', params: { id: album.id }}">
      <div class="albums-box">
        <img :src=" album.cover" alt="cover" width="200px">
        <div>
        <h3>{{ album.name}}</h3>
        <div>
          <p>{{ album.tracks }} titres - {{ album.released}} </p>
        </div>
        </div>
        </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Sorties',
    components: {},
    data(){
      return {
       //albums: []
      }
    },
    mounted(){
      this.$store.dispatch('getAlbums');
    },
    computed: {
        albums() {
             return this.$store.state.albums
        }
    }
}
</script>

<style>
.albums-box{
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