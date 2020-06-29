<template>
  <div id="app">
    <main>
      <div class="w-screen h-screen flex flex-wrap bg-gray-900 text-white">
        <div class="w-full md:w-1/2">
          <Clock />
        </div>
        <div class="w-full md:w-1/2 flex flex-col">
          <div class="h-full">
            <Weather />
          </div>
          <div class="h-full">
            <Alarms />
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Clock from "./components/Clock.vue";
import Alarms from './components/Alarms.vue';
import Weather from './components/Weather.vue';

export default {
  name: "App",
  components: {
    Clock,
    Alarms,
    Weather
  },
};
</script>

<style>

</style>
