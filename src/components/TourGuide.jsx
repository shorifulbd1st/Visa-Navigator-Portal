import React from 'react'
import SocialButtons from './SocialButtons'

const TourGuide = () => {
    return (
        <div className='w-11/12 mx-auto -mt-5 '>
            <div className='bg-gradient-to-r from-blue-200 via-green to-blue-200 py-5 px-8 rounded-t-xl'>
                <h1 className='text-3xl text-center font-bold text-blue-400 my-5'>Our Travel Guide</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div
                            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                            style={{
                                backgroundImage:
                                    "url(https://plus.unsplash.com/premium_photo-1689533448099-2dc408030f0f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            }}
                        ></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                Rana Islam
                            </h3>

                            <div className="flex flex-col  justify-center items-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                {/* <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                    Add to cart
                                </button> */}
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://www.facebook.com/shafiq1st" target="_blank" className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-facebook text-[#1877F2] hover:text-white"></i>
                                    </a>
                                    <a href='https://github.com/shafiqbd1st?tab=repositories' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-github "></i>
                                    </a>
                                    <a href='https://www.linkedin.com/' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className="text-3xl fab fa-linkedin text-[#0077B5] hover:text-white"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div
                            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                            style={{
                                backgroundImage:
                                    "url(https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            }}
                        ></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                Joseph David
                            </h3>

                            <div className="flex flex-col  justify-center items-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                {/* <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                    Add to cart
                                </button> */}
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://www.facebook.com/shafiq1st" target="_blank" className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-facebook text-[#1877F2] hover:text-white"></i>
                                    </a>
                                    <a href='https://github.com/shafiqbd1st?tab=repositories' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-github "></i>
                                    </a>
                                    <a href='https://www.linkedin.com/' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className="text-3xl fab fa-linkedin text-[#0077B5] hover:text-white"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                        <div
                            className="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md"
                            style={{
                                backgroundImage:
                                    "url(https://plus.unsplash.com/premium_photo-1689565611422-b2156cc65e47?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                            }}
                        ></div>

                        <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                            <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                                Jackson Mason
                            </h3>

                            <div className="flex flex-col  justify-center items-center px-3 py-2 bg-gray-200 dark:bg-gray-700">
                                {/* <span className="font-bold text-gray-800 dark:text-gray-200">$129</span>
                                <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                                    Add to cart
                                </button> */}
                                <div className="flex flex-wrap gap-4">
                                    <a href="https://www.facebook.com/shafiq1st" target="_blank" className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-facebook text-[#1877F2] hover:text-white"></i>
                                    </a>
                                    <a href='https://github.com/shafiqbd1st?tab=repositories' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className=" text-3xl fab fa-github "></i>
                                    </a>
                                    <a href='https://www.linkedin.com/' target='_blank' className="w-12 h-12  bg-white rounded-md px-4 shadow-[2px_2px_4px_0px_rgba(0,0,0,0.08),-0px_-0px_0px_0px_rgba(255,255,255,0.8)] hover:bg-[#FF014F] hover:text-white transition-all duration-300 flex items-center justify-center">
                                        <i className="text-3xl fab fa-linkedin text-[#0077B5] hover:text-white"></i>
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TourGuide
