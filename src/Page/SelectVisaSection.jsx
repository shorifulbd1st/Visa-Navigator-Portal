
import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function SelectVisaSection({ allVisa, setAllVisa }) {
    const [selectedVisa, setSelectedVisa] = useState("");

    // const handleSelectChange = (e) => {
    //     setSelectedVisa(e.target.value);
    // };

    useEffect(() => {
        // console.log(typeof selectedVisa)
        if (selectedVisa === "All visa") {

            fetch("https://visa-navigator-portal-server-side.vercel.app/allVisa")
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    setAllVisa(data)
                })
        }
        else {
            fetch(`https://visa-navigator-portal-server-side.vercel.app/allVisa/${selectedVisa}`)
                .then(res => res.json())
                .then(data => {
                    setAllVisa(data)
                })
        }

    }, [selectedVisa])
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // Add further actions like form submission here
    // };

    return (
        <div
            className="bg-cover bg-center bg-no-repeat py-4 -mt-4 rounded-xl relative"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1724271364158-aa8baa615cf0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >

            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-xl"></div>


            <div className="relative z-10 bg-white bg-opacity-70 p-6 rounded-lg max-w-lg mx-auto text-center">
                <h1 className="mb-5 font-bold text-2xl text-gray-800">
                    Easily select any visa
                </h1>

                {/* <form onSubmit={handleSubmit}> */}
                <select
                    id="visaType"
                    name="visaType"
                    value={selectedVisa}
                    onChange={(e) => setSelectedVisa(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                    <option value="" disabled>
                        Visa Type
                    </option>
                    <option value="All visa">All visa</option>
                    <option value="Tourist visa">Tourist visa</option>
                    <option value="Student visa">Student visa</option>
                    <option value="Official visa">Official visa</option>
                </select>

                {/* <button
                        type="submit"
                        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    >
                        Submit
                    </button> */}
                {/* </form> */}

                {selectedVisa && (
                    <p className="mt-4 text-gray-700">
                        Selected Visa: <strong>{selectedVisa}</strong>
                    </p>
                )}
            </div>
        </div >
    );
}

export default SelectVisaSection;
