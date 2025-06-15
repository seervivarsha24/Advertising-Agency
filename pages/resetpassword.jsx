import React, { useState } from "react";
import AuthLayout from "./Authlayout"; // Import the reusable layout component
import { Link } from "react-router-dom";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handlePasswordReset = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      setMessage("");
    } else {
      setError("");
      setMessage("Your password has been successfully updated.");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <AuthLayout>
      {message ? (
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Success!</h2>
          <p className="text-gray-300 mb-4">{message} </p>
          <div className="mt-4">
            <Link
              to="/Signin"
              className="inline-block text-blue-400 hover:text-blue-500 transition duration-150"
            >
              Go to Login
            </Link>
          </div>
        </div>
      ) : (
        <form onSubmit={handlePasswordReset}>
          <h2 className="text-3xl font-bold text-white mb-4">Reset Password</h2>
          <p className="text-sm text-gray-400 mb-6">
            Enter and confirm your new password below.
          </p>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-6">
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Enter new password"
              required
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300 mb-2"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm new password"
              required
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 border border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:from-orange-600 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 transition"
          >
            Update Password
          </button>
        </form>
      )}
    </AuthLayout>
  );
}

export default ResetPassword;
