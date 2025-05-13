import React, { useContext, useState } from "react";
import AuthLayout from "../../components/Layouts/AuthLayout";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/Inputs/Input";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });
      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div className="lg:w-[90%] h-full flex flex-col justify-center items-center px-6">
        {/* Welcome Back Message */}
        <div className="text-center mb-10">
          <h3 className="text-4xl font-extrabold text-emerald-800">Welcome Back</h3>
          <p className="text-base text-gray-700 mt-3">
            Login to access your personalized dashboard
          </p>
        </div>

        {/* Login Form */}
        <div className="w-110 max-w-lg bg-gradient-to-br from-emerald-100 to-emerald-300 p-10 rounded-2xl shadow-xl border border-emerald-300">
          <form onSubmit={handleLogin} className="space-y-8">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-emerald-900 mb-2">
                Email Address
              </label>
              <Input
                value={email}
                onChange={({ target }) => setEmail(target.value)}
                placeholder="john@example.com"
                type="text"
                className="border border-emerald-400 focus:ring-emerald-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-emerald-900 mb-2">
                Password
              </label>
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                placeholder="Min 8 Characters"
                type="password"
                className="border border-emerald-400 focus:ring-emerald-500"
              />
            </div>

            {/* Error Message */}
            {error && <p className="text-red-600 text-sm">{error}</p>}

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-emerald-700 text-white font-bold rounded-lg shadow-md hover:bg-emerald-800 transition-all"
            >
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="text-sm text-gray-800 mt-8 text-center">
            Don’t have an account?{" "}
            <Link className="font-semibold text-emerald-700 underline hover:text-emerald-900" to="/signup">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginForm;
