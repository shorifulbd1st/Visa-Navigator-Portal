import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MySingleVisa from './MySingleVisa';
import { Typewriter } from 'react-simple-typewriter'
import { AuthContext } from '../Provider/AuthProvider';
const MyAddedVisas = () => {
    const data = useLoaderData();
    const [myAddedVisa, setMyAddedVisa] = useState(data);
    // console.log(data)
    const { user } = useContext(AuthContext);
    // console.log('user', user?.email)
    // console.log('hello')
    // useEffect(() => {
    //     fetch(`https://visa-navigator-portal-server-side.vercel.app/myAddedVisa/${user?.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setMyAddedVisa(data)
    //         })
    // }, [])
    return (
        <div className='w-11/12 mx-auto my-5'>

            {
                myAddedVisa.length === 0 ? <div>You have not added a visa yet.</div> :
                    <div>
                        <h1 className='text-center my-5'>
                            {/* Life is simple{' '} */}
                            <span className="text-3xl lg:text-4xl my-10 font-extrabold text-center text-transparent bg-clip-text capitalize bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">

                                <Typewriter
                                    words={['my all added visa']}
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
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {
                                myAddedVisa.map(Visa => <MySingleVisa key={Visa._id} Visa={Visa}
                                    myAddedVisa={myAddedVisa}
                                    setMyAddedVisa={setMyAddedVisa}
                                ></MySingleVisa>)
                            }
                        </div>
                    </div>

            }

        </div>
    )
}

export default MyAddedVisas
