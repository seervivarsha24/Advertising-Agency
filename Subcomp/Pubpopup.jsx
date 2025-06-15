import React from "react";

const Pubpopup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 md:p-7 rounded-2xl w-full max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-sans text-center mb-6 text-gray-600">
          Welcome to ADSROCK  Search Console
        </h1>
        <p className="text-center text-gray-600 mb-10">
          To start, select property type
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Domain Section */}
          <div className="relative border p-6 rounded-xl bg-gray-200">
            {/* Circle */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-blue-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              1
            </div>
            <h2 className="text-xl font-semibold mb-4 mt-6">
              Domain{" "}
              <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded-full text-sm">
                new
              </span>
            </h2>
            <ul className="text-gray-700 mb-4">
              <li>• All URLs across all subdomains (m., www., ...)</li>
              <li>• All URLs across https or http</li>
              <li>• Requires DNS verification</li>
            </ul>
            <input
              type="text"
              placeholder="example.com"
              className="w-full p-3 border rounded-lg"
            />
            <div className="flex justify-center">
  <button className="w-1/3 mt-4 text-gray-800 p-2 rounded-lg bg-white border-slate-950 text-center">
    Continue
  </button>
</div>
          </div>

          {/* URL Prefix Section */}
          <div className="relative border p-6 rounded-xl bg-white hover:shadow-md">
            {/* Circle */}
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-green-500 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold">
              2
            </div>
            <h2 className="text-xl font-semibold mb-4 mt-6">URL prefix</h2>
            <ul className="text-gray-700 mb-4">
              <li>• Only URLs under entered address</li>
              <li>• Only URLs under specified protocol</li>
              <li>• Allows multiple verification methods</li>
            </ul>
            <input
              type="text"
              placeholder="https://www.example.com"
              className="w-full p-3 border rounded-lg"
                      />
<div className="flex justify-center">
  <button className="w-1/3 mt-4 text-gray-800 p-2 rounded-lg border border-blue-500 text-center">
    Continue
  </button>
</div>

          </div>
        </div>

        <div className="text-center mt-8">
          <a href="/" className="text-blue-600 underline">
            Already started? Finish verification
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pubpopup;