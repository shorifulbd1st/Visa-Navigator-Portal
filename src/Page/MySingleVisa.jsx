import React, { useContext, useState } from 'react';
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';

const MySingleVisa = ({ Visa, myAddedVisa, setMyAddedVisa }) => {
    const { user } = useContext(AuthContext)

    // const { _id, countryImage, countryName, visaType, processingTime, fee, validity, applicationMethod, description } = visa;
    const [visa, setVisa] = useState(Visa)
    const { _id, email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod } = visa;



    const [isModalOpen, setIsModalOpen] = useState(false);
    const loggedInEmail = user?.email;
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const countryImage = form.countryImage.value;
        const countryName = form.countryName.value;
        const visaType = form.visaType.value;
        const processingTime = form.processingTime.value;

        const requiredDocuments = [];

        const validPassport = form.validPassport.checked;
        const visaApplicationForm = form.VisaApplicationForm.checked;
        const photograph = form.photograph.checked;

        if (validPassport) {
            requiredDocuments.push("Valid passport");
        }
        else {
            requiredDocuments.push("");
        }
        if (visaApplicationForm) {
            requiredDocuments.push("Visa application form");
        }
        else {
            requiredDocuments.push("");
        }
        if (photograph) {
            requiredDocuments.push("Recent passport-sized photograph");
        }
        else {
            requiredDocuments.push("");
        }

        // console.log(requiredDocuments);

        const description = form.description.value;
        const ageRestriction = form.ageRestriction.value;
        const fee = form.fee.value;
        const validity = form.validity.value;
        const applicationMethod = form.applicationMethod.value;
        // console.log(countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod);
        const email = user.email;
        const visa = { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };

        // console.log(visa)
        // console.log(_id)
        fetch(`https://visa-navigator-portal-server-side.vercel.app/addVisa/${_id}`, {
            method: "PATCH",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visa)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVisa(visa)
                if (data.modifiedCount > 0) {
                    let timerInterval;
                    Swal.fire({
                        title: "Updating Data!",
                        html: "Please wait, updating data will complete in <b></b> milliseconds.",
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: () => {
                            Swal.showLoading();
                            const timer = Swal.getPopup().querySelector("b");
                            timerInterval = setInterval(() => {
                                timer.textContent = `${Swal.getTimerLeft()}`;
                            }, 100);
                        },
                        willClose: () => {
                            clearInterval(timerInterval);

                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            // console.log("Data update process completed successfully!");
                        }
                    });

                }

            })
        closeModal();
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const form = e.target;


    //     // Proceed with the form submission or API call
    //     closeModal();
    // };


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
                fetch(`https://visa-navigator-portal-server-side.vercel.app/addVisa/${id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log(data)
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
        <div className='w-11/12 mx-auto my-5'>

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
                        <button onClick={openModal}
                            className="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                        >
                            <span className="mr-2">Update</span>
                            <GrUpdate />
                        </button>

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
                        <div className=" flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                            <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle lg:max-w-xl mx-auto">
                                <h3
                                    className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white text-center"
                                    id="modal-title"
                                >
                                    Update Visa Page
                                </h3>
                                {/* <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                    Fill out the form to proceed with your application.
                                </p> */}
                                <form onSubmit={handleSubmit} className="space-y-4 ">
                                    <div>
                                        <label className="block font-medium mb-1">Country Image</label>
                                        <input
                                            type="url"
                                            name="countryImage"
                                            placeholder="Enter image URL"
                                            className="input input-bordered w-full input-error"
                                            defaultValue={countryImage}

                                        />
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-1">Country Name</label>
                                        <input
                                            type="text"
                                            name="countryName"
                                            placeholder="Enter country name"
                                            className="input input-bordered w-full input-error"
                                            defaultValue={countryName}

                                        />
                                    </div>

                                    <div className="md:flex  gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Visa Type</label>
                                            <select
                                                defaultValue={visaType}
                                                name="visaType"
                                                className="select select-bordered select-error w-full max-w-full sm:max-w-md"
                                            >
                                                <option disabled >Visa Type</option>
                                                <option value="Tourist visa">Tourist visa</option>
                                                <option value="Student visa">Student visa</option>
                                                <option value="Official visa">Official visa</option>
                                            </select>
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Processing Time</label>
                                            <input
                                                type="text"
                                                name="processingTime"
                                                placeholder="e.g., 5-10 business days"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={processingTime}

                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-1">Required Documents</label>

                                        <div className="flex flex-col gap-2">
                                            <div className="flex items-center space-x-2">

                                                <input name="validPassport" defaultChecked={requiredDocuments[0] === "Valid passport"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Valid passport</label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input name="VisaApplicationForm" defaultChecked={requiredDocuments[1] ===
                                                    "Visa application form"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Visa application form</label>
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <input name="photograph" defaultChecked={requiredDocuments[2] === "Recent passport-sized photograph"} type="checkbox" className="checkbox checkbox-error" />
                                                <label>Recent passport-sized photograph</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block font-medium mb-1">Description</label>
                                        <textarea
                                            name="description"
                                            placeholder="Enter visa description"
                                            className="textarea textarea-bordered w-full textarea-error"
                                            defaultValue={description}
                                        />
                                    </div>

                                    <div className="md:flex gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Age Restriction</label>
                                            <input
                                                type="number"
                                                name="ageRestriction"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={ageRestriction}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Fee</label>
                                            <input
                                                type="number"
                                                name="fee"
                                                placeholder="Enter visa fee"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={fee}
                                            />
                                        </div>
                                    </div>

                                    <div className="md:flex gap-3">
                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Validity</label>
                                            <input
                                                type="text"
                                                name="validity"
                                                placeholder="e.g., 6 months"
                                                className="input input-bordered w-full input-error"
                                                defaultValue={validity}
                                            />
                                        </div>

                                        <div className="flex-1">
                                            <label className="block font-medium mb-1">Application Method</label>
                                            <select
                                                name="applicationMethod"
                                                className="select select-bordered w-full"
                                                defaultValue={applicationMethod}

                                            >
                                                <option disabled >Application Method</option>
                                                <option value="online">Online</option>
                                                <option value="in-person">In-person</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* <div>
                                        <button type="submit" className="btn btn-primary w-full text-xl">
                                            Add Visa
                                        </button>
                                    </div> */}
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
                                            className="w-full px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80"
                                        >
                                            Update
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
};

export default MySingleVisa;

