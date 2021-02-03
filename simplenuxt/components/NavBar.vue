<template>
  <header class="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-1">
    <!-- left half -->
      <div class="flex justify-between items-center px-4 py-1 sm:p-0">
        <div class="text-gray-400">
          LOGO
        </div>
        <-- Menu burger -->
        <div class="sm:hidden">
          <button @click="isOpen = !isOpen" type="button"
                  class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <XIcon v-if="isOpen"/>
            <MenuIcon v-if="!isOpen"/>
          </button>
        </div>
      </div>

      <div :class="isOpen ? 'block':'hidden'" class="m-2 sm:flex">
        <a href="#" class="block text-white font-semibold rounded hover:bg-gray-400 sm:ml-2">About us</a>
        <a href="#" class="block text-white font-semibold rounded hover:bg-gray-400 sm:ml-2">Lets play!</a>
        <a href="#" class="block text-white font-semibold rounded hover:bg-gray-400 sm:ml-2">Games</a>
      </div>
  </header>
</template>

<script>
import {XIcon, MenuIcon} from "@vue-hero-icons/outline"

export default {
  name: "NavBar",
  components: {XIcon, MenuIcon},
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>

<style scoped>

</style>
