import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../Images/logoopng@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCompass, faPhone } from "@fortawesome/free-solid-svg-icons";
import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import open from "../Images/view.png";
import hide from "../Images/hide.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs.jsx";

import Captcha from "./Captcha";
import background from "../Images/backgroundsign.jpeg";
import { Country, State, City } from "country-state-city";
import "../assets/css/bootstrap.min.css"
import Header from "../components/Header";
import Footer from "../components/Footer";
import Modal from "../Subcomp/Modal";
import { useNavigate } from "react-router-dom";
import Select,{components} from "react-select";
import { LiaPenNibSolid } from "react-icons/lia";
import { ArrowLeft, ChevronLeft, CircleDot, Eye, EyeOff, Lock, Mail, MapPin, User, Users } from "lucide-react";


function Signup() {
  // function GoogleIconButton() {
  //   const login = useGoogleLogin({
  //     onSuccess: (tokenResponse) => {
  //       console.log('Google Login Success:', tokenResponse);
  //       navigate('/Modal');
  //     },
  //     onError: (error) => {
  //       console.log('Google Login Failed:', error);
  //     },
  //   });

  //   return (
  //     <button
  //       onClick={() => login()}
  //       className="p-0 bg-transparent rounded-full focus:outline-none"
  //       title="Sign up with Google"
  //       style={{ border: 'none' }}
  //     >
  //       <img
  //         src="https://developers.google.com/identity/images/g-logo.png"
  //         alt="Google"
  //         className="w-6 h-6"
  //       />
  //     </button>
  //   );
  // }
  const customStyles = {
    placeholder : (provided) => ({
      ...provided,
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }),
    control : (provided) => ({
      ...provided,
      backgroundColor: '#fff',
      borderColor:'#dee2e6'
    })
  }
  const CustomControl = ({icon:Icon, ...rest}) => {
    const Control = (props) => (
      <components.Control{...props}>
        <Icon className="text-[#64748b] h-4 w-4 ml-2"/>
        {props.children}
      </components.Control>
    )
    return Control(rest);
  }
  const [showModal, setShowModal] = useState(false); // To control the popup
  const navigate = useNavigate();

  const handleModalSubmit = (answers) => {
    console.log("User's additional information:", answers);
    setShowModal(false); // Close the modal
    navigate("/dashboard"); // Navigate to the dashboard after collecting data
  };

  const clientId =
    "1037113980673-gnbhi8am2dnfl3gqrg6ahh2o8v6c63qa.apps.googleusercontent.com";

  const handleSuccess = (response) => {
    console.log("Google Login Success:", response);
    const userLoggedIn = true;
    if (userLoggedIn) {
      setShowModal(true); // Show the popup when GAUTH is successful
    }
  };

  const handleFailure = (response) => {
    console.log("Google Login Failed:", response);
  };

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [isCaptchaValid, setCaptchaValid] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedOpt, setSelectedOpt] = useState("+91");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [nextState,setNextState] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const options = [
    {value: "advertise", label:"Do you want to advertise your ad?"},
    {value: "publish", label:"Do you want to publish your ad?"}
  ]

  const optionss =[
    {value:"+91",label:"+91"},
    {value:"+44",label:"+44"},
    {value:"+1",label:"+1"},
    {value:"+81",label:"+81"},
    {value:"+61",label:"+61"},
  ]

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

  const [countries, setCountries] = useState(Country.getAllCountries());
  const [state, setStates] = useState([]);
  const [city, setCities] = useState([]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (confirmPassword && e.target.value !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (password && e.target.value !== password) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  };

  // Function to handle CAPTCHA validation
  const handleCaptchaValidation = (isValid) => {
    setCaptchaValid(isValid);
    setCaptchaError(!isValid); // Update error state
  };

  const handleSelection = (option) => {
    setSelectedOption(option);
  };
  const handleSelect = (option) => {
    setSelectedOpt(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isCaptchaValid) {
      setCaptchaError(true);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    console.log("Form submitted with data:", {
      password,
      selectedOption,
    });

    setError(""); // Clear any errors
    setCaptchaError(false); // Clear CAPTCHA error

    if (selectedOption === "advertisingDashboard") {
      navigate("/AdvertiserDash");
    } else if (selectedOption === "publishDashboard") {
      navigate("/PublisherDash");
    }
  };

  const handleCountryChange = (country) => {
    setSelectedCountry(country);
    setStates(State.getStatesOfCountry(country.isoCode)); // Correct method for getting states of a country
    setCities([]); // Reset cities when country changes
  };

  const handleStateChange = (state) => {
    setSelectedState(state);
    setCities(City.getCitiesOfState(selectedCountry.isoCode, state.isoCode)); // Correct method for getting cities of a state
  };

  return (
    <>
      {/* <Header /> */}
      <main data-spy="scroll" data-target="#navbar-example2" data-offset="0">

      <section className=" overflow-y-auto overflow-x-hidden">
        {/* <div className="grid grid-cols-2 md:grid-cols-1  text-gray-900 w-full overflow-hidden"> */}
          {/* <div className="flex flex-col md:flex-row text-black max-w-5xl w-full rounded-lg overflow-hidden shadow-lg  p-3"> */}
          {/* <div className="container text-gray-900 w-full overflow-hidden"> */}
            {/* <div className="row"> */}
            {/* <div className="container"> */}
              <div className="row h-screen">
                <div className="w-full md:w-1/2 text-[#fff] flex flex-col bg-[#0b2238] justify-start items-start p-4 md:p-10 mb-30">
                  <div className="container">
                    <div className="flex items-center mt-7 mb-12">
                      <Link to="/">
                        <img src={logo} alt="Logo" className="w-10 h-12 md:w-[50px] md:h-[62px] mr-3" />
                      </Link>
                      <h1 className="text-5xl md:text-6xl font-extrabold ml-3">Rakon.</h1>
                    </div>
                    <div className="text-[#f1f5f9] md:ml-2 mb-7 space-y-6 md:space-y-14">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full bg-blue-600 shrink-0">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="text-white text-lg md:text-2xl"
                          />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold">Join us</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full bg-teal-400 shrink-0">
                          <FontAwesomeIcon
                            icon={faCompass}
                            className="text-white  text-lg md:text-2xl"
                          />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold">
                          Bring your own talent pool or let us match your posts with the
                          best ones.
                        </p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 md:w-[58px] md:h-[58px] flex items-center justify-center rounded-full bg-yellow-400 shrink-0">
                          <FontAwesomeIcon
                            icon={faPhone}
                            className="text-white  text-lg md:text-2xl"
                          />
                        </div>
                        <p className="text-xl md:text-2xl font-semibold">
                          Get in touch with the talents with just a few clicks without
                          cold calls or emails.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="w-full md:w-1/2 flex bg-[#0b22380c] justify-center items-center p-2 pt-4 md:!p-[13px] ">
                  <div className="container pl-4 pr-4">
                    {/* <p className=" text-gray-500 mb-2 text-center">
                      Or Sign Up With E-Mail
                    </p> */}
                    {/* Popup Modal */}
                    {showModal && (
                      <Modal
                        title="Complete Your Profile"
                        onSubmit={handleModalSubmit}
                        onClose={() => setShowModal(false)}
                      />
                    )}
                    <div className=" container lg:pl-28 lg:pr-28">
                      <form className="space-y-2 text-black" onSubmit={handleSubmit}>
                        {/* Display the selected option */}
                        {/* {selectedOption && (
                          <div className="mt-4 p-4 bg-blue-100 text-blue-700 rounded-md text-center">
                            You selected:{" "}
                            <span className="font-medium">{selectedOption}</span>
                          </div>
                        )} */}
                        {/* {selectedOption && (
                          <div className="mt-2 p-2 bg-blue-100 text-blue-700 rounded-md text-center">
                            You selected:{" "}
                            <span className="font-medium ml-1">{selectedOption}</span>
                          </div>
                        )} */}

                        {/* Submit Button */}
                        <div className="row flex-col justify-center text-center">
                        {/* <div className="col-lg-11"> */}
                          <h2 className="text-4xl font-semibold ">Sign Up</h2>
                          <p className="text-gray-500 mt-1 text-sm font-light mb-4">Welcome! Enter your information to register</p>
                        {/* </div> */}
                        {/* <div className="col-lg-1 pr-0 pl-auto">
                          <GoogleOAuthProvider clientId={clientId}>
                            <GoogleIconButton />
                          </GoogleOAuthProvider>
                        </div> */}
                      </div>
                      
                      {!nextState && (
                        <>
                      <Tabs defaultValue="adviser">
                        <TabsList className="bg-[#ebedef] mb-4 grid grid-cols-2 gap-0 w-full">
                          <TabsTrigger value="adviser">Advertiser</TabsTrigger>
                          <TabsTrigger value="publisher">Publisher</TabsTrigger>
                        </TabsList>
                      </Tabs>

                      <div className="w-full mb-2 lg:!mb-3">
                        <GoogleOAuthProvider clientId={clientId}>
                          <GoogleLogin
                            onSuccess={(response) => {
                              console.log("Google Login Success:", response);
                              navigate("/Modal"); // Redirect to the /model page
                            }}
                            onError={(response) => {
                              console.log("Google Login Failed:", response);
                            }}
                            text="signup_with"
                            render={(renderProps) => (
                              <button
                                onClick={renderProps.onClick}
                                disabled={renderProps.disabled}
                                className="p-0 bg-transparent rounded-full focus:outline-none"
                                title="Sign up with Google"
                                style={{ border: 'none' }}
                              >
                                <img
                                  src="https://developers.google.com/identity/images/g-logo.png"
                                  alt="Google"
                                  className="w-6 h-6"
                                />
                              </button>
                            )}
                          />
                        </GoogleOAuthProvider>
                      </div>

                      <div className="flex items-center my-3 w-full mx-auto">
                        <hr className="flex-grow border-t border-gray-300" />
                        <span className="mx-3 text-xs text-gray-500">Or</span>
                        <hr className="flex-grow border-t border-gray-300" />
                      </div>

                      {/* <div className="text-base text-gray-600 justify-center items-center flex">With Email</div> */}


                        <div className="flex flex-col lg:flex-row lg:space-x-2">
                          <div className="w-full mb-3 lg:!mb-3  ">
                            <label
                              htmlFor="name"
                              className="block text-gray-700 font-medium text-sm mb-2"
                              style={{ marginBottom: "2px" }}
                            >
                              Name<span className="text-red-500"> *</span>
                            </label>
                            <div className="flex relative items-center border bg-[#fff] hover:!border-[#b3b3b3] focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                              <User className="text-[#64748b] h-4 w-4 ml-2"/>
                              <input
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Enter your full name"
                              className="flex-1 w-full bg-[#fff] rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                              required
                            />
                            </div>
                          </div>

                          <div className="w-full">
                            <label
                              htmlFor="username"
                              className="block text-gray-700  font-medium text-sm mb-2 "
                              style={{ marginBottom: "2px" }}
                            >
                              Username<span className="text-red-500"> *</span>
                            </label>
                            <div className="flex relative items-center border bg-[#fff] hover:!border-[#b3b3b3] focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                              <User className="text-[#64748b] h-4 w-4 ml-2"/>
                              <input
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Choose a username"
                                className="flex-1 w-full bg-[#fff] rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0"
                                required
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:space-x-2">
                          <div className="w-full mb-3 lg:!mb-3 ">
                            <label
                              htmlFor="email"
                              className="block text-gray-700  font-medium text-sm mb-2"
                              style={{ marginBottom: "2px" }}
                            >
                              Email Address <span className="text-red-500">*</span>
                            </label>
                            <div className="flex relative items-center border bg-[#fff] hover:!border-[#b3b3b3] focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                              <Mail className="text-[#64748b] h-4 w-4 ml-2"/>
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="flex-1 w-full bg-[#fff] rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                                required
                              />
                            </div>
                          </div>

                          <div className="w-full">
                            <label
                              htmlFor="phone"
                              className="block text-gray-700  font-medium text-sm mb-2"
                              style={{ marginBottom: "2px" }}
                            >
                              Phone Number <span className="text-red-500">*</span>
                            </label>
                            <div className="flex relative flex-wrap items-stretch w-full">
                              <select
                                name="countryCode"
                                className="flex items-center text-sm border hover:!border-[#b3b3b3] w-auto rounded-l-md px-[2px] py-[5px] bg-gray-100 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                                required
                              >
                                <option value="+91">+91</option>
                                <option value="+44">+44</option>
                                <option value="+1">+1</option>
                                <option value="+81">+81</option>
                                <option value="+61">+61</option>
                                {/* Add more country codes as needed */}
                              </select>
                              {/* <Select
                                name="countryCode"
                                styles={customStyles}
                                options={optionss}
                                value={selectedOpt}
                                onChange={handleSelect}
                                className="flex w-auto "
                                // defaultValue={optionss.find((opt) => opt.value==='+91')}
                                required
                              /> */}
                              <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Enter your phone number"
                                className="relative flex-1 w-[1%] border-t border-r placeholder:text-sm border-b hover:!border-[#b3b3b3] bg-[#fff] rounded-r-md px-[11px] py-[5px] mt-0 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                                required
                              />
                            </div>
                          </div>
                        </div>
                        
                        {/* <div>
                        //   <label
                        //     htmlFor="country"
                        //     className="block text-gray-700 font-bold text-sm"
                        //     style={{ marginBottom: "2px" }}
                        //   >
                        //     Country
                        //   </label>
                        //   <select
                        //     // id="country"
                        //     // value={selectedCountry}
                        //     // onChange={(e) => setSelectedCountry(e.target.value)}
                        //     onChange={(e) =>
                        //       handleCountryChange(
                        //         countries.find((c) => c.isoCode === e.target.value)
                        //       )
                        //     }
                        //     className="w-full border border-gray-300 bg-slate-50 rounded-md px-3 py-1 mt-0 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                        //     required
                        //   >
                        //     <option value="" disabled>
                        //       Select your country
                        //     </option>
                        //     {countries.map((country) => (
                        //       <option key={country.isoCode} value={country.isoCode}>
                        //         {country.name}
                        //       </option>
                        //     ))}
                        //   </select>
                        // </div>
                        // <div className="flex space-x-4">
                        //   <div className="w-1/2">
                        //     <label
                        //       htmlFor="state"
                        //       className="block text-gray-700 font-bold text-sm"
                        //       style={{ marginBottom: "2px" }}
                        //     >
                        //       State
                        //     </label>
                        //     <select
                        //       disabled={!selectedCountry}
                        //       // id="city"
                        //       // value={selectedCity}
                        //       // onChange={(e) => setSelectedCity(e.target.value)}
                        //       onChange={(e) =>
                        //         handleStateChange(
                        //           state.find((s) => s.isoCode === e.target.value)
                        //         )
                        //       }
                        //       className="w-full border  border-gray-300 rounded-md px-3 py-1 mt-0 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                        //       required
                        //     >
                        //       <option value="" disabled>
                        //         Select your State
                        //       </option>
                        //       {state.map((state) => (
                        //         <option key={state.isoCode} value={state.isoCode}>
                        //           {state.name}
                        //         </option>
                        //       ))}
                        //     </select>
                        //   </div>

                        //   <div className="w-1/2">
                        //     <label
                        //       htmlFor="country"
                        //       className="block text-gray-700 font-bold text-sm"
                        //       style={{ marginBottom: "2px" }}
                        //     >
                        //       City
                        //     </label>
                        //     <select
                        //       disabled={!selectedState || !selectedCountry}
                        //       // id="city"
                        //       // value={selectedCity}
                        //       // onChange={(e) => setSelectedCity(e.target.value)}

                        //       className="w-full border bg-slate-50 border-gray-300 rounded-md px-3 py-1 mt-0 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                        //       required
                        //     >
                        //       <option value="" disabled>
                        //         Select your city
                        //       </option>
                        //       {city.map((city) => (
                        //         <option key={city.name} value={city.name}>
                        //           {city.name}
                        //         </option>
                        //       ))}
                        //     </select>
                        //   </div>
                        // </div> */}
                        <div className="!mb-3" >
                          <label className="block text-gray-700  font-medium text-sm mb-2">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <Select
                            styles={customStyles}
                            options={countryOptions}
                            value={selectedCountry}
                            onChange={(selected) => {
                              setSelectedCountry(selected);
                              setSelectedState(null); // Reset state selection
                              setSelectedCity(null); // Reset city selection
                            }}
                            placeholder="Select your country"
                            components={{Control: (props) =>
                              CustomControl({...props,icon:MapPin})
                            }}
                            className="w-full"
                            required
                          />
                        </div>

                        <div className="flex flex-col md:flex-row md:space-x-2">
                          <div className="w-full mb-3 md:!mb-3 ">
                            <label className="block  text-gray-700 font-medium text-sm mb-2 ">
                              State <span className="text-red-500">*</span>
                            </label>
                            <Select
                              styles={customStyles}
                              options={stateOptions}
                              value={selectedState}
                              onChange={(selected) => {
                                setSelectedState(selected);
                                setSelectedCity(null); // Reset city selection
                              }}
                              components={{Control: (props) =>
                              CustomControl({...props,icon:MapPin})
                            }}
                              isDisabled={!selectedCountry}
                              className="w-full"
                              placeholder="Select your state"
                              required
                            />
                          </div>

                          <div className="w-full">
                            <label className="block text-gray-700  font-medium text-sm mb-2">
                              City <span className="text-red-500">*</span>
                            </label>
                            <Select
                              styles={customStyles}
                              options={cityOptions}
                              value={selectedCity}
                              onChange={setSelectedCity}
                              isDisabled={!selectedState || !selectedCountry}
                              className="w-full"
                              placeholder="Select your city"
                              components={{Control: (props) =>
                              CustomControl({...props,icon:MapPin})
                            }}
                              required
                            />
                          </div>
                        </div>
                        <div className="w-full">
                          <button onClick={()=> setNextState(true)} type="btn" className="w-[20%] p-1 transition-all duration-700 mt-2 float-left bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus-visible:outline-[#2684FF] focus-visible:outline-1">
                            Next
                          </button>
                          <p className=" text-base text-gray-600 text-center float-right mt-2 !mb-8 lg:!mb-3">
                            Already have an account?{" "}
                            <Link to="/Signin" className=" text-blue-600 ">
                              Sign in
                            </Link>
                          </p>
                        </div>
                        </>
                         )}
                        {/* <div>
                          <label className="block text-gray-700 font-medium text-sm mb-1">
                            Choose <span className="text-red-500">*</span>
                          </label>
                          <Select
                            styles={customStyles}
                            options={options}
                            value={selectedOption}
                            onChange={handleSelection}
                            components={{Control: (props) =>
                              CustomControl({...props,icon:Users})
                            }}
                            className="w-full"
                            placeholder="Select an option"
                            required
                          />
                          {selectedOption && (
                            <p className="mt-2 hidden text-gray-700">
                              You selected: <strong>{selectedOption.label}</strong>
                            </p>
                          )}
                        </div> */}

                        {/* <div className="mb-4">
                          <label
                            htmlFor="action"
                            className="block    font-medium text-sm "
                            style={{ marginBottom: "2px" }}
                          >
                            Choose
                          </label>
                          <select
                            id="action"
                            name="action"
                            value={selectedOption}
                            onChange={handleSelection}
                            className="mt-0 block w-full px-3  py-1 bg-slate-50 border border-gray-300 rounded-md shadow-sm  focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          >
                            <option value="" disabled>
                              Select an option
                            </option>
                            <option value="advertise">
                              Do you want to advertise your ad?
                            </option>
                            <option value="publish">
                              Do you want to publish your ad?
                            </option>
                          </select>
                        </div> */}
                       
                        {nextState &&(
                          <div className="lg:pl-12 lg:pr-12">
                        {/* <div className="flex flex-col lg:flex-row lg:space-x-2 "> */}
                          <div className="w-full mb-3 lg:!mb-4">
                            <label
                              htmlFor="password"
                              className="block text-gray-700  font-medium text-sm mb-2"
                              style={{ marginBottom: "2px" }}
                            >
                              Password
                            </label>
                            <div className="flex relative items-center border bg-[#fff] hover:!border-[#b3b3b3] focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                              <Lock className="text-[#64748b] h-4 w-4 ml-2"/>
                              <input
                                type={isPasswordVisible ? "text" : "password"}
                                value={password}
                                onChange={handlePasswordChange}
                                id="password"
                                placeholder="+6 Characters"
                                className="flex-1 w-full  bg-[#fff] rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                              />
                              <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
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

                          <div className="w-full mb-3 lg:!mb-4">
                            <label
                              htmlFor="confirmPassword"
                              className="block text-gray-700  font-medium text-sm mb-2"
                              style={{ marginBottom: "2px" }}
                            >
                              Confirm Password
                            </label>
                            <div className="flex relative items-center border bg-[#fff] hover:!border-[#b3b3b3] focus-visible:outline-[#2684FF] focus-visible:outline-1  rounded-md">
                              <Lock className="text-[#64748b] h-4 w-4 ml-2"/>
                              <input
                                type={isPasswordVisible ? "text" : "password"}
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                id="confirmPassword"
                                placeholder="+6 Characters"
                                className="flex-1 w-full bg-[#fff] rounded-md placeholder:text-sm focus:outline-none px-[11px] py-[5px] mt-0 "
                              />
                              <span
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                onClick={togglePasswordVisibility}
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
                            {error && (
                              <p className="text-red-500 text-sm mt-0">{error}</p>
                            )}
                          </div>
                        {/* </div> */}

                        {/* CAPTCHA Component */}
                        <Captcha onValidate={handleCaptchaValidation} />
                        {/* {captchaError && (
                            <p className="text-red-500 text-sm mt-2">
                              Captcha doesn't match!
                            </p> */}
                        {/* )} */}
                        {/* <div className="flex flex-col lg:flex-row lg:space-x-2"> */}
                          <div className="w-full mb-2 lg:!mb-2">
                            <button
                              type="submit"
                              className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus-visible:outline-[#2684FF] focus-visible:outline-1"
                            >
                              Sign Up
                            </button>
                          </div>
                          

                          
                        
                          
                          <button type="btn" onClick={()=>setNextState(false)} className="flex transition-all duration-700 gap-1 w-[20%] p-1 mt-3  text-blue-500 font-medium rounded-md  focus-visible:outline-[#2684FF] focus-visible:outline-1">
                            <ArrowLeft size={19} className="mt-[2px]"/>Back
                          </button>
                        {/* </div> */}
                        
                        {/* <div className="text-blue-600 gap-1 flex cursor-pointer" onClick={()=>setNextState(false)}> */}
                        
                      </div>
                      )}
                      </form>
                      
                    </div>
                  </div>
                </div>
              </div>
            {/* </div> */}
            </section>
      </main>
          {/* </div> */}
        {/* </div> */}
      {/* </div> */}

      {/* <Footer /> */}
    </>
  );
}

export default Signup;
