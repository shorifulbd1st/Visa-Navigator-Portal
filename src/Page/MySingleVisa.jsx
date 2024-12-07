import React from 'react';
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MySingleVisa = ({ visa, myAddedVisa, setMyAddedVisa }) => {
    const { _id, countryImage, countryName, visaType, processingTime, fee, validity, applicationMethod } = visa;

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/addVisa/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remainVisa = myAddedVisa.filter(visa => visa._id !== id)
                            setMyAddedVisa(remainVisa);
                        }
                    })
            }
        });
    }
    return (
        <div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
            {/* Country Image */}
            <img
                className="object-cover object-center w-full h-56"
                src={countryImage}
                alt={`${countryName} Visa`}
            />

            {/* Card Content */}
            <div className="px-6 py-4">
                {/* Country Name */}
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    {countryName}
                </h1>

                {/* Visa Details */}
                <div className="mt-4 text-gray-700 dark:text-gray-400">
                    <p><span className="font-medium">Visa Type:</span> {visaType}</p>
                    <p><span className="font-medium">Processing Time:</span> {processingTime} days</p>
                    <p><span className="font-medium">Fee:</span> ${fee}</p>
                    <p><span className="font-medium">Validity:</span> {validity} days</p>
                    <p><span className="font-medium">Application Method:</span> {applicationMethod}</p>
                </div>

                {/* Buttons */}
                <div className="flex mt-4 gap-3">
                    {/* Update Button */}
                    <Link
                        className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                    >
                        <span className="mr-2">Update</span>
                        <GrUpdate />
                    </Link>

                    {/* Delete Button */}
                    <button onClick={() => handleDelete(_id)}
                        className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-300 focus:ring-opacity-80"
                    >
                        <span className="mr-2">Delete</span>
                        <MdDelete />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MySingleVisa;

