<template>
  <div class="about">
    <Artist
      v-for="artist in artistsList"
      :key="artist"
      :image="artist.image"
      :name="artist.name"
      :description="artist.description"
      :albums="artist.albums"
      :concerts="artist.concerts"
    />
  </div>
</template>

<script>
import Artist from "../components/Artist.vue";

export default {
  name: "Artistes",
  components: {
    Artist,
  },
  data() {
    return {
      artistsList: [
        {
          name: "Ella Mai",
          image: {
            source: "../assets/anonyme.png",
            alt: "Artist picture unavailable",
          },
          description:
            "Ella Mai Howell est un auteure-compositrice-interprète anglaise. Elle signe sur le label de DJ Mustard 10 Summers Records et Interscope Records. Elle sort un EP Ready en février 2017, dont la chanson Boo'd Up sera classé à la 6ᵉ place du Billboard Hot 100 et certifiée disque de platine aux États-Unis en 2018.",
          albums: ["Ella Mai", "Ready", "Change", "Time"],
          chemin: 'ellamai'
        },
      ],
    };
  },
};
</script>