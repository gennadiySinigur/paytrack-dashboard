<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup>
import { useDashboardStore } from '~/stores/dashboard';

const { financeOverviewData, fetchFinanceOverviewData } = useDashboardStore();

await useAsyncData("dasboardStore", () => fetchFinanceOverviewData());

console.log("financeOverviewData", financeOverviewData);
</script>