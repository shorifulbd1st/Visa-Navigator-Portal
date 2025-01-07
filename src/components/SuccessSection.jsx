import React from 'react'
import CountUp from 'react-countup';
import { FaRegUserCircle } from "react-icons/fa";
import { FaBookReader } from "react-icons/fa";
import { FaVideo } from "react-icons/fa6";
import { TbVocabulary } from "react-icons/tb";
// Show User Count, Lesson Count vocabulary count, Tutorial Count.Use Dummy information for Count.
const SuccessSection = () => {
    return (
        <div className='w-11/12 mx-auto my-8'>
            <div className='mx-auto block text-center'>
                <div className="grid grid-cols-2 overflow-hidden md:grid-cols-4 px-2 rounded-2xl bg-base-200 shadow border-2 border-blue-600 ">
                    <div className="stat  lg:border-r-2 border-blue-600">
                        <div className="stat-figure ">
                            <FaRegUserCircle className='text-4xl' />
                        </div>
                        <div className="stat-title  font-bold text-black lg:text-xl">Total user</div>
                        <div className="stat-value">
                            <CountUp end={380}
                                duration={10} />
                        </div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat lg:border-r-2 border-blue-600">
                        <div className="stat-figure ">
                            <FaBookReader className='text-4xl' />
                        </div>
                        <div className="stat-title  font-bold text-black lg:text-xl">Total Lesson </div>
                        <div className="stat-value">
                            <CountUp end={410}
                                duration={10} />
                        </div>
                    </div>

                    <div className="stat  lg:border-r-2 border-blue-600">
                        <div className="stat-figure ">
                            <TbVocabulary className='text-4xl' />
                        </div>
                        <div className="stat-title  font-bold text-black lg:text-xl">Total vocabulary</div>
                        <div className="stat-value">
                            <CountUp end={420}
                                duration={10} /><span className='text-sm font-normal'>words</span> </div>
                    </div>
                    <div className="stat">
                        <div className="stat-figure ">
                            <FaVideo className='text-4xl' />
                        </div>
                        <div className="stat-title font-bold text-black lg:text-xl">Total Tutorial</div>
                        <div className="stat-value">
                            <CountUp end={408}
                                duration={10} /><span className='text-sm font-normal'>Videos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SuccessSection
