import React, { useContext, useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'

const Register = () => {


    const { handleRegister, user, setUser, updateUserProfile, notify } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();
    const location = useLocation();

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        const cPassword = form.get('cPassword');

        const hasUppercase = /.*[A-Z].*/;
        const hasLowercase = /.*[a-z].*/;
        const hasValidLength = /.{6,}/;

        if (!hasUppercase.test(password)) {
            setError({ upperCase: 'must have one uppercase letter' });
            return;
        }
        if (!hasLowercase.test(password)) {
            setError({ lowerCase: 'must have one lowercase letter' });
            return;
        }
        if (!hasValidLength.test(password)) {
            setError({ length: 'must be more than 6 character' });
            return;
        }
        if (password != cPassword) {
            setError({ password: "password and confirm password don't match" });
            return;
        }

        handleRegister(email, password)
            .then(result => {
                const newUser = result.user;
                notify('success', `Welcome ${name}`);

                updateUserProfile({ displayName: name, photoURL: photo })
                    .then(() => navigate('/'))
            })
            .catch(error => notify('error', 'Your account was not created successfully'))

    }
    return (

        <div className=" min-h-[80vh] w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 my-8 mx-auto ">
            <div className="card bg-base-100 border-2 border-success w-full shrink-0 shadow-2xl pb-4">
                <h2 className='text-2xl font-semibold text-center py-2'>Register your account</h2>
                <form className="card-body py-2">

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name='name' type="text" placeholder="Enter your name" className="input input-bordered" required />

                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name='photo' type="text" placeholder="Photo URL" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="Password" className="input input-bordered" required />
                        {
                            error.upperCase && <label className="label text-xs text-red-600">
                                {error.upperCase}
                            </label> ||
                            error.lowerCase && <label className="label text-xs text-red-600">
                                {error.lowerCase}
                            </label> ||
                            error.length && <label className="label text-xs text-red-600">
                                {error.length}
                            </label>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input name='cPassword' type="password" placeholder="Confirm password" className="input input-bordered" required />
                        {
                            error.password && <label className="label text-xs text-red-600">
                                {error.password}
                            </label>
                        }
                    </div>
                    <div className="form-control mt-4">
                        {/* <button className="btn bg-gradient-to-r from-[#FF0000] to-[#FF8938] text-white text-lg"> Register</button> */}
                        <button className="w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Register
                        </button>
                    </div>
                </form>
                <p className='text-center font-bold'>Already Have An Account? <Link to='/auth/login' className='text-red-500'>Login</Link> </p>
            </div>

        </div>
    )
}

export default Register
