<template>
  <div>
    <card-title>Games</card-title>
    <GameCard
      class="mt-24 mx-6"
      :game="name" v-for="name in $store.getters.gameNames" :key="name"/>
  </div>
</template>

<script>

export default {
  name: 'index',

  async asyncData({store}) {
    await store.dispatch('fetchGameTeasers')
  },

}

</script>
