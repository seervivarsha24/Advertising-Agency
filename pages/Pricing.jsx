import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import logopng from "../Images/logopng@2x.png";

function Pricing() {
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I make a yearly payment?",
      answer:
        "You can make a yearly payment by navigating to the billing section in your account and selecting the yearly plan. This gives you a discount compared to monthly payments.",
    },
    {
      question: "How does this technology work?",
      answer:
        "Our platform leverages blockchain-based ecosystems to ensure transparency, scalability, and security while promoting sustainable energy usage.",
    },
    {
      question: "What is the community benefit?",
      answer:
        "Our community benefits from lower energy costs, seamless integrations, and the opportunity to contribute to a greener planet.",
    },
    {
      question: "Can I have team members on different plans?",
      answer:
        "Yes, you can assign different plans to team members based on their roles and requirements.",
    },
  ];

  return (
    <>
      <Header />
      <main data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
      <section className="bg-gradient-to-b from-orange-50 to-white mt-20">
        {/* Navbar */}
        {/* <nav className="flex justify-between items-center px-8 py-4">
          {/* Logo */}
          {/* <div className="flex items-center space-x-2">
            <img src={logopng} alt="Logo" className="w-8 h-8" />
          </div>
          {/* Links */}
          {/* <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Elements
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-blue-500">
                Pages
              </a>
            </li>
          </ul>
          {/* Get Started Button */}
          {/* <a
            href="#"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Get Started
          </a>
        </nav> */} 

        {/* Hero Section */}
        <div className="container">
          <div className="text-center py-16">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">
              Choose the best <br /> plan for your <br /> business
            </h1>
            <p className="text-gray-500">Non blandit massa enim nec.</p>
          </div>
        </div>
        {/* Pricing Options */}
        <div className="container">
          <div className=" mt-24 mb-20 flex justify-center items-center">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Features Section */}
              <div className="bg-blue-900 text-white rounded-xl p-6 space-y-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                <h2 className="text-xl font-bold">Features</h2>
                <ul className="space-y-4">
                  {[
                    "Document watermarking",
                    "Collaboration with up to 10 users",
                    "Built-in integrations with Office 365 and G Suite",
                    "Admin Console access",
                    "Data loss protection",
                    "Custom branding",
                    "Password policy enforcement",
                    "HIPAA/FedRAMP compliance",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <span>{feature}</span>
                      <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pricing Section */}
              <div className="bg-white rounded-xl p-6 space-y-6 shadow-md aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                <div className="flex justify-between items-center">
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
                    Monthly
                  </button>
                  <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
                    Annually
                  </button>
                </div>
                <div className="space-y-6">
                  {/* Starter Plan */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">Starter</h3>
                      <p className="text-sm text-gray-500">Save 25%</p>
                    </div>
                    <div>
                      <p className="text-xl font-bold">$35</p>
                      <span className="text-sm text-gray-500">/Month</span>
                    </div>
                  </div>

                  {/* Business Plan */}
                  <div className="border rounded-lg p-4 flex justify-between items-center bg-blue-100 border-blue-500">
                    <div>
                      <h3 className="text-lg font-bold text-blue-700">
                        Business
                      </h3>
                    </div>
                    <div>
                      <p className="text-xl font-bold text-blue-700">$49</p>
                      <span className="text-sm text-gray-500">/Month</span>
                    </div>
                  </div>

                  {/* Enterprise Plan */}
                  <div className="border rounded-lg p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-bold">Enterprise</h3>
                    </div>
                    <div>
                      <p className="text-xl font-bold">$89</p>
                      <span className="text-sm text-gray-500">/Month</span>
                    </div>
                  </div>
                  <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-auto">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="container py-12 bg-white">
          <div className=" mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 mt-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                Augue lacus viverra vitae congue eu consequat ac felis.
              </p>
            </div>
            <div className="max-w-3xl mx-auto p-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-300 py-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-900"
                  >
                    <span>{faq.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transform transition-transform ${
                        openIndex === index ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
      <div className="flex items-center justify-center mt-40">
        <div className="bg-[#0A223D] text-white p-8 rounded-lg shadow-md w-full pb-14 relative overflow-hidden md:bg-cover mx-10 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
          {/* Background Lines */}
          <div className="absolute inset-0 z-0 overflow-hidden aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="absolute top-0 left-0 w-full h-full"
            >
              <path
                fill="none"
                stroke="#D03B57"
                strokeWidth="2"
                d="M0,160L60,149.3C120,139,240,117,360,117.3C480,117,600,139,720,154.7C840,171,960,181,1080,160C1200,139,1320,85,1380,58.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4 text-center mt-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              Are you a non-profit <br /> organization?
            </h2>
            <p className="text-sm mb-6 text-gray-500 text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
              If you have a private project or are a non-profit organization,
              <br /> you can run one scan profile for free with unlimited use.
            </p>
            <div className="flex justify-center items-center mt-3">
              <button className="bg-[#E34047] text-white font-semibold py-3 px-[1rem] md:px-7 rounded-md hover:bg-red-600 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                Contact us with a request
              </button>
            </div>
          </div>
        </div>
      </div>
      </main>
      <Footer />
    </>
  );
}

export default Pricing;
