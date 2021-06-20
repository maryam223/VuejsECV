<template>
    <div>
        <img :src="article.thumbnail" alt="thumbnail" >
        <h1>{{ article.name }}</h1>
        <p>{{ article.published }}</p>
        <div>
            {{ article.content}}
        </div>
    </div>
</template>

<script>
export default {
     mounted(){
      this.$store.dispatch('getNews');
    },
    computed: {
        article(){
            return this.$store.state.news.find(article => article.id == this.$route.params.id);
        }
    }
}
</script>

<style scoped>
    img{
        max-width: 30%;
    }
</style>