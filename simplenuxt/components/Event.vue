<template>
  <div class="flex items-center mt-8">
    <!-- event icon -->
    <div class="
        flex items-center z-20 flex-shrink-0
        bg-yellow-500 rounded-full border-2 border-yellow-50 font-extrabold bg-opacity-80
        h-8 w-8  p-1 mx-6 mt-8">
      <SparklesIcon class="text-yellow-50 p-1 text-center"/>
    </div>

    <!-- card for displaying events -->
    <div class="
      border-2-2 bg-pink-50 rounded-md shadow-md
      max-w-sm m-2 overflow-hidden">

      <!-- image -->
      <img class="h-64 w-full object-cover object-left-top" src="./../assets/img/zombies.jpeg">

      <!-- Card main content -->
      <div class="py-4">
        <div class="font-medium text-xs uppercase">
          <div class="text-gray-500">Starring:</div>
          <div>
            <span class="text-base underline mx-1" v-for="who in content.who">
          {{ who }}
        </span>
          </div>
        </div>
        <h3 class="font-bold text-gray-900 text-2xl mt-3 capitalize">
          {{ content.title }}
        </h3>
        <div class="text-sm leading-snug tracking-wide text-gray-700 text-opacity-100 my-2">
          What: {{ content.what }}
        </div>
        <div class="overflow-ellipsis">
          {{ content.story }}
        </div>

        <!-- Stats -->
        <div class="flex flex-col border-t-4 border-dashed border-pink-700 px-4 mt-2 min-w-max">
          <div class="text-xs text-gray-500 font-bold uppercase my-2"> Stats:</div>
          <ul class="list-disc">
            <li class="flex align-center" v-if="content.stats.tech">
              <div >
                <CubeIcon class="mr-2 h-12 w-12"/>
              </div>
              <div class="flex flex-col my-2">
                <span v-for="id in content.stats.tech">
                  <span v-for="entry in Object.entries(id)">
                    <span class="bg-pink-700 text-pink-50 uppercase text-xs rounded-md my-1 mx-2 p-1 font-bold">
                      {{entry[0] }}
                    </span>
                  <span class="font-bold text.sm"> {{ entry[1] }}</span>
                  <span class="inline-block h-4 w-4" v-if="entry[1] >0"><TrendingUpIcon/></span>
                  <span class="inline-block h-4 w-4" v-if="entry[1] <0"><TrendingDownIcon/></span>
                </span>
            </span>
              </div>
            </li>
          </ul>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {SparklesIcon, UsersIcon, CubeIcon, FlagIcon, TrendingUpIcon, TrendingDownIcon} from "@vue-hero-icons/outline"

export default {
  name: "Event",
  components: {SparklesIcon, UsersIcon, CubeIcon, FlagIcon, TrendingUpIcon, TrendingDownIcon},
  props: ['content'],
  computed: {
    serialized: obj => 2
  }
}
</script>

<style scoped>

</style>
