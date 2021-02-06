<template>
  <article>
    <nuxt-content :document="doc"/>
    <pre>
      {{ doc }}
    </pre>
    <ActorCard :actor="doc.actor"/>
  </article>

</template>

<script>

import ActorCard from "../../components/ActorCard"

export default {
  components: {ActorCard},
  async asyncData({$content, params}) {
    const doc = await $content('games/burned/actors', params.slug).fetch()
    return {doc}
  }
}

</script>
