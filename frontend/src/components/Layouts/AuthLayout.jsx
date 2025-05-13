import React from "react";
import CARD_2 from "../../assets/images/card2.png";
import PureBudgetLogo from "../../../public/PureBudget.png"; // Import the logo

const AuthLayout = ({ children }) => {
  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12">
        <div className="flex items-center mb-6">
          <img
            src={PureBudgetLogo}
            alt="PureBudget Logo"
            className="w-12 h-12 mr-4" // Adjust size and spacing
          />
          <h2 className="text-lg font-bold bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text">
            PureBudget Tracker
          </h2>
        </div>
        {children}
      </div>

      {/* Right Section */}
      <div className="hidden md:block w-[40vw] h-screen bg-gradient-to-br from-emerald-100 to-emerald-300 bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative">
        {/* Welcome Message */}
        <div className="flex flex-col items-center justify-start text-center z-20 h-full pt-16">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-emerald-800 to-emerald-600 text-transparent bg-clip-text">
            Welcome to PureBudget
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Take control of your finances with ease. Track your income, expenses and savings all in one place.
          </p>
        </div>

        {/* Image */}
        <img
          src={CARD_2}
          alt="Card Illustration"
          className="absolute bottom-10 right-10 w-64 lg:w-[90%] shadow-lg shadow-emerald-400/15 z-10"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
