<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-primary-light text-primary-dark">
    <div class="text-center">
      <h1>{{ error?.statusCode }}</h1>
      <p class="text-2xl font-semibold text-gray-3 mb-4">Oops! Something went wrong...</p>
      
      <NuxtLink 
        to="/" 
        class="inline-block px-6 py-3 font-semibold text-white bg-primary-blue-4 rounded-md hover:bg-primary-blue-3 transition-colors duration-300"
      >
        Go back to Homepage
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface NuxtError {
  statusCode: number;
  fatal: boolean;
  unhandled: boolean;
  statusMessage?: string;
  data?: unknown;
  cause?: unknown;
}

const props = defineProps({
  error: Object as () => NuxtError
})
</script>