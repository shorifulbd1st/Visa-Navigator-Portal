import React from 'react'
import SingleVisa from '../Page/SingleVisa'
import { Link } from 'react-router-dom'

const LatestVisas = ({ data }) => {
    // console.log(data)
    return (
        <div className="w-11/12 mx-auto my-5">
            {
                data.length === 0 ? <div>
                    {/* <h1>
                        No user has added a visa yet.
                    </h1> */}
                </div> : <div>
                    <h1 className="text-3xl lg:text-5xl my-5 font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">
                        Our Latest Visas
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((visa) => (
                            <SingleVisa key={visa._id} visa={visa}></SingleVisa>
                        ))}
                    </div>

                    <div className="flex justify-start mt-8">
                        <Link
                            to="/all-visas"
                            className="px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                        >
                            See All Visas
                        </Link>
                    </div>
                </div>
            }


        </div>

    )
}

export default LatestVisas
