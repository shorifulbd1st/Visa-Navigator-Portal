import React from 'react'
import Banner from '../Banner'
import LatestVisas from '../LatestVisas'
import { useLoaderData } from 'react-router-dom'

const Home = () => {
    const data = useLoaderData();
    return (
        <div className='w-11/12 mx-auto'>
            <h1>i am home page</h1>
            {/* <Banner></Banner> */}

            <LatestVisas data={data}></LatestVisas>
        </div>
    )
}

export default Home
