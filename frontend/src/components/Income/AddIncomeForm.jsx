import React, { useState } from "react";
import Input from "../Inputs/Input";
import EmojiPickerPopup from "../EmojiPickerPopup";

const AddIncomeForm = ({ onAddIncome }) => {
  const [income, setIncome] = useState({
    source: "",
    amount: "",
    date: "",
    icon: "",
  });

  const handleChange = (key, value) => setIncome({ ...income, [key]: value });

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 border border-teal-200">
      {/* Header Section */}
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-teal-700">Add Income</h2>
        <p className="text-sm text-gray-500">
          Fill in the details below to track your income sources.
        </p>
      </div>

      {/* Emoji Picker */}
      <div className="flex justify-center mb-6">
        <EmojiPickerPopup
          icon={income.icon}
          onSelect={(selectedIcon) => handleChange("icon", selectedIcon)}
        />
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          value={income.source}
          onChange={({ target }) => handleChange("source", target.value)}
          label="Income Source"
          placeholder="Freelance, Salary, etc"
          type="text"
          className="border border-teal-300 focus:ring-teal-500"
        />

        <Input
          value={income.amount}
          onChange={({ target }) => handleChange("amount", target.value)}
          label="Amount"
          placeholder="Enter amount"
          type="number"
          className="border border-teal-300 focus:ring-teal-500"
        />

        <Input
          value={income.date}
          onChange={({ target }) => handleChange("date", target.value)}
          label="Date"
          placeholder="Select a date"
          type="date"
          className="border border-teal-300 focus:ring-teal-500"
        />
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button
          type="button"
          className="px-10 py-3 bg-teal-600 text-white font-semibold rounded-lg shadow-md hover:bg-teal-700 transition-all"
          onClick={() => onAddIncome(income)}
        >
          Add Income
        </button>
      </div>
    </div>
  );
};

export default AddIncomeForm;
