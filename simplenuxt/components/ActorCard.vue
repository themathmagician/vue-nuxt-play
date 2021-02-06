<template>
  <div>
    <h4>Actor</h4>
    <p>{{ actor.role }}</p>
    <p>{{ actor.bio }}</p>
  </div>
</template>

<script>
export default {
  name: "ActorCard",
  props: {
    actor: {
      type: Object,
      required: true
    }
  }
}

</script>

<style scoped>

</style>
