import React, { useState } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const items = [
        {
            image: "https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Saudi Arabia",
            description: "Saudi Arabia offers diverse visa options for tourism, education, and official purposes. Ensure all required documents are complete for a smooth and hassle-free application process.",
        },
        {
            image: "https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Palestine",
            description: "Travel to Palestine requires specific documentation, including an official or personal invitation letter. Ensure compliance with all visa requirements to facilitate a seamless entry experience.",
        },
        {
            image: "https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Afghanistan",
            description: "Afghanistan offers visas for business, tourism, and official engagements. Prepare all required documents thoroughly to ensure a secure and hassle-free travel process.",
        },
        {
            image: "https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Bangladesh",
            description: "Bangladesh provides affordable visa options for tourists, students, and officials. Complete your application with the necessary documentation to ensure smooth entry to the country.",
        },
        {
            image: "https://images.pexels.com/photos/16883433/pexels-photo-16883433/free-photo-of-lake-in-mountains.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            name: "Pakistan",
            description: "Pakistan offers straightforward visa processes for students, tourists, and businesses. Ensure all documents are in order for a smooth and efficient application experience.",
        },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
    };

    return (
        <div className="relative w-full h-[500px] overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-full h-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${item.image})`,
                        }}
                    >
                        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white">
                            <div className="text-3xl font-bold">{item.name}</div>
                            <p className="mt-4">{item.description}</p>
                            <div className="mt-6 space-x-4">
                                <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded">
                                    See More
                                </button>
                                <button className="bg-transparent text-white border-2 border-white px-4 py-2 rounded">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4">
                <button
                    className="bg-black text-white p-2 rounded-full"
                    onClick={prevSlide}
                >
                    &lt;
                </button>
            </div>

            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 p-4">
                <button
                    className="bg-black text-white p-2 rounded-full"
                    onClick={nextSlide}
                >
                    &gt;
                </button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 bg-black text-white p-2 text-center">
                Time Running
            </div>
        </div>
    );
};

export default Carousel;
