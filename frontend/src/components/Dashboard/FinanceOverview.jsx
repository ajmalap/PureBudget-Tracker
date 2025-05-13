import React from "react";
import CustomPieChart from "../charts/CustomPieChart";

const FinanceOverview = ({ totalBalance, totalIncome, totalExpense }) => {
  // Updated colors for Total Balance, Total Expenses, and Total Income
  const COLORS = ["#34D399", "#EF4444", "#FBBF24"]; // Green, Red, Yellow

  const balanceData = [
    { name: "Total Balance", amount: totalBalance },
    { name: "Total Expenses", amount: totalExpense },
    { name: "Total Income", amount: totalIncome },
  ];

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <h5 className="text-lg font-semibold text-gray-800">Financial Overview</h5>
      </div>

      <CustomPieChart
        data={balanceData}
        label="Total Balance"
        totalAmount={`$${totalBalance}`}
        colors={COLORS}
        showTextAnchor
      />
    </div>
  );
};

export default FinanceOverview;
