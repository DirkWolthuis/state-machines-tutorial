<script>
    import WeatherIcon from './WeatherIcons/WeatherIcon.svelte';
</script>
<div class="flex justify-center items-center h-full">
  <div class="flex">
    <WeatherIcon type="thunder" />
    <div class="w-full md:w-1/2 flex flex-col pl-8 justify-center">
      <h1 class="text-4xl font-bold">21 °C</h1>
      <h6 class="whitespace-no-wrap">Utrecht, Netherlands</h6>
    </div>
  </div>
</div>
