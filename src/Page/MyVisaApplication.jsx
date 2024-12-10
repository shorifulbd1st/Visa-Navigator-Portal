import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MySingleApplyVisa from './MySingleApplyVisa';
import { IoSearchOutline } from "react-icons/io5";

import { Typewriter } from 'react-simple-typewriter'
const MyVisaApplication = () => {
    const data = useLoaderData();
    const [myApplyVisa, setMyApplyVisa] = useState(data);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const searchResult = [...myApplyVisa].filter(visa => visa.visa.countryName.toLowerCase().includes(inputValue.toLowerCase()))
        if (searchResult.length) {
            setMyApplyVisa(searchResult)
        }
        else {
            setMyApplyVisa(data)
        }
        if (!inputValue) {
            setMyApplyVisa(data);
        }
    }, [inputValue])
    return (
        <div className='w-11/12 mx-auto my-5'>
            {
                myApplyVisa.length > 0 ? <div>

                    <div className='text-center '>
                        <div className='flex justify-center items-center'>
                            <input value={inputValue} onChange={(e) => setInputValue(e.target.value)}
                                type="text" className="input input-bordered input-error w-full max-w-xs" placeholder="Enter country name" />
                            <div className='text-3xl -ml-8'><IoSearchOutline /></div>
                        </div>
                    </div >
                    <h1 className='text-center my-5'>
                        {/* Life is simple{' '} */}
                        <span className="text-3xl lg:text-4xl my-10 font-extrabold text-center text-transparent bg-clip-text capitalize bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">

                            <Typewriter
                                words={['my all apply visa']}
                                loop={Infinity}
                                cursor
                                // cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            // onLoopDone={handleDone}
                            // onType={handleType}
                            />
                        </span>
                    </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            myApplyVisa.map(singleVisa => <MySingleApplyVisa key={singleVisa._id}
                                singleVisa={singleVisa}
                                myApplyVisa={myApplyVisa}
                                setMyApplyVisa={setMyApplyVisa}
                            ></MySingleApplyVisa>)
                        }
                    </div>

                </div > : <div><p>You have not applied for a visa yet.</p></div>
            }
        </div >
    )
}

export default MyVisaApplication
