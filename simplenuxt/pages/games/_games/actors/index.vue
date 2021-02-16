<template>
  <div>
    <card-title>All Actors in {{this.game}}</card-title>
    <ActorCard v-for="ac in $store.getters.actorNames"  :actor="ac" :name="ac" :key="ac"/>
  </div>
</template>

<script>
export default {

  name: 'actor-index',

  async asyncData({store, params}) {
    //TODO add parameter here
    const game = params.games
    await store.dispatch( 'fetchActorsForGame', game)
    return {game}
  }
}

</script>
