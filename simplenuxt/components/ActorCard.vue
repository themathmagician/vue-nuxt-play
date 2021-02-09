<template>
  <div class="border-2-2 rounded-md shadow-md
      max-w-sm m-2 overflow-hidde">
    <img class="block w-64 h-full object-cover object-left-top"
         :src="image">
    <h3 class="mt-4 font-semibold text-xl text-gray-800">Actor {{name}}</h3>
    <p>role: {{actor.role}}</p>
    <p>bio: {{actor.bio}} </p>
  </div>
</template>`

<script>
export default {
  name: "ActorCard",
  props: {
    name: {
      type: String,
      default: () => { return 'noname'}
    },
    actor: {
      type: Object,
      default: function() {
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
  methods: {
    image: ()=>{
      let path = `~assets/img/burned/${this.name}.svg`
      console.log(path)
      return path
    }
  }
}

</script>
