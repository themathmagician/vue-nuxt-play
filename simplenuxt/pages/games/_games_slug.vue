<template>
  <GameCard class="mt-24 mx-6" :game="game" />
</template>

<script>

export default {
  name: 'GameCardSlug',

  async asyncData({params, store}) {
    console.log(`slug is ${params.games_slug}`)
    const game = params.games_slug
    await store.dispatch('fetchGameTeasers')
    return {game}
  }
}

</script>
