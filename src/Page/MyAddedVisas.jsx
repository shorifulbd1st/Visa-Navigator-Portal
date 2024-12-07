import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MySingleVisa from './MySingleVisa';

const MyAddedVisas = () => {
    const data = useLoaderData();
    const [myAddedVisa, setMyAddedVisa] = useState(data);
    // console.log(data)
    return (
        <div className='w-11/12 mx-auto my-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    myAddedVisa.map(Visa => <MySingleVisa key={Visa._id} Visa={Visa}
                        myAddedVisa={myAddedVisa}
                        setMyAddedVisa={setMyAddedVisa}
                    ></MySingleVisa>)
                }
            </div>
        </div>
    )
}

export default MyAddedVisas
