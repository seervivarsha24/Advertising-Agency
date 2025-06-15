import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-8 left-8 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-30"></div>
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-r from-green-500 to-teal-400 rounded-full blur-xl opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative bg-gray-900 p-8 rounded-2xl shadow-2xl max-w-md w-full border border-gray-700">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
