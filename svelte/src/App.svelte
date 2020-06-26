<script>
  import Clock from "./Components/Clock.svelte";
  import Weather from './Components/Weather.svelte';
  import Alarms from './Components/Alarms.svelte';
</script>

<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<main class="bg-pink-500">
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
