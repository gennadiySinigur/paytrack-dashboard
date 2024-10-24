export interface FinanceOverview {
  general_overview: GeneralOverview;
  financial_summary: FinancialSummary;
  top_overdue: TopOverdue;
  cashflow: number[];
}

interface GeneralOverview {
  total_invoiced: OverviewDetails;
  total_payments: OverviewDetails;
}

interface OverviewDetails {
  amount: number;
  paid: PaymentStatus;
  unpaid: UnpaidStatus;
  average_payment_date: string;
}

interface PaymentStatus {
  amount: number;
}

interface UnpaidStatus {
  amount: number;
  percentage: number;
}

interface FinancialSummary {
  invoices: FinancialSummaryDetails;
  payments: FinancialSummaryDetails;
}

interface FinancialSummaryDetails {
  total: number;
  received: number;
  due: number;
  overdue: number;
  totalCount: number;
  receivedCount: number;
  dueCount: number;
  overdueCount: number;
  average_payment_days: number;
}

interface TopOverdue {
  invoices: any[];
  payments: any[];
  invoicesTotal: number;
  paymentsTotal: number;
}