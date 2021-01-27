<template>
  <div >
   <p class="text-xl text-gray-900 bg-red-100 m-2 px-1 py-2">
     Hello from vue+nuxt :smile:
   </p>

    <div class="border-indigo-600 border-4 bg-indigo-100 max-w-xs rounded-md shadow-md m-2 px-1 py-2">
      <h5> Event </h5>
      <p>

        ...
        <br>
        something happened!
      </p>

      <SparklesIcon class="text-gray-500"/>
    </div>

    <div class="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style="left: 50%"></div>

    <!-- right timeline -->
    <div class="mb-8 flex justify-between items-center w-full right-timeline">
      <div class="order-1 w-5/12"></div>
      <div class="z-20 flex items-center order-1 bg-orange-500 shadow-xl w-8 h-8 rounded-full">
        <h1 class="mx-auto font-semibold text-lg text-white">
          <SparklesIcon class="text-orange-200" />
        </h1>
      </div>

      <div class="order-1 bg-gray-400 rounded-lg shadow-xl w-5/12 px-6 py-4">
        <h3 class="mb-3 font-bold text-gray-800 text-xl">Event</h3>
        <p class="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          Something happened. Story to be told (yet).
        </p>
      </div>
    </div>

  </div>


</template>

<script>
  import { SparklesIcon } from "@vue-hero-icons/outline"

  export default {
    components: {SparklesIcon}
  }
</script>
