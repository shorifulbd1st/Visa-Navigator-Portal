import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Navigate, useNavigate } from 'react-router-dom';

const ForgetPassword = () => {

    const { user, newEmail, forgetPassword, notify } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = e => {
        e.preventDefault();
        forgetPassword(newEmail)
            .then(res => {
                notify('success', 'password reset email sent, please check your email')
                window.location.href = 'https://mail.google.com';
            })

    }
    return (
        <div className=" min-h-[80vh] w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 my-8 mx-auto ">
            <div className="card bg-base-100 border border-secondary w-full shrink-0 shadow-2xl pb-4">
                <h2 className='text-2xl font-semibold text-center py-2'>Forget Password</h2>
                <form onSubmit={handleSubmit} className="card-body py-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input value={newEmail} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-3">
                        <button className="btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg"> Reset password</button>
                    </div>

                </form>

            </div>

        </div>
    )
}

export default ForgetPassword
