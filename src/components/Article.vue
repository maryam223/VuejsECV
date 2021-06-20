<template>
  <div>
    <h1 class="display-3 ma-4 d-flex justify-center">{{ title }}</h1>
    <img :src="image.source" :alt="image.alt">
    <article>
      <p>{{ contenu }}</p>
    </article>
  </div>
</template>

<script>
export default {
    name: 'Article',
    props:{
      title:{
        type: String
      },
      image:{
        type: Object
      },
      contenu: {
        type: String
      }
    }
}
</script>