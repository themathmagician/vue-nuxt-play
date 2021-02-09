<template>
  <transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-600"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div class="relative">
      <button
        @click="isOpen = !isOpen"
        class="block rounded-full border-2 hover:border-pink-50 border-pink-600 p-2 relative z-10">
        <UserIcon size="2x" class="text-pink-50"/>
      </button>
      <button v-if="isOpen"
              @click="isOpen=false"
              tabindex="-1"
              class="fixed top-0 right-0 bottom-0 left-0 h-full w-full bg-grey-900 opacity-10 cursor-default"/>
      <div v-if="isOpen"
           class="absolute right-0 bg-white rounded-lg shadow-lg focus w-48">
        <a href="#" class="block px-4 py-2 hover:bg-pink-400">Your Account</a>
        <a href="#" class="block px-4 py-2 hover:bg-pink-400">Contact us</a>
        <a href="#" class="block px-4 py-2 hover:bg-pink-400">Logout</a>
      </div>
    </div>
  </transition>
</template>

<script>
import {UserIcon} from "@vue-hero-icons/outline"

export default {
  name: "AccountDropdown",
  components: {UserIcon},
  data() {
    return {
      isOpen: false
    }
  },
  created() {
    const escapeHandler = (e) => {
      if (e.keyCode === 27) {
        this.isOpen = false;
      }
    }

    document.addEventListener('keydown', escapeHandler)
    this.$once('hook:beforeDestroy', () => {
      document.removeEventListener('keydown', escapeHandler)
    })
  }
}
</script>

<style scoped>

</style>
