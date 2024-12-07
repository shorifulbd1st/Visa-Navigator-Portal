import React, { useContext, useEffect, useRef, useState } from 'react'
import { AuthContext } from '../Provider/AuthProvider'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
const Login = () => {

    // useEffect(() => {
    //     document.title = 'login'
    // }, [])

    const navigate = useNavigate();
    const location = useLocation();

    const [error, setError] = useState({});

    const emailRef = useRef();

    const { handleGoogleLogin, user, setUser, handleLogin, notify, setNewEmail } = useContext(AuthContext);



    const from = location.state?.from?.pathname || '/';


    const googleLogin = () => {
        handleGoogleLogin()
            .then((result) => {
                notify('success', `Welcome ${result.user.displayName}`);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                notify('error', `Error: ${error.message}`);
            });
    }

    const handleSubmit = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');

        handleLogin(email, password)
            .then(result => {
                notify('success', `Welcome ${result.user.displayName}`);

                navigate(from, { replace: true });
            })
            .catch(error => {
                notify('error', 'email or password invalid');
            })
    }
    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        if (!email) {
            notify('error', 'please provide your email')
        }
        else {
            setNewEmail(email);
            navigate('/auth/forgetPassword')
        }
    }
    return (

        <div className=" min-h-[80vh] w-10/12 md:w-6/12 lg:w-5/12 xl:w-4/12 my-8 mx-auto ">
            <div className="card bg-base-100 border-2 border-success w-full shrink-0 shadow-2xl pb-4">
                <h2 className='text-2xl font-semibold text-center py-2'>Login your account</h2>
                <form onSubmit={handleSubmit} className="card-body py-2">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input ref={emailRef} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                        <label onClick={handleForgetPassword} className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>

                    <div className="form-control mt-3">
                        <button className="w-full px-6 py-3 text-lg font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Login
                        </button>
                    </div>

                </form>
                <button onClick={googleLogin} className="btn mt-4 w-10/12 mx-auto"> <span className='text-2xl'><FcGoogle /></span> <span className='text-md '>Login with Google</span> </button>

                <p className='text-center font-bold mt-2'>Don't Have An Account? <Link to='/auth/register' className='text-red-500'>Register</Link> </p>
            </div>

        </div>

    )
}

export default Login
