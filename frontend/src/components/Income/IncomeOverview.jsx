import React, { useEffect, useState } from "react";
import { LuPlus } from "react-icons/lu";
import CustomBarChart from "../charts/CustomBarChart";
import { prepareIncomeBarChartData } from "../../utils/helper";

const IncomeOverview = ({ transactions, onAddIncome }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const result = prepareIncomeBarChartData(transactions);
    setChartData(result);

    return () => {};
  }, [transactions]);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-lg font-bold text-emerald-800">Income Overview</h5>
          <p className="text-xs text-gray-500 mt-0.5">
            Track your earnings over time and analyze your income trends.
          </p>
        </div>

        <button
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition-all"
          onClick={onAddIncome}
        >
          <LuPlus className="text-lg" />
          Add Income
        </button>
      </div>

      {/* Chart Section */}
      <div className="mt-10">
        <CustomBarChart data={chartData} />
      </div>
    </div>
  );
};

export default IncomeOverview;
