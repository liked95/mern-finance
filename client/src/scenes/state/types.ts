export interface ExpensesByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface Month {
  _id: string;
  month: string;
  revenue: number;
  expenses: number;
  operationalExpenses: number;
  nonOperationalExpenses: number;
}

export interface Day {
  _id: string;
  date: string;
  revenue: number;
  expenses: number;
}

export interface GetKpisResponse {
  id?: string;
  _id: string;
  __v: number;
  totalProfit: number;
  totalRevenue: number;
  totalExpenses: number;
  expensesByCategory: ExpensesByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

export interface GetProductsResponse {
  id?: string;
  _id: string;
  __v: number;
  price: number;
  expense: number;
  transactions: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GetTransactionsResponse {
  id?: string;
  _id: string;
  __v: number;
  buyer: string;
  amount: number;
  productIds: string[];
  createdAt: string;
  updatedAt: string;
}
