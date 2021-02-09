<template>
  <ActorCard  :actor="actorsContent.actor" />
</template>

<script>


export default {
  async asyncData({$content, route, params}) {
    const actorsContent = await $content('games', params.games, 'actors', params.actors_slug).fetch()
    console.log(actorsContent)
    return {actorsContent}
  },
}

</script>
