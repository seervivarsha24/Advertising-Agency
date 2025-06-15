import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { Country, State, City } from "country-state-city";

function Modal({ title, onClose }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const [phone, setPhone] = useState("");

  // Fetch Countries
  const countryOptions = Country.getAllCountries().map((country) => ({
    value: country.isoCode,
    label: country.name,
  }));

  // Fetch States Based on Selected Country
  const stateOptions = selectedCountry
    ? State.getStatesOfCountry(selectedCountry.value).map((state) => ({
        value: state.isoCode,
        label: state.name,
      }))
    : [];

  // Fetch Cities Based on Selected State
  const cityOptions = selectedState
    ? City.getCitiesOfState(selectedCountry.value, selectedState.value).map(
        (city) => ({
          value: city.name,
          label: city.name,
        })
      )
    : [];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      alert("Please select an option.");
      return;
    }

    if (selectedOption === "publish") {
      window.location.href = "/PublisherDash";
    } else {
      window.location.href = "/AdvertiserDash";
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40 hover:first:only:first-letter:file:placeholder:">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Modal Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        {/* Heading */}
        <h1 className="text-lg font-semibold text-gray-700 mb-3 ">
          Tell us More About Yourself
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Options */}
          <div className="mb-2">
            <label className="block text-gray-700 font-medium mb-1">
              What would you like to do?
            </label>
            <div className="flex flex-col space-y-1">
              <label className="flex items-center space-x-1">
                <input
                  type="radio"
                  name="option"
                  value="publish"
                  checked={selectedOption === "publish"}
                  onChange={() => setSelectedOption("publish")}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">I want to publish an ad</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="option"
                  value="advertise"
                  checked={selectedOption === "advertise"}
                  onChange={() => setSelectedOption("advertise")}
                  className="w-4 h-4"
                />
                <span className="text-gray-700">I want to advertise an ad</span>
              </label>
            </div>
          </div>

          {/* Country, State, City Selection */}
          <div className="mb-1">
            <label className="block text-gray-700 font-bold text-sm mb-1">
              Country <span className="text-red-500">*</span>
            </label>
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={(selected) => {
                setSelectedCountry(selected);
                setSelectedState(null); // Reset state selection
                setSelectedCity(null); // Reset city selection
              }}
              className="w-full"
              placeholder="Select your country"
              required
            />
          </div>

          <div className="flex space-x-2 mb-1">
            <div className="w-1/2">
              <label className="block text-gray-700 font-bold text-sm mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <Select
                options={stateOptions}
                value={selectedState}
                onChange={(selected) => {
                  setSelectedState(selected);
                  setSelectedCity(null); // Reset city selection
                }}
                isDisabled={!selectedCountry}
                className="w-full"
                placeholder="Select your state"
                required
              />
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 font-bold text-sm mb-1">
                City <span className="text-red-500">*</span>
              </label>
              <Select
                options={cityOptions}
                value={selectedCity}
                onChange={setSelectedCity}
                isDisabled={!selectedState || !selectedCountry}
                className="w-full"
                placeholder="Select your city"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Phone Number"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:ring focus:ring-blue-200"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center space-x-2 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
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
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
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

export default Modal;
