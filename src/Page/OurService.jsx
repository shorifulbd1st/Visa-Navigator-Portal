import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles

const OurService = () => {
    return (
        <div className='my-9'>
            <h1 className='text-center font-bold text-2xl dark:text-white'> Our Excellence customer Service</h1>
            <div className="hero my-8">

                <div className="hero-content flex flex-col lg:grid lg:grid-cols-2 gap-2  ">
                    <div className='rounded-lg'>


                        <div className="carousel-container lg:col-span-1 rounded-lg overflow-hidden">
                            <Carousel
                                autoPlay={true}
                                infiniteLoop={true}
                                showArrows={false}
                                showStatus={false}
                                showThumbs={false}
                                interval={1500}
                            >
                                <div>
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4173212/pexels-photo-4173212.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 1" />
                                </div>
                                <div className='h-full'>
                                    <img className="w-full h-full object-cover" src="https://www.bestdesertsafariindubai.com/blog/wp-content/uploads/2022/06/Apply-for-Online-Dubai-Visa.jpg" alt="Slide 2" />
                                </div>
                                <div>
                                    <img className="w-full h-full object-cover" src="https://media.istockphoto.com/id/959983718/photo/waiting-for-the-flight.jpg?s=1024x1024&w=is&k=20&c=0Eg6zLtyQ5_7B7tQkVqQJycMA6fEGh8BLlaS-0ozKqw=" alt="Slide 3" />
                                </div>
                                <div>
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1201995/pexels-photo-1201995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 4" />
                                </div>
                                <div>
                                    <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/4173354/pexels-photo-4173354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Slide 5" />
                                </div>
                            </Carousel>
                        </div>
                    </div>
                    <div className='h-full '>
                        <div className="w-full lg:col-span-1 shadow-2xl ">
                            <div className="bg-[#1E3442] text-white py-8 px-5 rounded-lg
                            h-full">
                                <h2 className="text-4xl font-semibold mb-6 text-center">Why choose Visa Navigator?</h2>

                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-xl font-semibold">✅ 100% Application Accuracy</h3>
                                        <p className="text-lg">
                                            Travelers have the confidence of knowing their applications are completely accurate and error-free.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">✅Service Personalized to You</h3>
                                        <p className="text-lg">
                                            Every application receives a personal review and is checked against the world’s largest database of travel requirements.
                                        </p>
                                    </div>

                                    <div>
                                        <h3 className="text-xl font-semibold">✅    Global Leader in Immigration and Travel Management</h3>
                                        <p className="text-lg">
                                            1,600+ immigration and visa experts in 79 offices across 29 countries. All backed by industry-leading technology and 35 years of expertise.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OurService;
