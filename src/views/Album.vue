<template>
    <div class="text-center">
        <img :src="album.cover" alt="cover" >
        <h1 class="display-3 ma-4 d-flex justify-center">{{ album.name }}</h1>
        <div>
            <h4 class="display-5 ma-4 d-flex justify-center">Nombre de titres : {{ album.tracks }}</h4>
            <ul 
            v-for="titre in album.titre"
            :key="titre">
            <li>
                {{ titre }}
            </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
     mounted(){
      this.$store.dispatch('getAlbums');
    },
    computed: {
        album(){
            return this.$store.state.albums.find(album => album.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    img{
        max-width: 30%;
    }
</style>