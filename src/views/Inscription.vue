<template>
  <div class="text-center">
    <h2 class="display-6 ma-4 d-flex justify-center">Inscription</h2>
                <div width="600px">
                <v-form class="px-3">
                    <v-text-field label="Nom" placeholder="Entrez votre nom" color="purple darken-2" regular v-model="nom"></v-text-field>
                    <v-text-field label="Prénom" placeholder="Entrez votre prénom" color="purple darken-2" regular v-model="prenom"></v-text-field>
                    <v-text-field label="Adresse Mail" placeholder="azerty@mail.fr" color="purple darken-2" regular v-model="mail"></v-text-field>
                    <v-text-field label="Mot de Passe" color="purple darken-2" regular v-model="password"></v-text-field>
                    <v-text-field label="Confirmation Mot de Passe" color="purple darken-2" placeholder="Entrez à nouveau votre mot de passe" regular v-model="password"></v-text-field>
                    <v-btn flat color="#fdcb6e" class="mx-0 mt-3 white--text">S'inscrire</v-btn>
                </v-form>
                </div>
    
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Inscription',
  components: {
  }
}
</script>