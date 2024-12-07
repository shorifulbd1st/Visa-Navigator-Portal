import { useState } from 'react';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        {
            image: 'https://images.pexels.com/photos/4092214/pexels-photo-4092214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Learn Spanish with Ease',
            description: 'Master Spanish vocabulary and phrases in a simple, engaging way to improve your language skills.',
        },
        {
            image: 'https://images.pexels.com/photos/3917323/pexels-photo-3917323.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Improve Your Language Skills',
            description: 'Engage with interactive lessons that help you progress faster and retain more.',
        },
        {
            image: 'https://images.pexels.com/photos/1714201/pexels-photo-1714201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Explore New Cultures',
            description: 'Learn a language and immerse yourself in new cultures through language.',
        }
    ];

    const totalSlides = slides.length;

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {/* Carousel Container */}
            <div
                className="flex transition-transform duration-500"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div key={index} className="w-full flex-shrink-0 relative">
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                        />
                        {/* Slide Content */}
                        <div className="absolute bottom-10 left-10 text-white bg-black bg-opacity-50 p-4">
                            <h2 className="text-3xl font-bold">{slide.title}</h2>
                            <p className="text-xl">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
            >
                &#10095;
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-white' : 'bg-gray-500'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;
