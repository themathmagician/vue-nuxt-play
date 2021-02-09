<template>
  <div>
    <h1>Games</h1>

    <GameCard
      class="mt-24 mx-6"
      :game="gc.game" v-for="gc in gameContent" :key="extractName(gc.path)"/>

  </div>
</template>

<script>


export default {
  name: 'GamesIndex',

  async asyncData({$content, route, params}) {
    const gameContent = await $content('games', {deep: true}).where({slug: 'teaser'}).only(['slug', 'game'])
      .fetch()
    return {gameContent}
  },
  methods: {
    // utility function
    extractName: (path) => {
      let contents = path.split('/')
      return contents[contents.length - 2]
    }
  }

}

</script>
