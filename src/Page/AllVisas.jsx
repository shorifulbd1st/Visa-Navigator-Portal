import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleVisa from './SingleVisa';
import SelectVisaSection from './SelectVisaSection';
import { Typewriter } from 'react-simple-typewriter'
const AllVisas = () => {
    const data = useLoaderData();
    // console.log(data)
    const [allVisa, setAllVisa] = useState(data)

    return (
        <div className='w-11/12 mx-auto my-5'>
            {
                data.length == 0 ? <div>
                    <h1>
                        No user has added a visa yet.
                    </h1>
                </div> :
                    <div>
                        <SelectVisaSection allVisa={allVisa} setAllVisa={setAllVisa}></SelectVisaSection>

                        <div>
                            <h1 className="text-3xl lg:text-4xl my-10 font-extrabold text-center text-transparent bg-clip-text capitalize  bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">all available visa {allVisa.length} </h1>

                            <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                                Life is simple{' '}
                                <span style={{ color: 'red', fontWeight: 'bold' }}>

                                    <Typewriter
                                        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
                                        loop={5}
                                        cursor
                                        cursorStyle='_'
                                        typeSpeed={70}
                                        deleteSpeed={50}
                                        delaySpeed={1000}
                                    // onLoopDone={handleDone}
                                    // onType={handleType}
                                    />
                                </span>
                            </h1>

                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                {
                                    allVisa.map(visa => <SingleVisa key={visa._id} visa={visa}></SingleVisa>)
                                }
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}

export default AllVisas
