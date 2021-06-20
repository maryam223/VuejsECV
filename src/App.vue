<template>
  <v-app>
    <v-app-bar
      app
      color="#a29bfe"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo La Source"
          class="shrink mr-2"
          contain
          src="@/assets/logo.png"
          transition="scale-transition"
          width="40"
        />
        La Source
      </div>

      <v-spacer></v-spacer>

      <nav>
      <v-btn color="transparent" to="/">Accueil</v-btn> 
      <v-btn color="transparent" to="/news">News</v-btn> 
      <v-btn color="transparent" to="/artistes">Artistes</v-btn>
      <v-btn color="transparent" to="/concerts">Concerts</v-btn> 
      <v-btn color="transparent" to="/sorties">Sorties</v-btn>
      </nav>

      <v-flex>
        <Popup />
      </v-flex>

      <v-btn
        to="/inscription"
        text
      >
        <span class="mr-2">S'inscrire</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

import Popup from '@/components/Popup.vue'
export default {
  name: 'App',
  components:{
    Popup
  },
  data: () => ({
    //
  }),
};
</script>

<style>
nav{
  margin-right: 16%;
}
</style>