
import React, { useState } from 'react';
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";
function Slider() {
    const [FadeInAnimation, setFadeInAnimation] = useState("null");
    const [MoveUpAnimation, setMoveUpAnimation] = useState("null");
    const [forwardSlideAnimation, setForwardSlideAnm] = useState("null");
    const [BackwardSlideAnimation, setBackwardSlideAnm] = useState("null");

    const [ImageArray, setImageArray] = useState([
        {
            title: 'Saudi Arabia',
            ImgSrc: 'https://images.pexels.com/photos/4346403/pexels-photo-4346403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "Saudi Arabia offers diverse visa options for tourism, education, and official purposes.Ensure all required documents are complete for a smooth and hassle- free application process."
        },
        {
            title: 'Palestine',
            ImgSrc: 'https://images.pexels.com/photos/17690078/pexels-photo-17690078/free-photo-of-view-of-the-dome-of-the-rock.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "Travel to Palestine requires specific documentation, including an official or personal invitation letter.Ensure compliance with all visa requirements to facilitate a seamless entry experience."
        },
        {
            title: 'Afghanistan',
            ImgSrc: 'https://images.pexels.com/photos/1592461/pexels-photo-1592461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "Afghanistan offers visas for business, tourism, and official engagements.Prepare all required documents thoroughly to ensure a secure and hassle- free travel process."
        },
        {
            title: 'Bangladesh',
            ImgSrc: 'https://images.pexels.com/photos/12251538/pexels-photo-12251538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            description: "Bangladesh provides affordable visa options for tourists, students, and officials.Complete your application with the necessary documentation to ensure smooth entry to the country."
        },



    ]);

    const ForwardSlide = () => {
        setFadeInAnimation("FadeInAnm");
        setMoveUpAnimation("MoveUpAnm");
        setForwardSlideAnm("forwardslideanm");

        setTimeout(() => {
            setFadeInAnimation("null");
            setMoveUpAnimation("null");
            setForwardSlideAnm("null");
        }, 700);

        //--------------------//
        const data = ImageArray[0];
        setImageArray([...ImageArray, data]);

        setImageArray((prevArr) => {
            const newArr = [...prevArr];
            newArr.shift();
            return newArr;
        });
    };

    const BackwardSlide = () => {
        setFadeInAnimation("FadeInAnm");
        setMoveUpAnimation("MoveUpAnm");
        setBackwardSlideAnm("backwardSlideanm");

        setTimeout(() => {
            setFadeInAnimation("null");
            setMoveUpAnimation("null");
            setBackwardSlideAnm("null");
        }, 700);

        //--------------------//
        const data = ImageArray[ImageArray.length - 1];
        setImageArray([data, ...ImageArray]);

        setImageArray((prevArr) => {
            const newArr = [...prevArr];
            newArr.pop();
            return newArr;
        });
    };

    return (
        <div className='my-3 h-64 lg:h-[500px] flex items-center justify-end relative'>
            <div className='flex overflow-hidden'>
                {ImageArray.map((item, index) => (
                    <div key={index} className={(index === 0) ? `${FadeInAnimation} absolute top-0 left-0 w-[85%] h-full z-0 rounded-xl  transition-all duration-700` : `${forwardSlideAnimation} ${BackwardSlideAnimation} h-[200px] w-[140px] my-8 mx-2 z-10 rounded-xl item-shadow transition-all duration-700S`}>
                        <img className='h-full w-full ml-4 bg-cover object-center rounded-2xl' src={item.ImgSrc} />
                        <div className={`${MoveUpAnimation} hidden  h-full w-[350px] absolute top-0 left-0 lg:flex items-center z-20 text-white px-10 transition-all duration-700`}>
                            {(index === 0) ? (
                                <div>
                                    <h2 className='text-xl font-bold'>{item.title}</h2>
                                    <p className='text-xs '> {item.description} </p>
                                    <button className='px-4 py-1 my-1 font-semibold text-black bg-white rounded-sm '>Explore</button>
                                </div>
                            ) : null}
                        </div>
                    </div>
                ))}
                <div className='w-[85%] absolute left-0 bottom-0 py-5 flex items-center justify-center z-20'>
                    <div className='flex gap-2'>
                        {/* Backward Button */}
                        <button onClick={BackwardSlide} className="ri-arrow-left-line bg-white px-1 py-1 rounded-lg cursor-pointer font-bold hover:opacity-80">
                            <i className="ri-arrow-left-line"></i>
                            <BiSolidLeftArrow />
                        </button>
                        {/* Forward Button */}
                        <button onClick={ForwardSlide} className="ri-arrow-right-line bg-white px-1 py-1 rounded-lg cursor-pointer font-bold hover:opacity-80">
                            <i className="ri-arrow-right-line"></i>
                            <BiSolidRightArrow />
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Slider;
