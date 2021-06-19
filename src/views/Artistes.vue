<template>
  <div class="about">
    <h1>List of artists</h1>
    <ul 
      v-for="artist in artistsList"
      :key="artist.name"
      :name="artist.name"
      :image="artist.image"
      :chemin="artist.chemin"
    >
      <li><img :src="artist.image.source" :alt="artist.image.alt" width="128px"><br><router-link :to=artist.chemin>{{ artist.name }}</router-link></li>
    </ul>
  </div>
</template>

<script>
import  { mapState } from "vuex"
export default {
    name: 'Artistes',
    computed: {
      ...mapState({
        artistsList: "artistsList",
      })
    }
}

</script>