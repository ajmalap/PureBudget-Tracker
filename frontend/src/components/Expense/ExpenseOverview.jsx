import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomLineChart from "../Charts/CustomLineChart";
import { prepareExpenseLineChartData } from "../../utils/helper";

const ExpenseOverview = ({ transactions, onExpenseIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareExpenseLineChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg font-bold text-emerald-800">Expense Overview</h5>
          <p className="text-xs text-gray-500 mt-0.5">
            Track your spending trends over time and gain insights into where your money goes.
          </p>
        </div>

        <button
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition-all"
          onClick={onExpenseIncome}
        >
          <LuPlus className="text-lg" />
          Add Expense
        </button>
      </div>

      {/* Chart Section */}
      <div className="mt-10">
        <CustomLineChart data={chartData} />
      </div>
    </div>
  );
};

export default ExpenseOverview;
