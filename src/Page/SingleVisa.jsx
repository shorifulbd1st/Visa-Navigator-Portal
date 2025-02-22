import React from 'react'
import { Link } from 'react-router-dom';

const SingleVisa = ({ visa }) => {
    // console.log(visa)
    const { _id, email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod } = visa;

    return (
        <div data-aos="fade-up"
            data-aos-duration="2000">

            <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">

                <img
                    className="object-cover object-center w-full h-56"
                    src={countryImage}
                    alt={`${countryName} Visa`}
                />


                <div className="px-6 py-4">

                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                        {countryName}
                    </h1>


                    <div className="mt-4 text-gray-700 dark:text-gray-400">
                        <p><span className="font-medium">Visa Type:</span> {visaType}</p>
                        <p><span className="font-medium">Processing Time:</span> {processingTime} days</p>
                        <p><span className="font-medium">Fee:</span> ${fee}</p>
                        <p><span className="font-medium">Validity:</span> {validity} days</p>
                        <p><span className="font-medium">Application Method:</span> {applicationMethod}</p>
                    </div>
                </div>


                <div className="px-6 py-4">
                    <Link
                        to={`/visa-details/${_id}`}
                        className="w-full block px-6 py-2 text-center font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                    >
                        Visa Details
                    </Link>
                </div>
            </div>



        </div>
    )
}

export default SingleVisa
