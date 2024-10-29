<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-primary-light text-primary-dark">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-red-500 mb-6">404</h1>
      <p class="text-2xl font-semibold text-gray-3 mb-4">Oops! Page Not Found</p>
      <p class="text-lg text-gray-3 mb-8">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>
      <NuxtLink 
        to="/" 
        class="inline-block px-6 py-3 font-semibold text-white bg-primary-blue-4 rounded-md hover:bg-primary-blue-3 transition-colors duration-300"
      >
        Go back to Homepage
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
});
</script>