<template>
    <div>
        <h1>{{ artiste.name }}</h1>
        <p>{{ artiste.likes }} likes</p>
        <img :src="artiste.avatar" alt="photo artiste">
        <div>
            <p>Pays : {{ artiste.country }}</p>
            <p>{{ artiste.description }}</p> 
        </div>
        <h3>Albums de {{ artiste.name }}:</h3>
    </div>
</template>

<script>
export default {
    computed: {
        artiste(){
            return this.$store.state.artists.find(artiste => artiste.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    img{
        max-width: 30%;
    }
</style>