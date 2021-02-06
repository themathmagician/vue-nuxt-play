<template>
  <div class="rounded-xl shadow-lg flex m-4 p-4 ring-8 ring-purple-100">
    <div class="flex flex-col w-1/2">
      <h3 class="mt-4 font-semibold text-xl text-gray-800">{{ game.title }}</h3>
      <h4 class="mt-4 px-4 font-medium text-lg text-gray-600 tracking-wide leading-relaxed text-justify">
        {{ game.subtitle }}</h4>
      <div>
        <h4 class="mt-8 font-medium uppercase text-gray-600">Featuring </h4>

        <div class="mt-2">
        <h4 class="mt-2 font-small uppercase text-gray-400">Learn about </h4>
        <div class="flex">
          <span class="bg-pink-700 text-pink-50 uppercase text-xs rounded-md my-1 mx-2 px-2 py-1 font-semibold flex-wrap"
                v-for="tag in game.tags">
            {{ tag }}
          </span>
        </div>
        </div>

        <div class="mt-2">
          <h4 class="mt-2 font-small uppercase text-gray-400">Beware of </h4>
          <div class="flex">
          <span class="bg-gray-800 text-white uppercase text-xs rounded-md my-1 mx-2 px-2 py-1 font-semibold flex-wrap"
                v-for="enemy in game.enemies">
            {{ enemy }}
          </span>
          </div>
        </div>

      </div>
    </div>
    <div class="overflow-hidden rounded-md p-1 w-1/2">
      <img
        class="block w-64 h-full object-cover object-left-top"
        src="~/assets/board.jpg"
        alt="The board"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "GameCard",
  props: {
    game: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>
