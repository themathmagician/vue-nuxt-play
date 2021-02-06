<template>
  <GameCard
    class="mt-24 mx-6"
    :game="gc.game" />
</template>

<script>

import GameCard from "~/components/GameCard";

export default {
  components: {GameCard},
  async asyncData({$content, params}) {
    console.log(`From asyncdata` )
    console.log(params)
    console.log(params.games_slug)
    const gc = await $content('games', params.games_slug, 'teaser').fetch()
    return {gc}
  }
}

</script>
