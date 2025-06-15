import {useState,React,useEffect} from "react";
import AdHeader from "../Subcomp/AdDasheader";
import AdSidebar from "../Subcomp/DashSidenav";

const CreateAdvertisement = () => {
  const [isDepositOpen, setIsDepositOpen] = useState(false);
  const [isAdsOpen, setIsAdsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply dark mode class to the <html> element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "text-gray-800"} min-h-screen flex flex-col`}>
    <AdHeader
      darkMode={darkMode}
      toggleDarkMode={toggleDarkMode}
      isSidebarExpanded={isSidebarExpanded}
      setIsSidebarExpanded={setIsSidebarExpanded}
    />
    
    {/* Main Content */}
    <div className="flex flex-1 overflow-hidden">
      {/* Sidebar */}
      <AdSidebar darkMode={darkMode} isSidebarExpanded={isSidebarExpanded} />
        <div className=" rounded-xl  p-11 ">
      
          <h2 className="text-2xl font-semibold mt-10 text-center mb-7">
            Create Advertisement
          </h2>

          {/* Type of Advertisements Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-center">
              Types of Advertisements
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* First Advertisement Card */}
              <div className="bg-gray-50 border rounded-xl  p-4 text-center flex flex-col justify-between">
                <h4 className="text-md font-medium mb-4  text-gray-500 rounded-lg py-2">
                  In-Page Push Notifications
                </h4>
                <div className="border p-4 rounded-lg bg-gray-100 mb-4">
                  <p>
                    Type: <span className="font-semibold text-gray-500">Image</span>
                  </p>
                  <p>
                    Width: <span className="font-semibold text-gray-500">300 px</span>
                  </p>
                  <p>
                    Height: <span className="font-semibold text-gray-500">300 px</span>
                  </p>
                </div>
                <button className="text-gray-700 bg-gray-400 px-4 py-2 rounded-lg mt-2">
                  Please Purchase a Plan First
                </button>
              </div>

              {/* Second Advertisement Card */}
              <div className="bg-gray-50 border rounded-xl  p-4 text-center flex flex-col justify-between">
                <h4 className="text-md font-medium mb-4  text-gray-500 rounded-lg py-2">
                  Full-Screen Banner Overlaying 
                </h4>
                <div className="border p-4 rounded-lg bg-gray-100 mb-4" >
                  <p>
                    Type: <span className="font-semibold text-gray-500">Image</span>
                  </p>
                  <p>
                    Width: <span className="font-semibold text-gray-500">1024 px</span>
                  </p>
                  <p>
                    Height: <span className="font-semibold text-gray-500">768 px</span>
                  </p>
                </div>
                <button className=" text-gray-700 bg-gray-400 px-4 py-2 rounded-lg mt-2">
                  Please Purchase a Plan First
                </button>
              </div>

              {/* Third Advertisement Card */}
              <div className="bg-gray-50 border rounded-xl p-4 text-center flex flex-col justify-between">
                <h4 className="text-md font-medium mb-4 text-gray-500 rounded-lg py-2">
                  Branding Site
                </h4>
                <div className="border p-4 rounded-lg bg-gray-100 mb-4">
                  <p>
                    Type: <span className="font-semibold text-gray-500">Image</span>
                  </p>
                  <p>
                    Width: <span className="font-semibold text-gray-500">1830 px</span>
                  </p>
                  <p>
                    Height: <span className="font-semibold text-gray-500">854 px</span>
                  </p>
                </div>
                <button className="text-gray-700 bg-gray-400 px-4 py-2 rounded-lg mt-2">
                  Please Purchase a Plan First
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAdvertisement;