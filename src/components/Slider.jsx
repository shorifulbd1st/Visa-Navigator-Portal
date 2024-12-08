import React from "react";

const Slider = () => {
    const handleNext = () => {
        const items = document.querySelectorAll(".item");
        document.querySelector(".slide").appendChild(items[0]);
    };

    const handlePrev = () => {
        const items = document.querySelectorAll(".item");
        document.querySelector(".slide").prepend(items[items.length - 1]);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-300">
            <div className="relative w-[1000px] h-[500px] bg-gray-100 shadow-xl overflow-hidden">
                {/* Slide Container */}
                <div className="absolute flex items-center justify-center w-full h-full slide">
                    <div
                        className="item absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                        <div className="content hidden lg:block absolute top-1/2 left-[100px] transform -translate-y-1/2 text-left text-white">
                            <h1 className="name text-4xl font-bold uppercase">Saudi Arabia</h1>
                            <p className="des mt-4 text-lg">
                                Saudi Arabia offers diverse visa options for tourism, education, and official purposes.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                                See More
                            </button>
                        </div>
                    </div>
                    <div
                        className="item absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                        <div className="content hidden lg:block absolute top-1/2 left-[100px] transform -translate-y-1/2 text-left text-white">
                            <h1 className="name text-4xl font-bold uppercase">Palestine</h1>
                            <p className="des mt-4 text-lg">
                                Travel to Palestine requires specific documentation.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                                See More
                            </button>
                        </div>
                    </div>
                    <div
                        className="item absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                        <div className="content hidden lg:block absolute top-1/2 left-[100px] transform -translate-y-1/2 text-left text-white">
                            <h1 className="name text-4xl font-bold uppercase">Afghanistan</h1>
                            <p className="des mt-4 text-lg">
                                Afghanistan offers visas for business and tourism.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                                See More
                            </button>
                        </div>
                    </div>
                    <div
                        className="item absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                        <div className="content hidden lg:block absolute top-1/2 left-[100px] transform -translate-y-1/2 text-left text-white">
                            <h1 className="name text-4xl font-bold uppercase">Bangladesh</h1>
                            <p className="des mt-4 text-lg">
                                Bangladesh provides affordable visa options for tourists.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                                See More
                            </button>
                        </div>
                    </div>
                    <div
                        className="item absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url(https://images.pexels.com/photos/16883433/pexels-photo-16883433/free-photo-of-lake-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)" }}
                    >
                        <div className="content hidden lg:block absolute top-1/2 left-[100px] transform -translate-y-1/2 text-left text-white">
                            <h1 className="name text-4xl font-bold uppercase">Pakistan</h1>
                            <p className="des mt-4 text-lg">
                                Pakistan offers straightforward visa processes for students and tourists.
                            </p>
                            <button className="mt-4 px-6 py-2 bg-green-500 hover:bg-green-700 text-white rounded">
                                See More
                            </button>
                        </div>
                    </div>
                </div>

                {/* Buttons */}
                <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button
                        className="prev w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-600"
                        onClick={handlePrev}
                    >
                        <i className="fas fa-arrow-left"></i>
                    </button>
                    <button
                        className="next w-10 h-10 flex items-center justify-center bg-gray-800 text-white rounded-full hover:bg-gray-600"
                        onClick={handleNext}
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
