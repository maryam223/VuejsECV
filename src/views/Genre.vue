<template>
    <div>
        <h1>{{ genre.name }}</h1>
        <p>{{ genre.id}}</p>
        
    </div>
</template>

<script>
export default {
    mounted(){
      this.$store.dispatch('getGenres');
    },
    computed: {
        genre(){
            return this.$store.state.genres.find(genre => genre.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    img{
        max-width: 30%;
    }
</style>