<template>
  <div>
    <h1>{{ name }}</h1>
    <img :src="image.source" :alt="image.alt">

    <section>
      <h2>{{ name }}</h2>
      <p>{{ description }}</p>
    </section>

    <h3>Liste des albums de {{ name }} :</h3>
    <section v-for="album in albums" v-bind:key="album">
      <ul>
        <li>{{ album }}</li>
      </ul>
    </section>

    <h3>Prochains concerts de {{ name }}</h3>
    <section v-for="concert in concerts" v-bind:key="concert">
      <ul>
        <li>{{ concert }}</li>
      </ul>
    </section>

  </div>
</template>

<script>
export default {
    name: 'Artist',
    props: {
      image: {
        type: Object,
      },
      name: {
        type: String
      },
      description: {
        type: String
      },
      albums: {
        type: Array
      },
      concerts: {
        type: Array,
        default:() => ['No upcoming Concert']
      },
      chemin: {
        type: String
      }
    }
}
</script>