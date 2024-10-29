<template>
  <div class="w-full mdPlus:w-[calc(50%-6px)] rounded-2 p-4 md:p-6 card-shadow bg-white text-lg">
    <div class="flex items-center justify-center smPlus:justify-start gap-3 mb-3">
      <div class="flex items-center h-20 w-20 min-w-20 max-w-20 items-center justify-center overflow-hidden rounded-full text-xs text-white bg-red-500"></div>
      
      <div>
        <span>Top-5 Overdue </span>
        <span>{{ title }}</span>
      </div>
    </div>

    <Divider type="horizontal"/>

    <div v-if="top_overdue && top_overdue.invoices && top_overdue.payments">
      <div v-if="title === Transaction.Invoices" v-for="(row, index) in top_overdue.invoices">
        <OverdueRow
          :key="index"
          :company-name="row.companyName" 
          :days-ago="row.daysAgo"
          :overdue-amount="row.overdueAmount"
        />
      </div>
  
      <div v-if="title === Transaction.Payments" v-for="(row, index) in top_overdue.payments">
        <OverdueRow
          :key="index"
          :company-name="row.companyName" 
          :days-ago="row.daysAgo"
          :overdue-amount="row.overdueAmount"
        />
      </div>
    </div>

    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard';
import { Transaction } from '~/types/finance-overview';

defineProps<{
  title: string;
}>();

const { financeOverviewData } = useDashboardStore();
const { top_overdue } = financeOverviewData || {};
</script>