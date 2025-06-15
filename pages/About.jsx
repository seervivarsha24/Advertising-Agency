import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../components/Footer.module.css";
import banner from "../assets/img/inner/12.jpg";
import "../assets/css/bootstrap.min.css";
import ourstory from "../assets/img/inner/123.jpg";
import imgo from "../assets/img/inner/231.jpg";
import imgs from "../assets/img/inner/00.jpg";
import imgse from "../assets/img/persons/17.jpg";
import imgtw from "../assets/img/persons/20.jpg";
import imgni from "../assets/img/persons/19.jpg";
import imgtt from "../assets/img/persons/22.jpg";
import img1 from "../assets/img/persons/17.jpg";
import img2 from "../assets/img/persons/19.jpg";
import img3 from "../assets/img/persons/20.jpg";
import img4 from "../assets/img/persons/22.jpg";
import {Link} from 'react-router-dom';
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import admin from '../Images/admin-users-svgrepo-com.svg';

function About() {
  const teamMembers = [
    {
      name: 'Christopher L. Belle',
      position: 'Co-Founder & CEO',
      image: img1, // You can replace this with the actual image source
      social: {
        linkedin: '#',
        twitter: '#',
        github: '#',
      },
    },
    {
      name: 'CLee Carter',
      position: 'Managing Partner',
      image: img2,
      social: {
        linkedin: '#',
        twitter: '#',
      },
    },
    {
      name: 'Mary Merrill',
      position: 'Operations Director',
      image: img3,
      social: {
        facebook: '#',
        twitter: '#',
      },
    },
    {
      name: 'John Myers',
      position: 'Chief Technology Officer',
      image: img4,
      social: {
        github: '#',
        twitter: '#',
        dribbble: '#',
      },
    },
  ];
  return (
    <>
      <Header />
     
        {/* Start banner_about */}
        {/* <section className="">
          <div className="styles.container">
            <div className="row">
              <div className="col-md-8 col-lg-6">
                <div className="banner_title_inner">
                  <div
                    
                  >
                    <span className="c-green2 font-w-500">Welcome 🖐</span>
                  </div>
                  <h1 data-aos="fade-up" data-aos-delay={100}>
                    We're excited to help you on your journey!
                  </h1>
                  <p data-aos="fade-up" data-aos-delay={200}>
                    Leave us a little info, and we’ll be in touch.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="styles.container-fluid pl-0">
            <div className="row">
              <div className="col-lg-12">
                <div className="parallax_cover">
                  <img className="cover-parallax" src={banner} alt="image" />
                </div>
              </div>
            </div>
          </div>
          <div className="styles.container padding-t-6">
            <div className="row">
              <div className="col-lg-6">
                <p className="font-s-18 c-gray">
                  We believe everyone deserves to have a website or online
                  store. Innovation and simplicity makes us happy: our goal is
                  to remove any technical or financial barriers that can prevent
                  business owners from making their own website.
                </p>
              </div>
              <div className="col-lg-5 ml-auto">
                <p className="font-s-18 c-gray">
                  Today, we're proud to empower individuals and small business
                  owners around the world. Everyone deserves a website, and
                  we're excited to see what you create.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        <main data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
          <section className="pt-40">
            <div className={`${styles.container} md:ml-5`}>
              <div className="row bg-white">
                {/* Dotted Background */}
                {/* <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute right-0 bottom-0 left-70">
                    <svg
                      width="200"
                      height="200"
                      viewBox="0 0 200 200"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <pattern
                          id="dots"
                          x="0"
                          y="0"
                          width="20"
                          height="20"
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="2.5" cy="2.5" r="1.5" fill="#D1D5DB" />
                        </pattern>
                      </defs>
                      <rect width="200" height="200" fill="url(#dots)" />
                    </svg>
                  </div>
                  
                </div> */}
              

                {/* Content */}
                <div className="col-md-8 col-lg-6">
                  <div className="mb-14">
                    <h2 className="text-[16px] font-medium text-[#31d1ab] items-start justify-start space-x-2">
                      <span>Welcome 🖐 </span>
                      {/* <span role="img" aria-label="waving hand">
                        
                      </span> */}
                    </h2>
                    <h1 className="text-5xl font-bold text-gray-900 mt-3 items-start justify-start">
                      We’re excited to help <br/>you on your journey!
                    </h1>
                    <p className="text-gray-500 mt-4">
                      Leave us a little info, and we’ll be in touch.
                    </p>
                  </div>
                </div>
              </div>
            </div>
      <div className="container-fluid pl-0"> 
        <div className="row">  
          <div className="col-lg-12">
            <div className="parallax_cover w-[95%] ">
              <div style={{overflow:"hidden"}} className="rounded-r-[12px]">
                <img className="cover-parallax" style={{transform: "translate3d(0px, 25px, 0px) scale(1.3)", willChange: "transform", transition: "transform 0.6s cubic-bezier(0, 0, 0, 1)"}} src={banner} alt="image" />
                </div>
            </div>
          </div>
        </div>
      </div> 
                

    <div className={`${styles.container} pt-14`}>
      <div className="row">
        <div className="col-lg-6">
          {/* Left Section */}
          <p className="text-[#6c7a87] mb-4 text-[18px] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            We believe everyone deserves to have a website or online store.
            Innovation and simplicity make us happy: our goal is to remove any
            technical or financial barriers that can prevent business owners
            from making their own website.
          </p>
        </div>
        <div className="col-lg-5 ml-auto">
          {/* Right Section */}
          <div className="text-[#6c7a87] text-[18px] mb-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <p>
              Today, we’re proud to empower individuals and small business owners
              around the world. Everyone deserves a website, and we’re excited to
              see what you create.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>


        {/* End banner_about */}
        {/* Start counter_about */}
        {/* <section className="section__counter counter_about padding-t-12">
          <div className="styles.container">
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div
                  className="text-center mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={0}
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={22}
                      height={13}
                      viewBox="0 0 22 13"
                    >
                      <g
                        id="Group_6702"
                        data-name="Group 6702"
                        transform="translate(-1 -6)"
                      >
                        <path
                          id="Combined-Shape"
                          d="M5,6H19a1,1,0,0,1,1,1V17H4V7A1,1,0,0,1,5,6Z"
                          fill="#0b2238"
                          fillRule="evenodd"
                        />
                        <rect
                          id="Rectangle"
                          width={22}
                          height={1}
                          rx="0.5"
                          transform="translate(1 18)"
                          fill="#0b2238"
                          opacity="0.3"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="body__content">
                    <h2>
                      <span className="counter">750</span>K
                    </h2>
                    <h3>
                      Web pages created <br />
                      by users
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="text-center mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height="17.328"
                      viewBox="0 0 18 17.328"
                    >
                      <path
                        id="Combined-Shape"
                        d="M3.957,8.415l7.521-4.6a1,1,0,0,1,1.043,0l7.521,4.6A2,2,0,0,1,21,10.122V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V10.122A2,2,0,0,1,3.957,8.415ZM10,13a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1Z"
                        transform="translate(-3 -3.672)"
                        fill="#0b2238"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="body__content">
                    <h2>
                      <span className="counter">12.5</span>M
                    </h2>
                    <h3>
                      In-house designed <br />
                      templates
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="text-center mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <g
                        id="Group_6703"
                        data-name="Group 6703"
                        transform="translate(-3 -3)"
                      >
                        <path
                          id="Mask"
                          d="M12,11a4,4,0,1,1,4-4A4,4,0,0,1,12,11Z"
                          fill="#0b2238"
                          opacity="0.3"
                        />
                        <path
                          id="Mask-Copy"
                          d="M3,20.2c.388-4.773,4.261-7.2,8.983-7.2C16.771,13,20.7,15.293,21,20.2a.687.687,0,0,1-.751.8H3.728A1.107,1.107,0,0,1,3,20.2Z"
                          fill="#0b2238"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="body__content">
                    <h2>
                      + <span className="counter">900</span>K
                    </h2>
                    <h3>
                      Customers served <br />
                      around the world
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div
                  className="text-center mb-4 mb-lg-0"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <div className="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16.723"
                      height="16.003"
                      viewBox="0 0 16.723 16.003"
                    >
                      <g
                        id="Group_6704"
                        data-name="Group 6704"
                        transform="translate(-3.638 -4.259)"
                      >
                        <path
                          id="Combined-Shape"
                          d="M12,4.259a1,1,0,0,1,.9.558l2.042,4.138,4.566.664a1,1,0,0,1,.554,1.706l-3.3,3.221.78,4.548a1,1,0,0,1-1.451,1.054L12,18Z"
                          fill="#ffce53"
                          fillRule="evenodd"
                          opacity="0.3"
                        />
                        <path
                          id="Combined-Shape-2"
                          data-name="Combined-Shape"
                          d="M12,4.259V18L7.916,20.147a1,1,0,0,1-1.451-1.054l.78-4.548-3.3-3.221a1,1,0,0,1,.554-1.706l4.566-.664L11.1,4.817A1,1,0,0,1,12,4.259Z"
                          fill="#ffce53"
                          fillRule="evenodd"
                        />
                      </g>
                    </svg>
                  </div>
                  <div className="body__content">
                    <h2>
                      4.7 <span className="font-s-30">/ 5</span>
                    </h2>
                    <h3>
                      Star rating by <br />
                      our users
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

    
    
    <section class=" counter_about pt-[3.125rem] md:pt-[7.5rem]">
          <div class={styles.container}>
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <div class="text-center mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  <div class="icon_s">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="13" viewBox="0 0 22 13">
                      <g id="Group_6702" data-name="Group 6702" transform="translate(-1 -6)">
                        <path id="Combined-Shape" d="M5,6H19a1,1,0,0,1,1,1V17H4V7A1,1,0,0,1,5,6Z" fill="#0b2238" fill-rule="evenodd"></path>
                        <rect id="Rectangle" width="22" height="1" rx="0.5" transform="translate(1 18)" fill="#0b2238" opacity="0.3"></rect>
                      </g>
                    </svg>
                  </div>

                  <div class="body__content">
                    <h2><span class="counter">750</span>K</h2>
                    <h3>Web pages created <br/>by users</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="text-center mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                  <div class="icon_s">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17.328" viewBox="0 0 18 17.328">
                      <path id="Combined-Shape" d="M3.957,8.415l7.521-4.6a1,1,0,0,1,1.043,0l7.521,4.6A2,2,0,0,1,21,10.122V19a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V10.122A2,2,0,0,1,3.957,8.415ZM10,13a1,1,0,0,0-1,1v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V14a1,1,0,0,0-1-1Z" transform="translate(-3 -3.672)" fill="#0b2238" fill-rule="evenodd"></path>
                    </svg>
                  </div>
                  <div class="body__content">
                    <h2><span class="counter">12.5</span>M</h2>
                    <h3>In-house designed <br/>templates</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="text-center mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                  <div class="icon_s">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                      <g id="Group_6703" data-name="Group 6703" transform="translate(-3 -3)">
                        <path id="Mask" d="M12,11a4,4,0,1,1,4-4A4,4,0,0,1,12,11Z" fill="#0b2238" opacity="0.3"></path>
                        <path id="Mask-Copy" d="M3,20.2c.388-4.773,4.261-7.2,8.983-7.2C16.771,13,20.7,15.293,21,20.2a.687.687,0,0,1-.751.8H3.728A1.107,1.107,0,0,1,3,20.2Z" fill="#0b2238"></path>
                      </g>
                    </svg>

                  </div>
                  <div class="body__content">
                    <h2>+ <span class="counter">900</span>K</h2>
                    <h3>Customers served <br/>around the world</h3>
                  </div>
                </div>
              </div>
              <div class="col-md-6 col-lg-3">
                <div class="text-center mb-4 mb-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                  <div class="icon_s">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16.723" height="16.003" viewBox="0 0 16.723 16.003">
                      <g id="Group_6704" data-name="Group 6704" transform="translate(-3.638 -4.259)">
                        <path id="Combined-Shape" d="M12,4.259a1,1,0,0,1,.9.558l2.042,4.138,4.566.664a1,1,0,0,1,.554,1.706l-3.3,3.221.78,4.548a1,1,0,0,1-1.451,1.054L12,18Z" fill="#ffce53" fill-rule="evenodd" opacity="0.3"></path>
                        <path id="Combined-Shape-2" data-name="Combined-Shape" d="M12,4.259V18L7.916,20.147a1,1,0,0,1-1.451-1.054l.78-4.548-3.3-3.221a1,1,0,0,1,.554-1.706l4.566-.664L11.1,4.817A1,1,0,0,1,12,4.259Z" fill="#ffce53" fill-rule="evenodd"></path>
                      </g>
                    </svg>

                  </div>
                  <div class="body__content">
                    <h2>4.7 <span class="font-s-30">/ 5</span></h2>
                    <h3>Star rating by <br/>our users</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  



        {/* End. counter_about */}
        {/* Start our_story */}
        {/* <section className="software_web our_story margin-t-12" id="About">
          <div className="styles.container">
            <div className="row">
              <div className="col-lg-5 margin-t-8">
                <div className="item__section mb-4 mb-lg-0">
                  <div className="media">
                    <div className="icon_sec">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="23.589"
                        height="20.716"
                        viewBox="0 0 23.589 20.716"
                      >
                        <path
                          id="Combined-Shape"
                          d="M25.56,17.147l.029-.012v5.4a1.178,1.178,0,0,1-2.011.833l-2.7-2.7H5.534A3.534,3.534,0,0,1,2,17.136V6.534A3.534,3.534,0,0,1,5.534,3H22.026A3.534,3.534,0,0,1,25.56,6.534v10.6S25.56,17.143,25.56,17.147ZM6.91,11.9c1.778,2.667,4.1,4.058,6.87,4.058s5.092-1.391,6.87-4.058a1.178,1.178,0,1,0-1.96-1.307c-1.363,2.044-2.971,3.009-4.91,3.009s-3.547-.965-4.91-3.009A1.178,1.178,0,1,0,6.91,11.9Z"
                          transform="translate(-2 -3)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div className="media-body">
                      <div className="title_sections mb-0">
                        <div className="before_title">
                          <span className="c-green2">Lets's Go</span>
                        </div>
                        <h2>Our Story</h2>
                        <p>
                          began in 2005. After years in the web hosting
                          industry, we realized that it was near impossible for
                          the average Jane or Joe to create their own website.
                          Traditional web hosting services were simply too
                          complicated, time consuming, and expensive to manage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0 ml-auto">
                <div className="image_grid">
                  <img className="img-fluid img_one" src={ourstory} alt="" />
                </div>
              </div>
              <div className="w-100" />
              <div className="col-lg-5 mt-4 mt-lg-0 mx-auto">
                <div className="image_grid">
                  <div className="before_line">
                    <img className="img-fluid img_two" src={imgo} alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-5 mt-4 mt-lg-0 ml-auto">
                <div className="image_grid">
                  <img className="img-fluid img_three" src={imgs} alt="" />
                </div>
              </div>
            </div>
            <div className="row margin-t-8">
              <div className="col-lg-6">
                <p className="font-s-18 c-gray">
                  We believe everyone deserves to have a website or online
                  store. Innovation and simplicity makes us happy: our goal is
                  to remove any technical or financial barriers that can prevent
                  business owners from making their own website.
                </p>
              </div>
              <div className="col-lg-5 ml-auto">
                <p className="font-s-18 c-gray">
                  Today, we're proud to empower individuals and small business
                  owners around the world. Everyone deserves a website, and
                  we're excited to see what you create.
                </p>
              </div>
            </div>
          </div>
        </section> */}
 
    <section className=" relative overflow-hidden mt-[3.125rem] md:mt-[6.875rem] ">
      {/* Left Section */}
      <div className={styles.container}>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between bg-gray-50">
          <div className="max-w-[95%] mt-20 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-100 p-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 10h.01M12 14h.01M16 10h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>
              <h2 className="text-lg font-semibold text-green-600">Let's Go</h2>
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h1>
            <p className="text-gray-600 leading-relaxed">
              began in 2005. After years in the web hosting industry, we realized
              that it was near impossible for the average Jane or Joe to create
              their own website. Traditional web hosting services were simply too
              complicated, time consuming, and expensive to manage.
            </p>
          </div>

          {/* Right Section */}
          <div className="mt-8 w-[95%] h-[500px] lg:mt-0 lg:ml-8 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
            <img
              src={ourstory}
              alt="Team Collaboration"
              className="rounded-lg w-full h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>
 

        {/* End.our_story */}
        {/* Start team_overlay_style */}
        {/* <section
          className="team_overlay_style team_default_style margin-b-7 padding-t-12"
          id="Team"
        >
          <div className="styles.container">
            <div className="row">
              <div className="col-lg-6">
                <div className="title_sections_inner margin-b-5">
                  <h2>Our Team</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                
                <div className="image_ps">
                  <img src={imgse} alt="" />
                  <div className="content_txt left-side">
                    <h3>Christopher L. Belle</h3>
                    <p>Co-Founder &amp; CEO</p>
                  </div>
                </div>
                <div className="social_text">
                  <a href="#">Linkedin</a>
                  <a href="#">Twitter</a>
                  <a href="#">Github</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="item_group"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="image_ps">
                  <img src={imgtw} alt="" />
                  <div className="content_txt right-side">
                    <h3>CLee Carter</h3>
                    <p>Managing Partner </p>
                  </div>
                </div>
                <div className="social_text">
                  <a href="#">Twitter</a>
                  <a href="#">Linkedin</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="item_group"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="image_ps">
                  <img src={imgni} alt="" />
                  <div className="content_txt left-side">
                    <h3>Mary Merrill</h3>
                    <p>Operations Director</p>
                  </div>
                </div>
                <div className="social_text">
                  <a href="#">Facebook</a>
                  <a href="#">Twitter</a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div
                className="item_group"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="image_ps">
                  <img src={imgtt} alt="" />
                  <div className="content_txt right-side">
                    <h3>John Myers</h3>
                    <p>Chief Technology Officer</p>
                  </div>
                </div>
                <div className="social_text">
                  <a href="#">Github</a>
                  <a href="#">Twitter</a>
                  <a href="#">Dribbble</a>
                </div>
              </div>
            </div>
          </div>
         
        </section> */}
      




    <section className="bg-white pt-[3.125rem] md:pt-[7.5rem] mb-[2.5rem] md:mb-[4.375rem]">
      <div className={styles.container}>
        {/* <div className="ml-52 mr-52 text-center"> */}
          <h2 className="text-4xl font-semibold mb-[1.875rem] md:mb-[3.125rem] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg hover:opacity-100">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    className="w-full h-[350px] transition overflow-hidden duration-300 ease-in-out group-hover:custom-transform  object-cover rounded-md aos-init aos-animate" data-aos="fade-up" data-aos-delay="0"
                    src={member.image}
                    alt={member.name}
                  />
                </div>
                <div className=" absolute w-[220px] rounded-r-[12px] transition duration-300 ease-in-out group-hover:w-full group-hover:rounded-none !bg-white opacity-100 p-[1.25rem] -mt-32 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  <h3 className="text-[18px] text-[#0b2238] font-medium">{member.name}</h3>
                  <p className="text-gray-500">{member.position}</p>
                </div>
                <div className="flex mt-10 justify-center space-x-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer">
                      <img src="link-to-linkedin-icon" alt="LinkedIn" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer">
                      <img src="link-to-twitter-icon" alt="Twitter" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer">
                      <img src="link-to-github-icon" alt="GitHub" />
                    </a>
                  )}
                  {member.social.dribbble && (
                    <a href={member.social.dribbble} target="_blank" rel="noopener noreferrer">
                      <img src="link-to-dribbble-icon" alt="Dribbble" />
                    </a>
                  )}
                  {member.social.facebook && (
                    <a href={member.social.facebook} target="_blank" rel="noopener noreferrer">
                      <img src="link-to-facebook-icon" alt="Facebook" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        {/* </div> */}
      </div>
    </section>
        
        <section className="integration__logo">
          <div className={styles.container}>
            <div className="row justify-content-center text-center mt-20">
              <div className="col-md-8 col-lg-5">
                <div className="title_sections">
                  <div className="before_title mb-[1.25rem] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                    <span className="text-green-400">Integration</span>
                  </div>
                  <h2 className=" font-bold text-4xl mb-[1.25rem] aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">Seamless integration with other analytics tools</h2>
                  <p className="mb-[1.25rem] text-[#6c7a87] text-base font-normal aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                    In hac habitasse platea dictumst quisque sagittis purus sit.
                    Tempus imperdiet nulla malesuada .
                  </p>
                  <a
                    href="#"
                    className="btn btn_md_primary mt-[1.25rem] bg-green2 c-white sweep_top sweep_letter rounded-12"
                  >
                    <div className="inside_item focus-visible:outline-none focus:outline-none">
                      <span data-hover="All Integration"><button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300 aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                        All Integration
                      </button></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="item_logo" data-aos="fade-up" data-aos-delay={0}>
                <img src="../../assets/img/software/logo/01.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <img src="../../assets/img/software/logo/kyan.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <img src="../../assets/img/software/logo/u-mark.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <img src="../../assets/img/software/logo/earth.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <img src="../../assets/img/software/logo/02.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <img src="../../assets/img/software/logo/03.svg" alt="" />
              </div>
              <div
                className="item_logo"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <img src="../../assets/img/software/logo/04.svg" alt="" />
              </div>
            </div>
          </div>
        </section>

        {/* End. integration__logo */}
        {/* Start Simple Contact */}

        <section className="relative bg-white py-[3.125rem] md:py-[7.5rem] overflow-hidden z-[3]">
          <div className={styles.container}>
            <div className="row">
              <div className="col-md-6">
                <div className="title_sections mb-1 mb-sm-auto aos-init aos-animate" data-aos="fade-up" data-aos-delay="0">
                  <h2 className="text-[#0b2238] text-[1.875rem] mb-[1.25rem] font-semibold">Still need help?</h2>
                  <p className="text-[#6c7a87] text-[1rem] font-normal mb-[1.25rem]">
                    Click on the blue round button at the bottom right corner of
                    this page. You can also email our support team at <a className="text-[#31d1ab]" href="mailto:support@example.com">
                       support@example.com
                    </a>
                    .
                  </p>
                </div>
              </div>
              <div className="col-md-6 my-auto ml-auto text-sm-right ">
                <button
                  type="button"
                  className="btn mt-3 rounded-12 sweep_top sweep_letter btn_md_primary c-white scale bg-green2"
                >
                  <div className="inside_item">
                    <span data-hover="Contact Us"><button className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                      <Link to="/Contact"  className="text-white !no-underline ">Contact Us</Link></button></span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* End Simple Contact */}
   
        </main>
      <Footer />
    </>
  );
}

export default About;
