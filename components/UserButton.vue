<template>
  <button 
    :style="variantStyles" 
    class="hidden lg:flex justify-between items-center px-4 py-2 gap-2 rounded-2"
  >
    <div class="flex justify-center items-center bg-[#116ACC] rounded-full">
      <slot name="circleAvatar" />
    </div>
    
    <div class="text-start">
      <p class="text-sm">{{ userName }}</p>
      <p class="text-2.5 text-primary-blue-4 font-500">
        <slot name="secondaryText" />
      </p>
    </div>
    
    <div>
      <slot name="additionalIcon" />
    </div>
  </button>
</template>

<script setup lang="ts">
const { variant } = defineProps<{
  userName: string;
  variant: "outlined" | "filled";
}>();

const variantStyles = computed(() => ({
  background: variant === 'filled' ? '#f7f2e8' : '',
  border: variant === 'filled' ? '' : '1px solid #9ca3af',
}));
</script>