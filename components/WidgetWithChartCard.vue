<template>
  <div class="smPlus:flex justify-around mdPlus:justify-start lg:justify-around gap-3 md:gap-6 w-full mdPlus:w-[calc(50%-6px)] p-4 md:p-6 rounded-2 card-shadow bg-white text-lg">
    <div class="flex-1 grow md:grow-0">
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

      <div class="flex justify-center mb-2 smPlus:block smPlus:mb-0">
        <DoughnutChart :financial-chart-data="chartData" :title="title" />
      </div>
    </div>

    <div class="flex-2 md:flex-1/2 grow md:grow-0">
      <div class="flex justify-between smPlus:block text-sm mb-5">
        <span class="mr-2 smPlus:mr-0">Average payment date </span>
        <div class="text-primary-blue-4">
          <span>{{ dynamicFinancialSummary.average_payment_days }}</span>
          <span>&nbsp;days</span>
        </div>
      </div>

      <FinancialSummaryRow 
        title="Total" 
        is-total 
        :label-color="primaryBlueColor"
        :amount="dynamicFinancialSummary.total"
        :count="dynamicFinancialSummary.totalCount"
      />

      <Divider type="horizontal" />

      <div v-for="(row, index) in financialSummaryRows">
        <FinancialSummaryRow 
          :key="index"
          :title="row.title" 
          :label-color="row.color"
          :amount="row.amount"
          :count="row.count"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useDashboardStore } from '~/stores/dashboard';
import { TransactionStatus, type FinancialSummaryDetails } from '~/types/finance-overview';

const { title } = defineProps<{
  title: string;
  chartLineSenseIsIncome: boolean;
}>();

const { financeOverviewData } = useDashboardStore();
const financial_summary= financeOverviewData.financial_summary;

const defaultFinancialSummary: FinancialSummaryDetails = {
  total: 0,
  received: 0,
  due: 0,
  overdue: 0,
  totalCount: 0,
  receivedCount: 0,
  dueCount: 0,
  overdueCount: 0,
  average_payment_days: 0,
};

const dynamicFinancialSummary = computed<FinancialSummaryDetails>(() => {
  if (financial_summary && title) {
    const summary = financial_summary[title.toLowerCase() as keyof typeof financial_summary];
    
    return summary as FinancialSummaryDetails ?? defaultFinancialSummary;
  }
  
  return defaultFinancialSummary;
});

const successColor = "#76ca66";
const errorColor = "#ba0000";
const primaryBlueColor = "rgb(17 106 204)"
const receivedColor = "#39ABF8";
const dueColor = "#BEE9FF";

const chartData = reactive({
  labels: [
    TransactionStatus.Received, 
    TransactionStatus.Due, 
    TransactionStatus.Overdue,
  ],
  datasets: [
    {
      data: [
        dynamicFinancialSummary.value.receivedCount, 
        dynamicFinancialSummary.value.receivedCount, 
        dynamicFinancialSummary.value.receivedCount,
      ],
      backgroundColor: ['#39ABF8', '#BEE9FF', '#ba0000'],
    },
  ],
});

// Watch for changes in dynamicFinancialSummary and update chartData
watch(
  () => dynamicFinancialSummary.value,
  (newSummary) => {
    chartData.datasets[0].data = [
      newSummary.receivedCount,
      newSummary.dueCount,
      newSummary.overdueCount,
    ];
  },
  { immediate: true }
);

const financialSummaryRows = [
  { 
    title: TransactionStatus.Received,  
    color: receivedColor, 
    amount: dynamicFinancialSummary.value.received,
    count: dynamicFinancialSummary.value.receivedCount, 
  },
  { 
    title: TransactionStatus.Due,  
    color: dueColor, 
    amount: dynamicFinancialSummary.value.due,
    count: dynamicFinancialSummary.value.dueCount, 
  },
  { 
    title: TransactionStatus.Overdue,  
    color: errorColor, 
    amount: dynamicFinancialSummary.value.overdue,
    count: dynamicFinancialSummary.value.overdueCount, 
  },
];
</script>