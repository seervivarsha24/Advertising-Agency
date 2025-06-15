// import {useState, useEffect } from "react";  // Add useEffect import
// import { Pencil } from "lucide-react";
// import AdHeader from "../Subcomp/AdDasheader";
// import AdSidebar from "../Subcomp/DashSidenav";
// //const [isDepositOpen, setIsDepositOpen] = useState(false);
//  // const [isAdsOpen, setIsAdsOpen] = useState(false);
//   const [darkMode, setDarkMode] = useState(false);
//  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   //const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

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


// export default function ProfileSettings() {
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

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleImageChange = (event) => {
//     if (event.target.files && event.target.files[0]) {
//       const imageUrl = URL.createObjectURL(event.target.files[0]);
//       setSelectedImage(imageUrl);
//     }
//   };

//   return (
//     <div className={`${darkMode ? "bg-gray-900 text-white" : "text-gray-800"} min-h-screen flex flex-col`}>
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

//         <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//           <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
//             <div className="flex justify-end">
//               <button className="bg-purple-500 text-white px-4 py-2 rounded-md text-sm">
//                 Password Setting
//               </button>
//             </div>

//             <div className="flex flex-col items-center">
//               <div className="relative">
//                 <div className="w-40 h-40 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden">
//                   {selectedImage ? (
//                     <img src={selectedImage} alt="Profile" className="w-full h-full object-cover" />
//                   ) : (
//                     <span className="text-gray-500 text-lg">No Image</span>
//                   )}
//                 </div>
//                 <label htmlFor="fileInput" className="absolute bottom-2 right-2 bg-green-500 p-2 rounded-full cursor-pointer">
//                   <Pencil className="text-white w-5 h-5" />
//                 </label>
//                 <input
//                   type="file"
//                   id="fileInput"
//                   className="hidden"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                 />
//               </div>
//               <p className="text-gray-500 text-sm mt-2">
//                 Supported files: .jpeg, .jpg (400x400px)
//               </p>
//             </div>

//             <div className="mt-6">
//               <label className="block text-gray-600 text-sm font-semibold">Username</label>
//               <input type="text" value="nick" className="w-full p-2 border rounded-md bg-gray-100" disabled />

//               <label className="block text-gray-600 text-sm font-semibold mt-3">Name</label>
//               <input type="text" value="Nikitha" className="w-full p-2 border rounded-md" />

//               <label className="block text-gray-600 text-sm font-semibold mt-3">Email</label>
//               <input type="email" value="nikithajeevana@gmail.com" className="w-full p-2 border rounded-md bg-gray-100" disabled />

//               <label className="block text-gray-600 text-sm font-semibold mt-3">Country</label>
//               <input type="text" value="Afghanistan" className="w-full p-2 border rounded-md bg-gray-100" disabled />

//               <label className="block text-gray-600 text-sm font-semibold mt-3">City</label>
//               <input type="text" value="Vijayawada" className="w-full p-2 border rounded-md" />

//               <label className="block text-gray-600 text-sm font-semibold mt-3">Phone</label>
//               <input type="text" value="938639429236" className="w-full p-2 border rounded-md bg-gray-100" disabled />
//             </div>

//             <button className="w-full mt-6 bg-purple-500 text-white p-2 rounded-md text-lg">
//               Save Changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
