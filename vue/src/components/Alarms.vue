<template>
  <fragment>
    <div
      v-if="alarm"
      class="flex justify-center items-center h-full w-full p-8"
    >
      <Alarm />
    </div>
    <div v-else class="flex flex-col justify-center items-center h-full">
      <p class="mb-4">No alarms set yet.</p>
      <button
        class="py-2 px-3 rounded border-2 border-white font-bold text-white
      hover:bg-white hover:text-gray-800"
      >
        Add alarm +
      </button>
    </div>
  </fragment>
</template>

<script>
import Alarm from './Alarm.vue';

export default {
  components: {
    Alarm,
  },
  data() {
    return {
      alarm: false,
    };
  },
};
</script>

<style></style>
