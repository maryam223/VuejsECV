<template>
  <div class="about">
    <h2>Tous les artistes</h2>

    <Artist
      v-for="artist in artistsList"
      :key="artist.name"
      :image="artist.image"
      :name="artist.name"
      :description="artist.description"
      :albums="artist.albums"
      :concerts="artist.concerts"
      :chemin="artist.chemin"

    />
  </div>
</template>

<script>
//Trouver un moyen de filtrer pour avoir un élément à chaque fois
import Artist from "../components/Artist.vue";
import  { mapState } from "vuex";

export default {
  name: "ArtistBio",
  components: {
    Artist
  },
  computed: {
      ...mapState({
        artistsList: "artistsList",
      })
    },
}

</script>