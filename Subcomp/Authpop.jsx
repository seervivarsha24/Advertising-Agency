import React, { useState } from "react";
import { Link } from "react-router-dom";

function Authpop({ title, onClose }) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Do nothing if no option is selected
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 mt-20">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <span className="material-icons">close</span> {/* Close icon */}
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Options */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              What you want to do
            </label>
            <div className="flex flex-col space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="publish"
                  checked={selectedOption === "publish"}
                  onChange={() => setSelectedOption("publish")}
                  className="mr-2"
                />
                I want to publish the ad
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  value="advertise"
                  checked={selectedOption === "advertise"}
                  onChange={() => setSelectedOption("advertise")}
                  className="mr-2"
                />
                I want to advertise the ad
              </label>
            </div>
          </div>

          {/* Submit and Cancel Buttons */}
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 bg-gray-500 text-black rounded-lg hover:bg-gray-600"
            >
              Cancel
            </button>
          
            {selectedOption && (
              <Link
                to={
                  selectedOption === "publish"
                    ? "/PublisherDash"
                    : "/AdvertiserDash"
                }
                className="py-2 px-4 bg-blue-500 text-black rounded-lg hover:bg-blue-600"
              >
                Submit
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default Authpop;
