<template>
  <div>
    <card-title>All Actors in {{ this.game }}</card-title>
    <ActorCard :actor="{game, name}" v-for="name in $store.getters.actorNames(game)" :key="name"/>
  </div>
</template>

<script>
export default {

  name: 'actor-index',

  async asyncData({store, params}) {
    const game = params.games
    await store.dispatch('fetchActorsForGame', game)
    return {game}
  }
}

</script>
