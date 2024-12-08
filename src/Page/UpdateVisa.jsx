// import React, { useContext } from 'react'
// import { AuthContext } from '../Provider/AuthProvider';

// const UpdateVisa = () => {


//     const { user } = useContext(AuthContext);
//     // console.log(user.email)

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const form = e.target;
//         const countryImage = form.countryImage.value;
//         const countryName = form.countryName.value;
//         const visaType = form.visaType.value;
//         const processingTime = form.processingTime.value;

//         const requiredDocuments = [];

//         const validPassport = form.validPassport.checked;
//         const visaApplicationForm = form.VisaApplicationForm.checked;
//         const photograph = form.photograph.checked;

//         if (validPassport) {
//             requiredDocuments.push("Valid passport");
//         }
//         if (visaApplicationForm) {
//             requiredDocuments.push("Visa application form");
//         }
//         if (photograph) {
//             requiredDocuments.push("Recent passport-sized photograph");
//         }

//         // console.log(requiredDocuments);

//         const description = form.description.value;
//         const ageRestriction = form.ageRestriction.value;
//         const fee = form.fee.value;
//         const validity = form.validity.value;
//         const applicationMethod = form.applicationMethod.value;
//         // console.log(countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod);
//         const email = user.email;
//         const visa = { email, countryImage, countryName, visaType, processingTime, requiredDocuments, description, ageRestriction, fee, validity, applicationMethod };

//         fetch("https://visa-navigator-portal-server-side.vercel.app/addVisa", {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify(visa)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 // console.log(data);
//                 form.reset();
//             })
//             .catch(error => {
//                 // console.error("Error:", error)
//             });

//     };

//     return (
//         <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
//             <h2 className="text-2xl font-bold mb-4 text-center">Update Visa Page</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                     <label className="block font-medium mb-1">Country Image</label>
//                     <input
//                         type="url"
//                         name="countryImage"
//                         placeholder="Enter image URL"
//                         className="input input-bordered w-full input-error"

//                     />
//                 </div>

//                 <div>
//                     <label className="block font-medium mb-1">Country Name</label>
//                     <input
//                         type="text"
//                         name="countryName"
//                         placeholder="Enter country name"
//                         className="input input-bordered w-full input-error"

//                     />
//                 </div>

//                 <div className="md:flex  gap-3">
//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Visa Type</label>
//                         <select
//                             name="visaType"
//                             className="select select-bordered select-error w-full max-w-full sm:max-w-md"
//                         >
//                             <option disabled selected>Visa Type</option>
//                             <option value="Tourist visa">Tourist visa</option>
//                             <option value="Student visa">Student visa</option>
//                             <option value="Official visa">Official visa</option>
//                         </select>
//                     </div>

//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Processing Time</label>
//                         <input
//                             type="text"
//                             name="processingTime"
//                             placeholder="e.g., 5-10 business days"
//                             className="input input-bordered w-full input-error"

//                         />
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block font-medium mb-1">Required Documents</label>

//                     <div className="flex flex-col gap-2">
//                         <div className="flex items-center space-x-2">
//                             <input name="validPassport" type="checkbox" className="checkbox checkbox-error" />
//                             <label>Valid passport</label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <input name="VisaApplicationForm" type="checkbox" className="checkbox checkbox-error" />
//                             <label>Visa application form</label>
//                         </div>
//                         <div className="flex items-center space-x-2">
//                             <input name="photograph" type="checkbox" className="checkbox checkbox-error" />
//                             <label>Recent passport-sized photograph</label>
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block font-medium mb-1">Description</label>
//                     <textarea
//                         name="description"
//                         placeholder="Enter visa description"
//                         className="textarea textarea-bordered w-full textarea-error"

//                     />
//                 </div>

//                 <div className="md:flex gap-3">
//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Age Restriction</label>
//                         <input
//                             type="number"
//                             name="ageRestriction"
//                             className="input input-bordered w-full input-error"

//                         />
//                     </div>

//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Fee</label>
//                         <input
//                             type="number"
//                             name="fee"
//                             placeholder="Enter visa fee"
//                             className="input input-bordered w-full input-error"

//                         />
//                     </div>
//                 </div>

//                 <div className="md:flex gap-3">
//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Validity</label>
//                         <input
//                             type="text"
//                             name="validity"
//                             placeholder="e.g., 6 months"
//                             className="input input-bordered w-full input-error"

//                         />
//                     </div>

//                     <div className="flex-1">
//                         <label className="block font-medium mb-1">Application Method</label>
//                         <select
//                             name="applicationMethod"
//                             className="select select-bordered w-full"

//                         >
//                             <option disabled selected>Application Method</option>
//                             <option value="online">Online</option>
//                             <option value="in-person">In-person</option>
//                         </select>
//                     </div>
//                 </div>

//                 <div>
//                     {/* <button type="submit" className="btn btn-primary w-full text-xl">
//                         Add Visa
//                     </button> */}
//                     <button type="submit" className="text-center w-full text-xl px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-green-300 focus:ring-opacity-80">
//                         Update Visa
//                     </button>
//                 </div>
//             </form>
//         </div>
//     )
// }

// export default UpdateVisa
import React from 'react'

const UpdateVisa = () => {
    return (
        <div>
            <h1>update</h1>
        </div>
    )
}

export default UpdateVisa

