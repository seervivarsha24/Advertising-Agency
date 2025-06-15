import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo-o.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCompass, faPhone } from "@fortawesome/free-solid-svg-icons";
import open from "../Images/view.png";
import hide from "../Images/hide.png";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Captcha from "./Captcha";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

function Signin() {
  const clientId =
    "1037113980673-gnbhi8am2dnfl3gqrg6ahh2o8v6c63qa.apps.googleusercontent.com";

  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isCaptchaValid, setCaptchaValid] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  // Handle CAPTCHA validation
  const handleCaptchaValidation = (isValid) => {
    setCaptchaValid(isValid);
  };

  // Handle Google Login Success
  const handleSuccess = (response) => {
    console.log("Google Login Success:", response);
  };

  // Handle Google Login Failure
  const handleFailure = (response) => {
    console.error("Google Login Failed:", response);
  };

  return (
    <>
      {/* <Header /> */}
      <div className="min-h-screen bg-[#0b2238] flex items-center justify-center py-12">
        <div className="flex flex-col md:flex-row  text-gray-900 max-w-7xl w-full rounded-lg overflow-hidden p-6 pt-0 md:p-8">
          {/* Left Section */}
          <div className="md:w-1/2 flex flex-col text-white justify-start items-start p-6 space-y-4">
            <div className="flex items-center mb-6">
              <Link to="/">
                <img src={logo} alt="Logo" className="w-10 h-12 md:w-[50px] md:h-[62px] mr-3" />
              </Link>
              <h1 className="text-5xl md:text-6xl font-extrabold ml-3">Rakon.</h1>
            </div>
            
            <div className="text-[#f1f5f9] mt-4 space-y-12">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-600 shrink-0">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="text-white text-2xl"
                  />
                </div>
                <p className="text-2xl font-semibold">Create an account</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-teal-500 shrink-0">
                  <FontAwesomeIcon
                    icon={faCompass}
                    className="text-white text-2xl"
                  />
                </div>
                <p className="text-2xl font-semibold">
                  Bring your own talent pool or let us match your posts with the
                  best ones.
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-yellow-500 shrink-0">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-white text-2xl"
                  />
                </div>
                <p className="text-2xl font-semibold">
                  Get in touch with talents with just a few clicks, no cold
                  calls.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 bg-white flex flex-col justify-center items-center p-6 rounded-lg shadow-lg">
            <div className="w-full max-w-md">
              <form className="space-y-3">
                <div className="row items-center justify-center">
                  <h2 className="text-3xl font-bold mb-3">Sign In</h2>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-sm"
                    style={{ marginBottom: "3px" }}
                  >
                    Email address <span className="text-red-500">*</span>
                  </label>
                  <div className="flex items-center border bg-gray-50 border-gray-300 focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                    <Mail className="text-[#64748b] h-4 w-4 ml-2"/>
                    <input
                      type="email"
                      id="email"
                      placeholder="Email address"
                      className="flex-1 bg-gray-50 rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block font-medium text-sm"
                    style={{ marginBottom: "3px" }}
                  >
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="flex relative items-center border bg-gray-50 border-gray-300 focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                    <Lock className="text-[#64748b] h-4 w-4 ml-2"/>
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="password"
                      placeholder="Enter password"
                      className="flex-1 bg-gray-50 rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                    />
                    <span
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer"
                      onMouseDown={togglePasswordVisibility}
                      onMouseUp={togglePasswordVisibility}
                      onMouseLeave={() => setIsPasswordVisible(false)}
                    >
                      {isPasswordVisible ? (
                        <Eye
                          className="w-4 h-4 text-[#64748b]"
                        />
                      ) : (
                        <EyeOff
                          className="w-4 h-4 text-[#64748b]"
                        />
                      )}
                    </span>
                  </div>
                </div>

                

                {/* CAPTCHA Component */}
                <Captcha onValidate={handleCaptchaValidation} className="!mt-2" />
                
                <div className="flex mt-2 mb-2 space-x-2">
                  <div className="w-full">
                    <input
                      id="remember"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe(!rememberMe)}
                      className="h-4 w-4 ml-2 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
                    />
                    <label htmlFor="remember" className="absolute ml-2 text-sm text-gray-700">
                      Remember me
                    </label>
                  </div>

                  <div className="w-[35%]">
                    <Link
                      to="/Forget"
                      className="text-sm content-end text-blue-500 hover:text-blue-700 font-medium text-right"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                </div>

                <button
                  className="w-full bg-blue-500 text-white font-medium py-1 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-200"
                  disabled={!isCaptchaValid}
                >
                  Sign In
                </button>

                <div className="flex items-center my-2 w-[60%] mx-auto">
                  <hr className="flex-grow border-t border-gray-300" />
                  <span className="mx-3 text-xs text-gray-500">Or With</span>
                  <hr className="flex-grow border-t border-gray-300" />
                </div>

                <GoogleOAuthProvider clientId={clientId}>
                  <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleFailure}
                    useOneTap
                    className="w-full py-3 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition duration-300"
                  />
                </GoogleOAuthProvider>

                <p className=" text-sm text-gray-500 text-center mb-8">
                  New User?{" "}
                  <Link
                    to="/Signup"
                    className="text-blue-600"
                  >
                    Create an account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default Signin;
