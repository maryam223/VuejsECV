<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on }">
        <v-btn color="#fdcb6e" dark v-on="on">Connexion</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline lighten-2" color="#fdcb6e" primary-title>Connexion</v-card-title>
        <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Adresse Mail" placeholder="azerty@mail.fr" solo v-model="mail"></v-text-field>
                    <v-text-field label="Mot de Passe" solo v-model="password"></v-text-field>
                    <v-btn flat color="#fdcb6e" class="mx-0 mt-3 white--text">Se Connecter</v-btn>
                </v-form>
            </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
    
}
</script>