<template>
  <div class="about">
    <ul 
      v-for="artist in artistsList"
      :key="artist.name"
      :name="artist.name"
      :image="artist.image"
      :chemin="artist.chemin"
    >
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