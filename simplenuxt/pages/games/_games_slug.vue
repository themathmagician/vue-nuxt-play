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
    const gc = await $content('games', params.games_slug, 'teaser').fetch()
    return {gc}
  }
}

</script>
