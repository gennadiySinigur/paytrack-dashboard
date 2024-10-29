<template>
  <div
    class="
      fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center
      z-50
    "
  >
    <div
      class="
        bg-white rounded-lg p-6 max-w-96 w-full mx-4
        relative
        card-shadow
      "
    >
      <button
        class="absolute top-4 right-4 text-gray-3 hover:text-primary-blue-4"
        @click="$emit('close')"
      >
        <i class="i-heroicons-x w-6 h-6"></i>
      </button>

      <h2 class="text-2xl font-semibold text-primary-dark mb-4">An Error Occurred</h2>

      <p class="text-base text-gray-3 mb-6">
        {{ errorMessage }}
      </p>

      <div class="text-right">
        <button
          class="
            px-4 py-2 bg-primary-blue-3 text-white rounded-md
            hover:bg-primary-blue-4
            transition duration-300
          "
          @click="$emit('close')"
        >
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { error } = defineProps<{ error: Error }>();

const errorMessage = computed(() =>
  error.message || 'An unexpected error occurred.'
);
</script>