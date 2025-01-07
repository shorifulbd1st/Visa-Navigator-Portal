import React from "react";

const StatsSection = () => {
    const stats = [
        { icon: "👤", value: "60K+", label: "Happy Traveler" },
        { icon: "✨", value: "60K+", label: "Tours Success" },
        { icon: "👍", value: "60%", label: "Positive Review" },
        { icon: "🧑‍✈️", value: "60+", label: "Travel Guide" },
    ];

    return (
        <div className="bg-white py-10">
            <div className="container mx-auto text-center">
                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-green-500 text-4xl mb-2">{stat.icon}</div>
                            <h3 className="text-2xl font-semibold text-gray-700">{stat.value}</h3>
                            <p className="text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
                {/* Rating Section */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-2">
                    <p className="text-green-600 text-lg font-bold">Excellent!</p>
                    <div className="flex items-center gap-1">
                        {Array(5)
                            .fill()
                            .map((_, i) => (
                                <span key={i} className="text-green-500 text-xl">●</span>
                            ))}
                    </div>
                    <p className="text-gray-700 text-lg">
                        5.0 Rating out of 5.0 based on{" "}
                        <span className="font-semibold">245,354 reviews</span>
                    </p>
                    <div className="ml-2">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Tripadvisor_Logo_circle-green_horizontal-lockup_registered.svg"
                            alt="Tripadvisor"
                            className="w-24"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection;
