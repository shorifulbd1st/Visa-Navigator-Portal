import React, { useState, useEffect, useRef } from "react";

const NewSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderItems = [
        {
            backgroundImage: "url(https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            title: "Saudi Arabia",
            description: "Saudi Arabia offers diverse visa options for tourism, education, and official purposes. Ensure all required documents are complete for a smooth and hassle-free application process."
        },
        {
            backgroundImage: "url(https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            title: "Palestine",
            description: "Travel to Palestine requires specific documentation, including an official or personal invitation letter. Ensure compliance with all visa requirements to facilitate a seamless entry experience."
        },
        {
            backgroundImage: "url(https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            title: "Afghanistan",
            description: "Afghanistan offers visas for business, tourism, and official engagements. Prepare all required documents thoroughly to ensure a secure and hassle-free travel process."
        },
        {
            backgroundImage: "url(https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
            title: "Bangladesh",
            description: "Bangladesh provides affordable visa options for tourists, students, and officials. Complete your application with the necessary documentation to ensure smooth entry to the country."
        },
    ];

    const timeAutoNext = 7000;
    const timeRunning = 3000;
    const runningRef = useRef(null);

    const showSlider = (type) => {
        if (type === "next") {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
        } else {
            setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? sliderItems.length - 1 : prevIndex - 1
            );
        }
        resetTimeAnimation();
    };

    const resetTimeAnimation = () => {
        if (runningRef.current) {
            runningRef.current.style.animation = "none";
            void runningRef.current.offsetHeight; // Trigger reflow
            runningRef.current.style.animation = `runningTime ${timeAutoNext / 1000}s linear 1 forwards`;
        }
    };

    useEffect(() => {
        const autoNext = setInterval(() => {
            showSlider("next");
        }, timeAutoNext);

        return () => clearInterval(autoNext);
    }, []);

    useEffect(() => {
        resetTimeAnimation();
    }, [currentIndex]);

    return (
        <div className="carousel">
            <div className="list">
                {sliderItems.map((item, index) => {
                    const positionClass =
                        index === currentIndex
                            ? "active"
                            : index === (currentIndex + 1) % sliderItems.length
                                ? "next"
                                : "hidden";
                    return (
                        <div
                            key={index}
                            className={`item ${positionClass}`}
                            style={{
                                backgroundImage: item.backgroundImage,
                                backgroundSize: "cover", // Ensure the image covers the full area
                                backgroundPosition: "center", // Center the background image
                            }}
                        >
                            <div className="content">
                                <div className="title">{item.title}</div>
                                <div className="des">{item.description}</div>
                                <div className="btn">
                                    <button>See More</button>
                                    <button>Subscribe</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="arrows">
                <button className="prev" onClick={() => showSlider("prev")}>
                    &lt;
                </button>
                <button className="next" onClick={() => showSlider("next")}>
                    &gt;
                </button>
            </div>

            <div className="timeRunning" ref={runningRef}></div>
        </div>
    );
};

export default NewSlider;
