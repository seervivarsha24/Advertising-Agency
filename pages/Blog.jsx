import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Logo from "../Images/logopng@2x.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import card01 from "../assets/img/inner/0big0654.jpg";
import card02 from "../assets/img/inner/00pxsd.jpg";
import card03 from "../assets/img/inner/00vupo.jpg";
import card04 from "../assets/img/inner/00098.jpg";
import card05 from "../assets/img/inner/px00654.jpg";
import card06 from "../assets/img/inner/pxx065.jpg";
import card07 from "../assets/img/inner/un009734.jpg";


function Blog() {
  const [showDropdown, setShowDropdown] = useState(false); // State for dropdown
  const [currentPage, setCurrentPage] = useState(1); // State for current page

  const categories = ["Forest", "Oceans", "Science", "Policy"]; // Dropdown options
  const posts = [
    {
      imgSrc:card01, // Actual image path
      authorImg:card01, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "10 Insights from Apple’s Human Interface Design Guidelines",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc: card02, // Actual image path
      authorImg:card02, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "17 UI Design Mistakes That Fails Your Website",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc:card03, // Actual image path
      authorImg: card03, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "How to make a background blur in CSS with one line of code",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc: card04, // Actual image path
      authorImg: card04, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "The Winner of the Vice Presidential Debate? Kamala’s Faces.<",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc: card05, // Actual image path
      authorImg: card05, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "SpaceX: Simple, beautiful interfaces are the future",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc: card06, // Actual image path
      authorImg:card06, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "How to make a background blur in CSS with one line of code<",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    {
      imgSrc: card07, // Actual image path
      authorImg:card07, // Actual author image path
      authorName: "Chad Faircloth",
      date: "30 Sep, 2020",
      categories: ["Design", "Developer"],
      time: "15min",
      title: "The Winner of the Vice Presidential Debate? Kamala’s Faces.",
      description:
        "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
    },
    // Add more posts as needed
  ];

  const totalPages = 5; // Example total pages

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-start justify-start px-4 md:px-8 mt-32">
        <div className="w-full md:max-w-xl self-start">
          {/* Heading */}
          <h1 className="text-4xl font-bold text-gray-900">News</h1>
          <p className="mt-2 text-lg text-gray-500">
            Share your stories and news with everyone.
          </p>

          {/* Search and Categories */}
          <div className="mt-6 flex items-center space-x-4">
            {/* Search Input */}
            <div className="flex items-center space-x-2 border border-gray-200 rounded-lg px-3 py-3 focus-within:ring-2 focus-within:ring-blue-500">
              <FiSearch className="text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Type your search word"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Categories Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="px-4 py-3 w-full rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 flex items-center"
              >
                Categories
                <span className="ml-2">&#9662;</span>
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <ul className="absolute left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                  {categories.map((category, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 hover:bg-gray-100 text-gray-700 cursor-pointer"
                      onClick={() => {
                        alert(`You selected: ${category}`);
                        setShowDropdown(false);
                      }}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Blog Posts Section */}
      <section className="blog_masonry three_column mt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <div
                className="card bg-white rounded-lg overflow-hidden relative group aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                key={index}
              >
                {/* Post Image */}
                <a href="#" className="block aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  <img
                    className="w-full h-56 object-cover aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                    src={post.imgSrc}
                    alt={post.title}
                  />
                </a>

                {/* Hover Content */}
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <img
                    src={post.authorImg}
                    alt={post.authorName}
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <h4 className="text-white font-semibold">{post.authorName}</h4>
                  <p className="text-sm text-gray-300">{post.date}</p>
                </div>

                {/* Title and Description */}
                <div className="p-4">
                  <h5 className="font-bold text-lg mb-2 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">{post.title}</h5>
                  <p className="text-gray-600 text-sm aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    
 


      {/* Pagination */}
      <div className="flex items-center justify-center space-x-2 mt-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
            currentPage === 1
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          &lt;
        </button>

        <button
          onClick={() => handlePageChange(1)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
            currentPage === 1
              ? "text-white bg-blue-600"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          1
        </button>

        {currentPage > 2 && (
          <span className="w-10 h-10 flex items-center justify-center text-gray-500">
            ...
          </span>
        )}

        <button
          onClick={() => handlePageChange(currentPage)}
          className="w-10 h-10 flex items-center justify-center rounded-lg text-white bg-blue-600"
        >
          {currentPage+1}
        </button>

        {currentPage < totalPages - 1 && (
          <span className="w-10 h-10 flex items-center justify-center text-gray-500">
            ...
          </span>
        )}

        <button
          onClick={() => handlePageChange(totalPages)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
            currentPage === totalPages
              ? "text-white bg-blue-600"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          {totalPages}
        </button>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 flex items-center justify-center rounded-lg ${
            currentPage === totalPages
              ? "text-gray-400 bg-gray-100 cursor-not-allowed"
              : "text-gray-900 bg-white border border-gray-300 hover:bg-gray-50"
          }`}
        >
          &gt;
        </button>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
