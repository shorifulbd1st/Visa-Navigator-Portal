import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import LatestVisas from '../LatestVisas'
import { useLoaderData } from 'react-router-dom'
import Slider from '../Slider'
import Carousel from '../Carousel/Carousel'
import OurService from '../../Page/OurService'
import TopTravelDestinations from '../../Page/TopTravelDestinations'

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1>i am home page</h1>
                {/* <Banner></Banner> */}
                {/* <Slider></Slider> */}
                {/* <Carousel></Carousel> */}


                {
                    data && <LatestVisas data={data}></LatestVisas>
                }

            </div>
            <OurService></OurService>
            <TopTravelDestinations></TopTravelDestinations>
        </div>
    )
}

export default Home
