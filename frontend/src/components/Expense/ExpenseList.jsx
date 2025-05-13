import React from "react";
import TransactionInfoCard from "../cards/TransactionInfoCard";
import moment from "moment";
import { LuDownload } from "react-icons/lu";

const ExpenseList = ({ transactions, onDelete, onDownload }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-bold text-emerald-800">All Expenses</h5>

        <button
          className="flex items-center gap-2 bg-emerald-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-emerald-700 transition-all"
          onClick={onDownload}
        >
          <LuDownload className="text-base" /> Download
        </button>
      </div>

      {/* Expense List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {transactions?.map((expense) => (
          <TransactionInfoCard
            key={expense._id}
            title={expense.category}
            icon={expense.icon}
            date={moment(expense.date).format("Do MMM YYYY")}
            amount={expense.amount}
            type="expense"
            onDelete={() => onDelete(expense._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
