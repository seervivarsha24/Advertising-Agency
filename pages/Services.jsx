import React from 'react'
import Header from "../components/Header";
import card01 from "../assets/img/inner/0big0654.jpg";
import Footer from "../components/Footer"
function Services() {
  return (
    <>
    <Header/>
    <main data-spy="scroll" data-target="#navbar-example2" data-offset={0}>
  {/* Start banner_cotact_one */}
  <section className="mt-20 relative overflow-hidden rounded-xl ml-auto mr-auto pb-[850px] bg-gradient-to-b from-slate-200 to-slate-50">
    <div className="container">
      <div className='row flex justify-center py-16'>
        <div className='text-center'>
          <h1 className="text-[3.4rem] md:text-6xl font-bold text-gray-800 mb-4">
            Welcome To Our <br /> Services
          </h1>
          <span className="text-gray-500">Manage Campaigns &middot; Track Results &middot; Grow Faster</span>
          </div>
      </div>
    </div>
  </section>
  <section className=' -mt-[900px] overflow-hidden block pt-6 md:ml-12 md:mr-12'>
    <div className='container relative'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-7 h-full w-full'>
        <img src="services2.png" alt="1" className='rounded-xl md:-mt-[25px] aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
        <img src="services3.avif" alt="2" className='rounded-xl md:mt-16 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
        <img src="services4.avif" alt="3" className='rounded-xl md:mt-8 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
        <img src="services5.avif" alt="4" className='rounded-xl md:hidden lg:block md:-mt-2 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
      </div>
    </div>
  </section>
  <section className='mt-2 pt-6 md:mb-16 lg:mb-24 block overflow-hidden'>
    {/* <div className='relative ml-auto mr-auto pr-20 pl-20 flex justify-center items-center'>
      <img src="services2.png" alt="image_2" className='rounded-full h-dvh w-full '/>
    </div> */}
    <div className='container relative'>
      <div className=' text-left md:pl-14 lg:pl-20 pb-5 md:pb-24 pt-16 md:pt-24 md:pr-14 lg:pt-32 ' >
        <p className='text-base md:text-lg flex mb-2 font-semibold aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Our <p className='pl-1 text-blue-600'> Services</p></p>
        <h1 className='text-3xl md:text-5xl text-gray-800 mb-3 font-bold aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Innovative Advertising To Elevate <br /> Your  Brand Presence</h1>
        {/* <p className='text-gray-600 mb-12'>Strategic campaigns that deliver measurable results.</p> */}
      </div>
      <section className="relative mb-36 md:pl-14 lg:pl-28 md:pr-14 lg:pr-28">
        <div className="flex justify-center  items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className='group p-10 rounded-3xl bg-white shadow-md  w-full text-left aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                <img src="campaign.png" alt="img_1" className='w-40 md:w-[260px] mx-auto aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
                <h1 className='font-bold mt-7 text-gray-800 text-2xl md:text-3xl aos-init aos-animate' data-aos="fade-up" data-aos-delay="0"> Campaign Management</h1>
                <p className='mt-4 break-words text-gray-600 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">End-to-end planning, execution, and optimization of your ad campaigns across Google, Facebook, Instagram, LinkedIn, YouTube, and more.</p>
            </div>
            <div className='group p-10 rounded-3xl bg-white shadow-md w-full text-left aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                <img src="PPC.png" alt="img_1" className='w-40 md:w-[290px] mx-auto aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
                <h1 className='font-bold mt-7 text-gray-800 text-2xl md:text-3xl aos-init aos-animate' data-aos="fade-up" data-aos-delay="0"> PPC Advertising</h1>
                <p className='mt-4 break-words text-gray-600 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Targeted pay-per-click campaigns designed to maximize your ROI with strategic bidding, keyword planning, and conversion tracking.</p>
            </div>
            <div className='group p-10 rounded-3xl bg-white shadow-md w-full text-left aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">
                <img src="Social.PNG" alt="img_1" className='w-40 md:w-60 mx-auto aos-init aos-animate' data-aos="fade-up" data-aos-delay="0" />
                <h1 className='font-bold mt-7 text-gray-800 text-2xl md:text-3xl aos-init aos-animate' data-aos="fade-up" data-aos-delay="0"> Social Media Marketing</h1>
                <p className='mt-4 break-words text-gray-600 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Grow your brand on the platforms where your audience spends their time. We manage content, ads, engagement, and analytics.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  {/* <section className='py-12 bg-white'>
    <div className='max-w-6xl mx-auto px-6 text-center'>
      <h4 className='text-lg font-semibold mb-4'>Trusted by Leading Brands</h4>
      <div className='flex justify-center items-center flex-wrap gap-6'>
        <div className='h-8 w-24 bg-gray-200 rounded animate-pulse'></div>
        <div className='h-8 w-24 bg-gray-200 rounded animate-pulse'></div>
        <div className='h-8 w-24 bg-gray-200 rounded animate-pulse'></div>
        <div className='h-8 w-24 bg-gray-200 rounded animate-pulse'></div>
      </div>
    </div>
  </section> */}
    <section className='text-center pb-0 py-16 bg-white text-black'>
      <div className='container'>
        <h2 className='text-3xl font-bold mb-4 aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Ready to Boost Your Brand?</h2>
        <p className='mb-8 text-lg aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Let's work together to create impact-driven ad campaigns.</p>
        <a href="/Contact" className='bg-blue-500 text-white px-5 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:no-underline aos-init aos-animate' data-aos="fade-up" data-aos-delay="0">Get Started</a>
      </div>
    </section>
  {/* <div className="modal mdllaccount fade" id="mdllLogin" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <i className="tio clear" />
        </button>
      </div>
      <div className="modal-body">
        <div className="form_account">
          <div className="head_account">
            <div className="img_profile">
              <img src="../../assets/img/gif/avatar_01.jpg" />
            </div>
            <div className="title">
              <h4>Rakon.</h4>
              <p>
                Welcome back again,<br />
                Please sign in
              </p>
            </div>
          </div>
          <div className="form-row">
            <div className="col-12">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Email / Username</label>
                    <input type="email" className="form-control" placeholder="E-mail / Username" />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group mb-1 --password" id="show_hide_password">
                    <label>Password</label>
                    <div className="input-group">
                      <input type="password" className="form-control" data-toggle="password" placeholder="+6 Characters" required />
                      <div className="input-group-prepend hide_show">
                        <a href="#"><span className="input-group-text tio hidden_outlined" /></a>
                      </div>
                    </div>
                  </div>
                  <a href="#" className="btn mt-2 font-s-12 font-w-400 c-gray p-0">Forgot Passowrd?</a>
                </div>
                <div className="col-12 mt-4">
                  <a href="#" className="btn rounded-6 btn_xl_primary btn_login bg-green2">Sign in</a>
                  <a href="signup.html" className="btn mt-3 font-s-15 c-dark text-center w-100">Create new account</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div> */}
{/* <div className="prgoress_indicator">
  <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
  </svg>
</div> */}


  {/* End. Banner */}
</main>
   <Footer/>
    </>
  )
}

export default Services
