<template>
  <card>
    <img v-if="imagePath" class="block fill-current w-64 h-full object-cover object-left-top"
         :src="imagePath" :alt="actor.name">
    <UserIcon v-else size="8x" class="block text-gray-600 rounded-full border-4"/>
    <div>
      <card-title>{{ actor.name }}</card-title>
      <card-subtitle>Role</card-subtitle>
      <card-secondary-title> {{ ac.role }}</card-secondary-title>
      <card-subtitle>Bio</card-subtitle>
      <card-secondary-title> {{ ac.bio }}</card-secondary-title>
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
    actor: {
      type: Object,
      required: true
    }
  },
  computed: {
    ac() {
     return this.$store.getters.getActor(this.actor)
    },
    imagePath() {
      try {
        return require(`~/assets/img/burned/${this.actor.name}.svg`)
      } catch (e) {
        return null
      }
    }
  }
}

</script>
