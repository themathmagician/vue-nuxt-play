<template>
  <div v-if="preview" class="flex-col justify-center items-center-center">
    <img v-if="imagePath"
         class="block w-24 h-24 p-2 object-cover object-top rounded-full ring-4 ring-gray-200"
         :src="imagePath" :alt="name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <h6 class="uppercase mt-2">{{name}}</h6>
  </div>
  <div v-else class="rounded-md shadow-md
      max-w-sm m-2 overflow-hidden">

    <img v-if="imagePath" class="block fill-current w-64 h-full object-cover object-left-top"
         :src="imagePath" :alt="name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <div>
      <h3 class="mt-4 font-semibold text-xl text-white capitalize">Actor {{ name }}</h3>
      <h4 class="mt-2 font-small uppercase text-gray-400">
        Role:
      </h4>
      <h4 class="mt-2 font-medium uppercase text-gray-800">
        {{ actor.role }}
      </h4>
      <h4 class="mt-2 font-small uppercase text-gray-400">
        Bio:
      </h4>
      <h4 class="mt-2 font-medium uppercase text-gray-800">
        {{ actor.bio }}
      </h4>
    </div>
  </div>
</template>`

<script>
import {UserIcon} from "@vue-hero-icons/outline"

export default {
  name: "ActorCard",
  components: {UserIcon},
  props: {
    preview: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    name: {
      type: String,
      default: () => {
        return 'noname'
      }
    },
    actor: {
      type: Object,
      default: function () {
        return {
          role: "undefined",
          bio: "undefined",
          charisma: 0,
          patience: 0,
          tech: 10,
          people: 0,
          process: 0
        }
      }
    }
  },
  computed: {
    imagePath() {
      try {
        console.log(`~/assets/img/burned/${this.name}.svg`)
        return require(`~/assets/img/burned/${this.name}.svg`)
      } catch (e) {
        return null
      }

    }
  }
}

</script>
