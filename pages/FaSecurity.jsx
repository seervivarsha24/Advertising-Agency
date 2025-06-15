// import { useState, React, useEffect } from "react";
// import AdHeader from "../Subcomp/AdDasheader";
// import AdSidebar from "../Subcomp/DashSidenav";

// function  FaSecurity() {
//   const [isDepositOpen, setIsDepositOpen] = useState(false);
//   const [isAdsOpen, setIsAdsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   // Apply dark mode class to the <html> element
//   useEffect(() => {
//     if (darkMode) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [darkMode]);

//   return (
//     <div
//       className={`${
//         darkMode ? "bg-gray-900 text-white" : "text-gray-800"
//       } min-h-screen flex flex-col`}
//     >
//       <AdHeader
//         darkMode={darkMode}
//         toggleDarkMode={toggleDarkMode}
//         isSidebarExpanded={isSidebarExpanded}
//         setIsSidebarExpanded={setIsSidebarExpanded}
//       />

//       {/* Main Content */}
//       <div className="flex flex-1 overflow-hidden">
//         {/* Sidebar */}
//         <AdSidebar darkMode={darkMode} isSidebarExpanded={isSidebarExpanded} />

//         <div className="bg-gray-50 rounded-xl w-full p-10 dark:bg-gray-900 mt-20 h-72 ">
//           {/* Header Section */}
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-semibold text-gray-700">
//               All Advertises
//             </h2>

//             {/* New Ticket Button */}
//             <div className="relative">
//               <input
//                 type="text"
//                 className="border rounded-full pl-4 pr-10 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 placeholder="Search by title, resolution"
//               />
//               <button className="absolute right-2 top-2 text-blue-500">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   strokeWidth="2"
//                   stroke="currentColor"
//                   className="w-5 h-5"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>

//           {/* Table Section */}
//           <div className="overflow-x-auto">
//             <table className="min-w-full bg-white border-collapse text-gray-500">
//               <thead>
//                 <tr>
//                   <th className="px-4 py-3 border-b text-left">Image</th>
//                   <th className="px-4 py-3 border-b text-left">Ad Name</th>
//                   <th className="px-4 py-3 border-b text-left">Ad Title</th>
//                   <th className="px-4 py-3 border-b text-left">Type</th>
//                   <th className="px-4 py-3 border-b text-left">Resolution</th>
//                   <th className="px-4 py-3 border-b text-left">Status</th>
//                   <th className="px-4 py-3 border-b text-left">Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td
//                     colSpan="4"
//                     className="px-7 py-6 text-center text-gray-500"
//                   >
//                     No Advertises
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default FaSecurity;
