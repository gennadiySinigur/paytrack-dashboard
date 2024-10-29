<template>
  <div class="grid grid-cols-4 items-center justify-between smPlus:gap-2 mb-2 smPlus:mb-0">
    <div class="col-span-4 smPlus:col-span-2 justify-self-center smPlus:justify-self-auto flex items-center space-x-2">
      <i class="mdi-briefcase-outline i-mdi-briefcase-outline w-[18px] h-[18px]"></i>
      <span>{{ companyName }}</span>
    </div>

    <p class="col-span-4 smPlus:col-span-1 justify-self-center smPlus:justify-self-auto text-gray-3 text-sm order-last smPlus:order-none">
      <span>{{ daysAgo }}</span>
      <span>&nbsp;days ago</span>
    </p>
    
    <p class="col-span-4 smPlus:col-span-1 justify-self-center smPlus:justify-self-end text-lg">
      <span>{{ overdueAmount }}</span>
      <span>&nbsp;MDL</span>
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  companyName: string;
  daysAgo: number;
  overdueAmount: string;
}>();
</script>