<template>
  <ActorCard class="px-2" :actor="{game, name}">
      <nuxt-content :document="actorsContent"/>
    </ActorCard>
</template>

<script>


export default {
  async asyncData({store, params, $content}) {
    //TODO fetch actor content as well!
    const game = params.games
    await store.dispatch('fetchActorsForGame', game)
    const actorsContent = await $content('games', game, 'actors', params.actors_slug, {deep: true}).fetch()
    return {game, name: params.actors_slug, actorsContent}
  }
}

</script>
