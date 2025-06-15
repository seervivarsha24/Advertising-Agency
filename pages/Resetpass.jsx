import React, { useState } from "react";
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
      setMessage("Your password has been successfully updated. Back to ");
      setNewPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        {message ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-black mb-4">Success!</h2>
            <p className="text-gray-700">{message}
              <Link
                to="/Signin"
                className="inline-block text-blue-600 hover:text-blue-700 transition duration-150"
              >
                 Login
              </Link>
            </p>
          </div>
        ) : (
          <form onSubmit={handlePasswordReset}>
            <h2 className="text-2xl font-bold text-black mb-4">
              Reset Password
            </h2>
            <p className="text-gray-600 mb-6">
              Enter and confirm your new password.
            </p>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <div className="mb-4">
              <label
                htmlFor="newPassword"
                className="block text-gray-700 font-medium mb-2"
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
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="confirmPassword"
                className="block text-gray-700 font-medium mb-2"
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
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
            >
              Update Password
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ResetPassword;
