import React from "react";

const SignupBackground = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* SVG Background */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#1e293b"
          fillOpacity="1"
          d="M0,256L1440,192L1440,320L0,320Z"
        ></path>
      </svg>

      {/* Second SVG wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-24"
        viewBox="0 0 1440 320"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#334155"
          fillOpacity="1"
          d="M0,256L1440,160L1440,320L0,320Z"
        ></path>
      </svg>

      {/* Content Section */}
      <div className="relative z-10 flex justify-center items-center h-full text-white">
        <div className="w-full max-w-md p-6 bg-black bg-opacity-60 rounded-xl shadow-lg">
          <h1 className="text-4xl font-bold text-center mb-4">Sign Up</h1>
          {/* Form goes here */}
          <form>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 rounded-lg text-white hover:bg-blue-700 transition duration-300"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupBackground;
