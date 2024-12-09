import React, { useEffect, useState } from 'react'
import Banner from '../Banner'
import LatestVisas from '../LatestVisas'
import { useLoaderData } from 'react-router-dom'
import OurService from '../../Page/OurService'
import TopTravelDestinations from '../../Page/TopTravelDestinations'
import Footer from '../Footer'
import NewSlider from '../NewSlider'
import Slider from '../Slider'

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h1>i am home page</h1>
                <Banner></Banner>
                {/* <Slider></Slider> */}

                {/* <NewSlider></NewSlider> */}


                {
                    data && <LatestVisas data={data}></LatestVisas>
                }

            </div>
            <OurService></OurService>
            <TopTravelDestinations></TopTravelDestinations>
            <Footer></Footer>
        </div>
    )
}

export default Home
