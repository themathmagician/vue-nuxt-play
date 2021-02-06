<template>
  <div>
    <h1>Games</h1>
    <p v-for="game in games">
      {{game}}
      <br>
      ...
    </p>
    <hr>

    <GameCard :game="content.game" v-for="content in games"/>

  </div>


</template>

<script>
export default {

  async asyncData({$content, route, params}) {
    const games = await $content('games', { deep: true }).where({slug: 'teaser'}).only(['slug', 'game'])
      .fetch()
    return {index}
  },
  watchQuery: true
}

</script>
