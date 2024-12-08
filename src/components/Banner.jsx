import React, { useState, useEffect } from "react";

const Banner = () => {
    const slides = [
        {
            id: 1,
            image:
                "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "SAUDI ARABIA",
            description:
                "Saudi Arabia offers diverse visa options for tourism, education, and official purposes. Ensure all required documents are complete for a smooth and hassle-free application process.",
        },
        {
            id: 2,
            image:
                "https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "PALESTINE",
            description:
                "Travel to Palestine requires specific documentation, including an official or personal invitation letter. Ensure compliance with all visa requirements to facilitate a seamless entry experience.",
        },
        {
            id: 3,
            image:
                "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "AFGHANISTAN",
            description:
                "Afghanistan offers visas for business, tourism, and official engagements. Prepare all required documents thoroughly to ensure a secure and hassle-free travel process.",
        },
        {
            id: 4,
            image:
                "https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "BANGLADESH",
            description:
                "Bangladesh provides affordable visa options for tourists, students, and officials. Complete your application with the necessary documentation to ensure smooth entry to the country.",
        },
        {
            id: 5,
            image:
                "https://images.pexels.com/photos/16883433/pexels-photo-16883433/free-photo-of-lake-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title: "PAKISTAN",
            description:
                "Pakistan offers straightforward visa processes for students, tourists, and businesses. Ensure all documents are in order for a smooth and efficient application experience.",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    useEffect(() => {
        const autoSlide = setInterval(() => {
            nextSlide();
        }, 7000);
        return () => clearInterval(autoSlide);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <div
                className="absolute top-0 left-0 w-full h-full bg-cover bg-center transition-all duration-1000"
                style={{
                    backgroundImage: `url(${slides[currentSlide].image})`,
                }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white max-w-md">
                    <h1 className="text-5xl font-bold uppercase">
                        {slides[currentSlide].title}
                    </h1>
                    <p className="mt-4 text-lg">{slides[currentSlide].description}</p>
                    <div className="mt-6 flex space-x-4">
                        <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-700">
                            Learn More
                        </button>
                        <button className="px-6 py-2 bg-transparent border border-white text-white rounded hover:bg-white hover:text-black">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
                <button
                    className="w-10 h-10 bg-white text-black rounded-full shadow hover:bg-gray-200"
                    onClick={prevSlide}
                >
                    &#8249;
                </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
                <button
                    className="w-10 h-10 bg-white text-black rounded-full shadow hover:bg-gray-200"
                    onClick={nextSlide}
                >
                    &#8250;
                </button>
            </div>

            {/* Time Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-300">
                <div
                    className="h-1 bg-green-500 transition-all duration-7000"
                    style={{
                        width: `${((currentSlide + 1) / slides.length) * 100}%`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Banner;
