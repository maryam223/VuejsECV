<template>
  <v-container>
    <v-row>
      <v-col md="3" cols="12">
        <h1>Créer un nouvel article</h1>
        <div class="field">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="article.name" />
        </div>
        <div class="field">
          <label for="description">Description</label>
          <input type="text" id="description" v-model="article.description" />
        </div>
        <div class="field">
          <label for="thumbnail">Thumbnail URL</label>
          <input type="text" id="thumbnail" v-model="article.thumbnail" />
        </div>
        <div class="field">
          <label for="content">Article Content</label>
          <input type="text" id="content" v-model="article.content" />
        </div>
        <v-text-field v-model="article.name" label="Name" />
        <v-textarea v-model="article.description" label="Description" />
        <v-text-field v-model="article.thumbnail" label="Thumbnail URL" />
        <v-text-field v-model="article.content" 
                      label="Video URL" />
        <v-btn @click="createArticle">Enregistrer</v-btn>
      </v-col>
      <v-col md="9" cols="12">
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        video: {}
      }
    },
    components: {
    },
    methods: {
      async createArticle() {
        let article = await this.$store.dispatch('createArticle', this.article);
        this.$router.push({ name: 'article', params: {id: article.id}});
      }
    },
  }
</script>

<style lang="scss" scoped>
.field {
  input {
    border: 1px solid black;
  }
  label {
    display: block;
  }
  padding-bottom: 10px;
} 
</style>