<template>
  <div v-if="preview" class="flex-col justify-center items-center-center">
    <img v-if="imagePath"
         class="block w-24 h-24 p-2 object-cover object-top rounded-full ring-4 ring-gray-200"
         :src="imagePath" :alt="name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <h6 class="uppercase mt-2">{{name}}</h6>
  </div>
  <card v-else>
    <img v-if="imagePath" class="block fill-current w-64 h-full object-cover object-left-top"
         :src="imagePath" :alt="name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <div>
      <card-title>{{ name }}</card-title>
      <card-subtitle>Role</card-subtitle>
      <card-secondary-title> {{ actor.role }}</card-secondary-title>
      <card-subtitle>Bio</card-subtitle>
      <card-secondary-title> {{ actor.bio }}</card-secondary-title>
      <card-teaser-text>
        <slot></slot>
      </card-teaser-text>
    </div>
  </card>
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
          tech: 0,
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
