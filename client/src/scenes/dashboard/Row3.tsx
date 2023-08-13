import DashboardBox from "@/components/DashboardBox";
import { useGetKpiQuery, useGetProductsQuery, useGetTransactionsQuery } from "../state/api";

const Row3 = () => {
  const { data: kpiData } = useGetKpiQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  console.log("🚀 ~ file: Row3.tsx:6 ~ Row3 ~ transactionData:", transactionData)
 
  return (
    <>
      <DashboardBox gridArea="g"></DashboardBox>
      <DashboardBox gridArea="h"></DashboardBox>
      <DashboardBox gridArea="i"></DashboardBox>
      <DashboardBox gridArea="j"></DashboardBox>
    </>
  );
};

export default Row3;
