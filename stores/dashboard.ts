import type { FinanceOverview } from "~/types/finance-overview";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => ({
    financeOverviewData: {} as FinanceOverview,
    error: null as Error | null,
  }),
  actions: {
    async fetchFinanceOverviewData() {
      try {
        const { data, error } = await useFetch('http://localhost:3001/api/dashboard/general');

        if (error.value) {
          throw error.value;
        }

        this.financeOverviewData = data.value as FinanceOverview;
      } catch (err) {
        console.error('Error fetching finance overview data:', err);
        this.error = new Error('Failed to load the dashboard data. Please try again later.');
        this.financeOverviewData = {} as FinanceOverview;
      }
    },
  }
})