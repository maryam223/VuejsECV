<template>
  <div class="about">
    <h1>This is a news page</h1>
    <Article 
    :title="title"
    :image="image"
    :contenu="contenu"
    />
    
  </div>
</template>

<script>
import Article from '@/components/Article.vue'
export default {
    name: 'New',
    components: {
      Article
    },
    data(){
      return{
        title :'Nouvel Album de Damso : notre avis',
        image: {
          source: "https://www.projectxparis.com/img/cms/BLOG/blog-old-images/Damso-nouvel-album.jpg",
          alt: 'Album de Damso'
        },
        contenu: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum."
      }
    }
}
</script>