<template>
    <div>
        <img :src="article.thumbnail" alt="thumbnail" >
        <h1>{{ article.name }}</h1>
        <div v-html="article.description">
            {{ article.description}}
        </div>
    </div>
</template>

<script>
export default {
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