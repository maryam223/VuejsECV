<template>
  <div class="Connexion">
    <v-card>
            <v-card-title>
                <h2>Connexion</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Adresse Mail" placeholder="azerty@mail.fr" solo></v-text-field>
                    <v-text-field label="Mot de Passe" solo></v-text-field>

                </v-form>
            </v-card-text>
        </v-card>
  </div>
</template>

<script>

export default {
  name: 'Connexion',
  components: {
  }
}
</script>