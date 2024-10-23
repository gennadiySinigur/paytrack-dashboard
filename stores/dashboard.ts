import type { FinanceOverview } from "~/types/finance-overview";

export const useDashboardStore = defineStore("dashboardStore", {
  state: () => ({
    financeOverviewData: {} as FinanceOverview,
  }),
  actions: {
    async fetchFinanceOverviewData() {
      const response = await useFetch("http://localhost:3001/api/dashboard/general") as any;

      console.log("response in store", response);

      if (response.data.error) {
        throw response.data.error!;
      }

      this.financeOverviewData = response.data.value;
      console.log("this.financeOverviewData", this.financeOverviewData);
    }
  }
})