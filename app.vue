<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import "@unocss/reset/normalize.css";
</script>

<style>
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: inherit;
}

html,
body {
  font-family: Onest, 'Roboto';
}

html {
  font-size: 16px;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

button, input, select, textarea {
  font: inherit;
  background: none;
  border: none;
  padding: 0;
}

ul, ol {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
}

button {
  cursor: pointer;
}
</style>