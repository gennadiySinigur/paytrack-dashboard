<template>
  <div class="smPlus:flex justify-around mdPlus:justify-start gap-1 md:gap-6 w-full lg:w-[calc(50%-6px)] p-4 md:p-6 rounded-2 card-shadow bg-white text-lg">
    <div class="grow md:grow-0">
      <div class="flex items-center justify-center smPlus:justify-start gap-1 mb-6">
        <i 
          class="mdi-chart-line-variant i-mdi-chart-line-variant w-[18px] h-[18px]" 
          :style="{
            color: chartLineSenseIsIncome ? successColor : errorColor,
            transform: `rotateX(${chartLineSenseIsIncome ? 0 : 180}deg)`
          }"
        ></i>
        <span class="mr-4 smPlus:mr-0">{{ title }}</span>
      </div>

      <div class="flex flex-col justify-between">
        <div class="text-7 font-700 text-center smPlus:text-start mb-3">
          <span>{{ amount }}</span>
          <span>&nbsp;MDL</span>
        </div>
    
        <div class="flex justify-between smPlus:block text-sm">
          <span>Average payment date </span>
          <span class="text-primary-blue-4">{{ averagePaymentDate }} days</span>
        </div>
      </div>
    </div>

    <div class="w-2 bg-primary-light"></div>

    <div class="grow md:grow-0">
      <div class="flex justify-between items-center smPlus:block smPlus:mb-5">
        <div class="flex items-center gap-1 smPlus:mb-2">
          <i class="mdi-wallet i-mdi-wallet text-emerald-500 w-[18px] h-[18px]"></i>
          <span>Paid</span>
        </div>

        <div class="font-700">
          <span>{{ paid }}</span>
          <span>&nbsp;MDL</span>
        </div>
      </div>
      
      <div class="flex justify-between items-center smPlus:block">
        <div class="flex items-center gap-1 smPlus:mb-2">
          <i class="mdi-wallet i-mdi-wallet text-orange-400 w-[18px] h-[18px] mb-4 smPlus:mb-0"></i>
          <div class="flex flex-col smPlus:flex-row smPlus:items-center">
            <span>Not Paid</span>
            <span class="text-xs smPlus:text-sm smPlus:ml-[4px]">({{ unpaidPercent }}%)</span>
          </div>
        </div>
  
        <div class="font-700 mb-4 smPlus:mb-0">
          <span>{{ unpaid }}</span>
          <span>&nbsp;MDL</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { amount, unpaid } = defineProps<{
  title: string;
  chartLineSenseIsIncome: boolean;
  amount: number;
  paid: number;
  unpaid: number;
  averagePaymentDate: string;
}>();

const successColor = "#76ca66";
const errorColor = "#ba0000";

const unpaidPercent = computed(() => {
  return amount > 0 ? Math.floor((unpaid / amount) * 100) : 0;
});
</script>