import React from 'react';
import AuthLayout from './Authlayout'; // Import the reusable layout component
import { useNavigate } from 'react-router-dom';

function Verifycode() {
  const navigate = useNavigate();

  const handleVerifyCode = (e) => {
    e.preventDefault(); // Prevent default action
    // Navigate to the Reset Password page
    navigate('/reset-password');
  };

  return (
    <AuthLayout>
      <h2 className="text-3xl font-bold text-white mb-4">Verification Code</h2>
      <p className="text-sm text-gray-400 mb-6">
        Enter the verification code sent to your email to reset your password.
      </p>

      <form onSubmit={handleVerifyCode}>
        <div className="mb-6">
          <label
            htmlFor="code"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Verification Code
          </label>
          <input
            type="text"
            id="code"
            placeholder="Enter your code"
            className="block w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4  bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition"
        >
          Verify Code
        </button>
      </form>

      <div className="flex justify-center mt-[20px]">
        <button
          onClick={() => navigate('/forget')}
          className="text-blue-400 hover:text-blue-500 text-base focus:outline-none font-medium transition"
        >
          Resend Code
        </button>
      </div>
    </AuthLayout>
  );
}

export default Verifycode;
