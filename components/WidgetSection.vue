<template>
  <div class="mb-24">
    <div class="flex justify-between items-center mb-3">
      <h2 class="font-700 text-lg lg:text-xl">{{ title }}</h2>

      <button class="flex items-center gap-2">
        <span class="font-500 text-primary-blue-4 text-4">Total</span>
        <!-- <i class="md md-chevron-down h-4.5 w-4.5 min-w-4.5 block"></i> -->
        <i class="mdi-chevron-down i-mdi-chevron-down"></i>
      </button>
    </div>

    <div v-if="title === 'Financial summary'" class="flex flex-col mdPlus:flex-row flex-wrap justify-between gap-3">
      <WidgetWithChartCard
        v-for="(item, index) in financialSummaryWidgets"
        :key="index"
        :title="item.title"
        :chart-line-sense-is-income="item.chartLineSenseIsIncome"
      />
      
      <OverdueCard 
        v-for="(item, index) in financialSummaryOverdueCards"
        :key="`overdue-${index}`"
        :title="item.title"
      />
    </div>
  
    <div v-else class="flex flex-col mdPlus:flex-row justify-between gap-3">
      <WidgetCard
        v-for="(widget, index) in generalOverviewWidgets"
        :key="index"
        :title="widget.title"
        :chart-line-sense-is-income="widget.chartLineSenseIsIncome"
        :amount="widget.amount"
        :paid="widget.paid"
        :unpaid="widget.unpaid"
        :average-payment-date="widget.averagePaymentDate"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDashboardStore } from '~/stores/dashboard';
import { Transaction } from '~/types/finance-overview';

defineProps<{
  title: string;
}>();

// const { financeOverviewData } = useDashboardStore();

const dashboardStore = useDashboardStore();
const { financeOverviewData }  = dashboardStore;
const general_overview = financeOverviewData?.general_overview;

// Financial summary widget configurations
const financialSummaryWidgets = [
  { title: Transaction.Invoices, chartLineSenseIsIncome: true },
  { title: Transaction.Payments, chartLineSenseIsIncome: false }
];

// Financial summary overdue card configurations
const financialSummaryOverdueCards = [
  { title: Transaction.Invoices },
  { title: Transaction.Payments }
];

// General overview widget configurations
const generalOverviewWidgets = [
  {
    title: 'Total invoiced',
    chartLineSenseIsIncome: true,
    amount: general_overview.total_invoiced.amount,
    paid: general_overview.total_invoiced.paid.amount,
    unpaid: general_overview.total_invoiced.unpaid.amount,
    averagePaymentDate: general_overview.total_invoiced.average_payment_date
  },
  {
    title: 'Total payments',
    chartLineSenseIsIncome: false,
    amount: general_overview.total_payments.amount,
    paid: general_overview.total_payments.paid.amount,
    unpaid: general_overview.total_payments.unpaid.amount,
    averagePaymentDate: general_overview.total_payments.average_payment_date
  }
];
</script>