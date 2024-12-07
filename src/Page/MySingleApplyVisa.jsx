import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleApplyVisa = ({ singleVisa, myApplyVisa, setMyApplyVisa }) => {
    // console.log(myApplyVisa)
    const { _id, firstName, lastName, email: newEmail, currentDate, visa } = singleVisa;
    // console.log(visa)
    const { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod } = visa;
    const applicantName = `${firstName} ${lastName}`;

    const handleDelete = id => {
        // console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, cancel it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/applyVisa/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Cancel!",
                                text: "Your visa has been cancel.",
                                icon: "success"
                            });
                            const remainVisa = myApplyVisa.filter(visa => visa._id !== id)
                            setMyApplyVisa(remainVisa);
                        }
                    })
            }
        });
    }
    return (
        <div className="w-11/12 mx-auto my-5">
            <div>
                <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
                    <img
                        className="object-cover object-center w-full h-56"
                        src={countryImage}
                        alt="Country"
                    />

                    <div className="px-6 py-4">
                        <h1 className="text-xl font-semibold text-gray-800 dark:text-white">
                            {countryName}
                        </h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Visa Type:</strong> {visaType}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Processing Time:</strong> {processingTime} days
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Fee:</strong> ${fee}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Validity:</strong> {validity} days
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Application Method:</strong> {applicationMethod}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Applied Date:</strong> {currentDate}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Applicant's Name:</strong> {applicantName}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                            <strong>Email:</strong> {newEmail}
                        </p>

                        <div className="flex justify-between mt-4">

                            <button onClick={() => handleDelete(_id)}
                                className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MySingleApplyVisa
