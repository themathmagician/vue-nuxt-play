<template>
  <div>
    <h1>All Actors</h1>
    <ActorCard v-for="ac in actorsContent"  :actor="ac.actor" :name="ac.slug" :key="ac.slug"/>
  </div>
</template>

<script>
export default {

  async asyncData({$content, route, params}) {
    const actorsContent = await $content('games', params.games, 'actors', {deep: true}).fetch()
    console.log(actorsContent)
    return {actorsContent}
  },
  watchQuery: true
}

</script>
