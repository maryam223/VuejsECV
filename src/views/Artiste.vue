<template>
    <div class="text-center">
        <h1 class="display-3 ma-4 d-flex justify-center">{{ artiste.name }}</h1>
        <p>{{ artiste.likes }} likes<v-btn
                @click="like()"
              icon
              color="pink"
            >
              <v-icon>mdi-heart</v-icon>
            </v-btn></p>
        <img :src="artiste.avatar" alt="photo artiste">
        <div>
            <p>Pays : {{ artiste.origin }}</p>
            <p>{{ artiste.description }}</p> 
        </div>
        <h3>Albums de {{ artiste.name }}:</h3>
    </div>
</template>

<script>
export default {
     mounted(){
      this.$store.dispatch('getArtistes');
    },
    computed: {
        artiste(){
            return this.$store.state.artistes.find(artiste => artiste.id == this.$route.params.id);
        }
    },
    methods:{
        like(){
            this.artiste.likes = this.artiste.likes + 1;
        }
    }
}
</script>

<style scoped>
    img{
        max-width: 30%;
    }
</style>