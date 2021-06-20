<template>
  <v-form v-model="valid">
    <v-text-field v-model="article.name" 
                  label="Titre de l'article" 
                  counter=50
                  :rules="[required('name'), minLength('name', 5), maxLength('name', 50)]" />
    <v-textarea v-model="article.description" 
                label="Description" 
                counter=true
                :rules="[required('description'), minLength('description', 20)]"/>
    <v-text-field v-model="article.thumbnail" 
                  label="Image de l'article" 
                  :rules="[required('thumbnail')]"/>
    <v-textarea v-model="article.content" 
                label="Contenu" 
                counter=true
                :rules="[required('contenu'), minLength('contenu', 20)]"/>
   
    <v-btn @click="saveArticle" :disabled="!valid">{{buttonText}}</v-btn>
  </v-form>
</template>

<script>
  import validations from '../utils/validations';
  export default {
    data() {
      console.log(validations)
      return {
        valid: false,
        ...validations
      }
    },
    props: ['article', 'saveArticle', 'buttonText']
  }
</script>

<style lang="scss" scoped>
</style>