import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "./Authlayout";

function Forget() {
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    navigate('/verify-code')
  }
  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-4">Forgot Password?</h2>
      <p className="text-sm text-gray-400 mb-6">
        Enter your email below, and we'll send you a verification code to reset your password.
      </p>

      <form onSubmit={handleNext}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="block w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition"
        >
          Next
        </button>
      </form>

      <div className="flex justify-center mt-[20px]">
        <Link
          to="/Signin"
          className="text-blue-400 !no-underline hover:text-blue-500 text-base font-medium transition"
        >
          Back
        </Link>
      </div>
    </AuthLayout>
  );
}

export default Forget;
