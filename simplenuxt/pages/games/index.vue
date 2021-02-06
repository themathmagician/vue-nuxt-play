<template>
  <div>
    <h1>Games</h1>
    <p v-for="game in gameContent" :key="gameContent.slug">
      {{ game }}
    </p>
    <hr>

    <GameCard
      class="mt-24 mx-6"
      :game="gc.game" v-for="gc in gameContent"/>

  </div>
</template>

<script>
export default {

  async asyncData({$content, route, params}) {
    const gameContent = await $content('games', {deep: true}).where({slug: 'teaser'}).only(['slug', 'game'])
      .fetch()
    return {gameContent}
  },
  watchQuery: true
}

</script>
