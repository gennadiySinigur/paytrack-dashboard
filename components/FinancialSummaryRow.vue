<template>
  <div class="flex justify-between items-center mb-2">
    <div class="flex items-center mr-4">
      <div
        :class="{ 'font-700': title === 'Total' }"
        :style="{ backgroundColor: labelColor }"
        class="flex h-20 w-20 min-w-20 max-w-20 items-center justify-center overflow-hidden rounded-full text-xs text-white mr-[10px]"
      >
        {{ count }}
      </div>
  
      <p :class="{ 'font-700': title === 'Total' }">{{ title }}</p>
    </div>

    <div :class="{ 'font-700': title === 'Total' }">
      <span>{{ amount }}</span>
      <span>&nbsp;MDL</span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
  isTotal?: boolean;
  labelColor: string;
  amount: number;
  count: number;
}>();
</script>