<template>
  <ActorCard  :actor="actorsContent.actor" :name="actorsContent.slug" >
    <nuxt-content :document="actorsContent"/>
  </ActorCard>
</template>

<script>


export default {
  async asyncData({$content, route, store, params}) {
    const actorsContent = await $content('games', params.games, 'actors', params.actors_slug).fetch()
    return {actorsContent}
  },
}

</script>
