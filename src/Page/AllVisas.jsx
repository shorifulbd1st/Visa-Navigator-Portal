import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleVisa from './SingleVisa';

const AllVisas = () => {
    const data = useLoaderData();
    // console.log(data)

    return (
        <div className='w-11/12 mx-auto my-5'>
            <h1 className='text-3xl font-semibold'>Total Visa: {data.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    data.map(visa => <SingleVisa key={visa._id} visa={visa}></SingleVisa>)
                }
            </div>
        </div>
    )
}

export default AllVisas
