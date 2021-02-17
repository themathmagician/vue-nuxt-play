<template>
  <div class="flex-col justify-center items-center-center">
    <img v-if="imagePath"
         class="block w-24 h-24 p-2 object-cover object-top rounded-full ring-4 ring-gray-200"
         :src="imagePath" :alt="name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <h6 class="uppercase mt-2">{{ name }}</h6>
  </div>
</template>

<script>
export default {
  name: "AvatarView",
  props: {
    game: String,
    name: String
  },
  computed: {
    imagePath() {
      try {
        console.log(`~/assets/img/${game}/${this.name}.svg`)
        return require(`~/assets/img/${game}/${this.name}.svg`)
      } catch (e) {
        console.log(`Image missing for ${this.game}-${this.name}`)
        return null
      }
    }
  }
}
</script>

