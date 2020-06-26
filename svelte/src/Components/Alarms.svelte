<script>
  import Alarm from "./Alarm.svelte";
  let alarm = true;
</script>

{#if alarm}

  <div class="flex flex-col justify-center items-center h-full">
    <p class="mb-4">No alarms set yet.</p>
    <button
      class="py-2 px-3 rounded border-2 border-white font-bold text-white
      hover:bg-white hover:text-gray-800">
      Add alarm +
    </button>
  </div>
{:else}
  <div class="flex justify-center items-center h-full w-full p-8">
    <Alarm />
  </div>
{/if}
