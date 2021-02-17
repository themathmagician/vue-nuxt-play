<template>
  <card class="ring-8 ring-purple-100 flex flex-col md:flex-row">
   <div>
      <card-title class="text-2xl text-pin rounded-full m-2 px-2">{{ gc.emoji }}</card-title>
      <card-subtitle class="mt-8">Featuring️ {{this.game}}</card-subtitle>
      <div class="flex">
        <p  v-for="name in actors" :key="name"> {{`${game}-${name}`}} </p>
        <AvatarView class="m-4"
                    v-for="name in $store.getters.actorNames(this.game)" :game="game" :key="`${game}-${name}`"/>
      </div>
    </div>
    <div class="flex flex-col w-1/2">
      <card-title>{{ gc.title }}</card-title>
      <card-secondary-title>{{ gc.subtitle }}</card-secondary-title>
      <div>
        <div class="mt-2">
          <CardSubtitle>Learn about</CardSubtitle>
          <div class="flex flex-wrap">
            <pill-label v-for="tag in gc.tags" :key="tag" class="bg-pink-700 text-pink-50">{{ tag }}</pill-label>
          </div>
        </div>

        <div class="mt-2">
          <CardSubtitle>Beware of</CardSubtitle>
          <div class="flex flex-wrap">
            <PillLabel v-for="enemy in gc.enemies" :key="enemy">{{ enemy }}</PillLabel>
          </div>
        </div>

      </div>
    </div>
    <div class="overflow-hidden rounded-lg ml-2 lg:ml-6 w-1/2 lg:w-full">
      <img
        class="block w-64 lg:w-full h-full object-cover object-center"
        :src="gc.img"
        :alt="gc.title"/>
    </div>

  </card>
</template>

<script>

export default {
  name: "GameCard",
  props: {
    game: {
      type: String,
      required: true
    }
  },

  computed: {
    gc() {
      console.log(this.$store.getters.getGame(this.game))
      return this.$store.getters.getGame(this.game)
    },
    actors() {

      console.log('actors')
      console.log(this.$store.getters.actorNames(this.game))
      return this.$store.getters.actorNames(this.game)
    }
  }
}
</script>

