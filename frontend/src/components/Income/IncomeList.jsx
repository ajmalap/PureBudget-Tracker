import React from "react";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";
import { LuDownload } from "react-icons/lu";

const IncomeList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-bold text-emerald-800">Income Sources</h5>

        <button
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow hover:bg-emerald-700 transition-all"
          onClick={onDownload}
        >
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      {/* Income List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions?.map((income) => (
          <TransactionInfoCard
            key={income._id}
            title={income.source}
            icon={income.icon}
            date={moment(income.date).format("Do MMM YYYY")}
            amount={income.amount}
            type="income"
            onDelete={() => onDelete(income._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default IncomeList;
