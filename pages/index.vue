<template>
  <div class="px-4">
    <PageHeader title="Dashboard" />

    <div v-if="dataLoaded">
      <div v-for="section in widgetSections">
        <WidgetSection :title="section.title" />
      </div>
    </div>

    <div v-else>
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { useDashboardStore } from "~/stores/dashboard";

const { financeOverviewData, fetchFinanceOverviewData, error } = useDashboardStore();

const dataLoaded = computed(() => !!financeOverviewData && !error);

await useAsyncData('dashboardStoreData', async () => {
  try {
    await fetchFinanceOverviewData();
  } catch (err) {
    // Error is already handled in the store
  }
});

const widgetSections = [
  {
    title: "General overview",
  },
  {
    title: "Financial summary",
  },
]
</script>