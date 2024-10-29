<template>
  <div class="w-130 h-130">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup lang="ts">
import { Doughnut } from 'vue-chartjs';
import { 
  ArcElement, 
  Chart as ChartJS, 
  type Color, 
  Legend, 
  Tooltip, 
  type TooltipItem,
} from 'chart.js';

const { title, financialChartData } = defineProps<{
  title: string;
  financialChartData: {
    labels: Array<string>;
    datasets: Array<{
      data: Array<number>;
      backgroundColor: Array<string>;
    }>;
  }
}>();

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = financialChartData;

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: TooltipItem<"doughnut">) {
          const dataset = tooltipItem.dataset;
          const label = dataset.label || '';
          const value = dataset.data[tooltipItem.dataIndex] || 0;

          return ` ${label}${title}: ${value} `;
        },
        labelColor: function (tooltipItem: TooltipItem<"doughnut">) {
          return {
            backgroundColor: (tooltipItem.dataset.backgroundColor as (string | Color)[])[tooltipItem.dataIndex],
            borderColor: 'transparent',
            borderWidth: 2,
          };
        },
      },
    },
  }
};
</script> 