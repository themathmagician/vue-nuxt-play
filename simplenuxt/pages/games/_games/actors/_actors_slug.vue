<template>
  <ActorCard  :actor="actorsContent.actor" :name="actorsContent.slug"/>
</template>

<script>


export default {
  async asyncData({$content, route, params}) {
    const actorsContent = await $content('games', params.games, 'actors', params.actors_slug).fetch()
    return {actorsContent}
  },
}

</script>
