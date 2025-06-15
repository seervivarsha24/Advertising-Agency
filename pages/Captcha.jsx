import React, { useState, useEffect } from "react";
import { RefreshCw, RotateCw } from "lucide-react";
import {MdRefresh} from "react-icons/md"

const Captcha = ({ onValidate }) => {
  const [captcha, setCaptcha] = useState(generateCaptcha(8)); // Generate an 8-character CAPTCHA
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  // Function to generate a random CAPTCHA string
  function generateCaptcha(length = 6) {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  const handleChange = (e) => {
    const value = e.target.value;
    setUserInput(value);
    setError(""); // Clear error on input change

    // Validate CAPTCHA as user types
    if (value.trim().toLowerCase() === captcha.trim().toLowerCase()) {
      onValidate(true);
    } else {
      onValidate(false);
    }
  };

  const handleRefresh = () => {
    const newCaptcha = generateCaptcha(8);
    setCaptcha(newCaptcha);
    setUserInput("");
    setError("");
    onValidate(false); // Reset validation when CAPTCHA changes
  };

  return (
    <div className="captcha">
      {/* <div className="flex flex-col md:flex-row md:space-x-2"> */}
        
        <div className="w-full mb-2 md:!mb-2">
          <div className="flex bg-gray-200 px-2 py-[6px] rounded-md border border-gray-300 relative items-center">
            <div
              className=" text-black px-10 lg:px-20 font-mono text-lg w-full  text-center mt-0 flex justify-center"
              aria-label="Generated CAPTCHA"
            >
              {captcha.split("").map((char, index) => (
                <span key={index} className="inline-block w-full" style={{ letterSpacing: "0.7em" }}>
                  {char}
                </span>
              ))}
              
            </div>
            <button
              type="btn"
              onClick={handleRefresh}
              className="text-white p-1 rounded-md bg-blue-500  hover:text-blue-700 focus:outline-none"
              aria-label="Refresh CAPTCHA"
            >
              <MdRefresh size={19}/>
            </button>
          </div>
        </div>

        <div className="w-full mb-2 md:!mb-6 relative">
          <input
            type="text"
            placeholder="Enter the CAPTCHA"
            aria-label="Enter the CAPTCHA"
            value={userInput}
            onChange={handleChange}
            className="w-full border bg-slate-50 hover:!border-[#b3b3b3] rounded-md placeholder:text-sm px-3 py-2 mt-0 focus-visible:outline-[#2684FF] focus-visible:outline-1"
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      {/* </div> */}
    </div>
  );
};

export default Captcha;
