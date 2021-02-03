<template>
  <div class="antialiased">
    <!-- menu bar -->
    <NavBar/>
    <div class="text-gray-900 relative">

      <!-- hero -->
      <div class="w-full aspect-w-4 aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
        <img
          class="w-full h-full object-cover object-left-top"
          src="./../assets/board.jpg"
          alt="The board"/>
      </div>
      <!-- welcome box -->
      <div class="absolute top-0 right-0 flex-col justify-start align-bottom w-1/2 lg:w-1/3 z-20">
        <div
          class="bg-opacity-90 bg-gray-700 mt-8 lg:mt-24 p-8 flex align-middle flex-col justify-between shadow-md rounded-sm">
          <h1 class="font-bold text-white text-2xl py-4 uppercase">
            I told you so!
          </h1>
          <h3 class="font-semibold text-xl pt-2 capitalize text-white leading-relaxed">
            Everyone is smart in the hindsight.
            <br>
            Why not practice before making high-stake technology decisions?
          </h3>
          <ul class="leading-relaxed mt-12 text-white mt-2 text-justify">
            <li><span class="font-semibold bg-pink-600">Enterprise Architecture</span> is the art of decision making.
              The important decisions to get right, are the ones, that will be hard to change later.
            </li>
            <li><span class="bg-pink-600 font-semibold">Enterprise Architecture</span> is the art of managing technology
              decisions between technical debt and solving important customer problems.
              You need a balance, to avoid extinction in the race of evolution.
            </li>
            <li><span class="bg-pink-600 font-semibold">The future</span> of your company, depends on your technology
              decision making skills.
            </li>
            <li>We invite you to <span class="bg-pink-600 font-semibold">learn and practice</span> the art of making
              good technology decisions.
              Learn to make architecture decisions, by playing architecture games, based on real life situations *.
            </li>
          </ul>
          <p class="text-sm text-semibold mt-12 text-white">
            * - All things described in these tales, have happened in reality, names and identities have been changed,
            to
            protect privacy,
            no animals were harmed.
          </p>
        </div>
        <!-- call to action button -->
        <div
          class="
          flex flex-col lg:flex-row align-baseline
          group
          bg-pink-600 text-white border-1 shadow-md rounded-lg my-8 font-bold text-2xl text-center p-4 uppercase border-2 z-30">
          <span class="inline-block px-4 group-hover:font-extrabold text-4xl">Let's play!</span>
          <PlayIcon size="2x" class="inline-block px-2 -mt-2 group-hover:text-pink-200"/>
        </div>
      </div>

      <!-- timeline with events  -->
      <div class="relative w-full flex flex-col bg-pink-400 overflow-hidden ">
        <!-- the timeline itself -->
        <div class="absolute border-pink-50 order-1 h-full border-r-8 w-64 -ml-3.5"></div>
        <!--events -->
        <div class="z-10" v-for="ec in eventContent">
          <Event :content="ec"/>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import {PlayIcon} from "@vue-hero-icons/outline"
import Event from '../components/Event'
import NavBar from "../components/NavBar";

export default {
  components: {NavBar, Event, PlayIcon},
  data() {
    return {
      eventContent: [
        {
          when: 'November',
          who: ["Agata", "Jesper"],
          media: 'f2f',
          title: 'Another event',
          what: 'Something happened ...',
          story: 'She was quite surprised, when she heard, what was going on.',
          stats: {
            people: [{trust: -5}],
            tech: [{techdebt: +1}],
            process: [{clarity: -1}]
          }
        },
        {
          when: 'December',
          who: ['Agata', 'Niels', 'Andreas'],
          media: 'phone',
          title: 'Yet Another event',
          what: 'Something strange happened ...',
          story: 'This is the end of it. The reality hit hard. Like a bat. Or a train wreck. No train has been wrecked, she thought.',
          stats: {
            people: [{trust: -5}],
            tech: [{techdebt: +1}, {complexity: -2}],
            process: [{clarity: -1}]
          }
        }]
    }
  }
}
</script>
