import React, { useContext, useState } from 'react'
import { data, useLoaderData } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider';

const VisaDetails = () => {

    const visa = useLoaderData();
    const { user } = useContext(AuthContext);
    // console.log(visa);
    const { _id, email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod } = visa;
    const [isModalOpen, setIsModalOpen] = useState(false);
    const currentDate = new Date().toISOString().split("T")[0]; // Get current date in YYYY-MM-DD format
    const loggedInEmail = user?.email;
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     // const email = form.email.value;
    //     const firstName = form.firstName.value;
    //     const lastName = form.lastName.value;
    //     // const date = form.currentDate.value;
    //     // const fee = form.fee.value;
    //     const data = { email, firstName, lastName, currentDate, fee };
    //     console.log(data)
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;

        const firstName = form.firstName.value.trim();
        const lastName = form.lastName.value.trim();

        // Manual Validation
        // if (!firstName) {
        //     alert("First Name is required");
        //     return;
        // }
        // if (!lastName) {
        //     alert("Last Name is required");
        //     return;
        // }

        // If validation passes
        const data = {
            email: loggedInEmail,
            firstName,
            lastName,
            currentDate,
            visa
        };
        console.log(data);
        fetch('http://localhost:5000/applyVisa', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

        // Proceed with the form submission or API call
        closeModal();
    };

    return (
        <div className='w-11/12 mx-auto my-5 flex justify-center items-center'>
            <div className="max-w-2xl overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <img
                    className="object-cover w-full h-64"
                    src={countryImage}
                    alt="Country Image"
                />
                <div className="p-6">
                    <div className="flex justify-between items-center">
                        <span className="text-xs font-medium text-blue-600 uppercase dark:text-blue-400">Visa Type: {visaType}</span>
                        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 ">Fee: ${fee}</span>
                    </div>
                    <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-white">{countryName}</h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>

                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white">Required Documents:</h3>
                        <ul className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                            {requiredDocuments.map((doc, index) => (
                                <li key={index} className="flex items-center">
                                    <svg
                                        className="w-4 h-4 mr-2 text-blue-500 dark:text-blue-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mt-4 flex justify-between items-center">
                        <span className="text-xs  text-gray-600 dark:text-gray-400"> <span className='text-black font-semibold text-sm'>Age Restriction:</span> {ageRestriction}+</span>
                        <span className="text-xs text-gray-600 dark:text-gray-400"> <span className='text-black font-semibold text-sm'>Processing Time:</span> {processingTime} days</span>
                    </div>

                    <div className="mt-4">
                        <h3 className="font-semibold text-gray-800 dark:text-white">Application Method:</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{applicationMethod}</p>
                    </div>

                    <div className="mt-6 text-center">
                        <button
                            onClick={openModal}
                            className="px-6 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-400 transition-colors duration-300 transform focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
                        >
                            Apply for the visa
                        </button>
                    </div>
                </div>
            </div>


            {/* open modal */}
            <div className="relative flex justify-center">
                {/* Button to open modal */}
                {/* <button
                    onClick={openModal}
                    className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                >
                    Open Modal
                </button> */}

                {/* Modal */}
                {isModalOpen && (
                    <div
                        className="fixed inset-0 z-10 overflow-y-auto bg-black bg-opacity-50"
                        aria-labelledby="modal-title"
                        role="dialog"
                        aria-modal="true"
                    >
                        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                                <h3
                                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                    id="modal-title"
                                >
                                    Apply for Visa
                                </h3>
                                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Fill out the form to proceed with your application.
                                </p>

                                <form onSubmit={handleSubmit} className="mt-4">
                                    {/* Email */}
                                    <label
                                        htmlFor="email"
                                        className="block text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        // name='email'
                                        id="email"
                                        value={loggedInEmail}
                                        readOnly
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                    />

                                    {/* First Name */}
                                    <label
                                        htmlFor="firstName"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        name='firstName'
                                        id="firstName"
                                        placeholder="Enter your first name"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                                        required
                                    />

                                    {/* Last Name */}
                                    <label
                                        htmlFor="lastName"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        name='lastName'
                                        id="lastName"
                                        placeholder="Enter your last name"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                                        required
                                    />

                                    {/* Applied Date */}
                                    <label
                                        htmlFor="appliedDate"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Applied Date
                                    </label>
                                    <input
                                        type="date"
                                        id="appliedDate"
                                        // name='appliedDate'
                                        value={currentDate}
                                        readOnly
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-gray-100 border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
                                    />

                                    {/* Fee */}
                                    <label
                                        htmlFor="fee"
                                        className="block mt-3 text-sm text-gray-700 dark:text-gray-200"
                                    >
                                        Fee (Visa Fee)
                                    </label>
                                    <input
                                        type="number"
                                        id="fee"
                                        // name='fee'
                                        value={fee}
                                        readOnly
                                        placeholder="Enter visa fee"
                                        className="block w-full px-4 py-2 mt-1 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300"
                                    />

                                    {/* Buttons */}
                                    <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                        <button
                                            type="button"
                                            onClick={closeModal}
                                            className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            // onClick={closeModal}
                                            className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )}
            </div>









        </div>
    );

}

export default VisaDetails
