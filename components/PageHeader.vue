<template>
  <div class="flex flex-col lg:flex-row justify-between lg:items-center mb-12">
    <h1 class="text-center mdPlus:text-start text-7 lg:text-10 font-700 mb-4 lg:mb-0">{{ title }}</h1>

    <div class="flex justify-center between mdPlus:justify-start">
      <button 
        v-for="(button, index) in currencyConvertationButtons" 
        :key="index"
        class="border-primary-blue-4 text-4 line-height-4.5 md:line-height-0 md:text-xs h-34 font-500 text-primary-blue-4 hover:text-white bg-white hover:bg-primary-blue-3 mr-2 last:mr-0 px-4 py-2 rounded border border-solid"
      >
        {{ button.currency }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Currency } from '~/types/finance-overview';

defineProps<{
  title: string;
}>()

const currencyConvertationButtons = [
  { currency: Currency.MDL },
  { currency: Currency.USD },
  { currency: Currency.EUR },
  { currency: Currency.RON },
];
</script>