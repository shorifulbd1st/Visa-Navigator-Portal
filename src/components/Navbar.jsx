import React, { useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import { AuthContext } from '../Provider/AuthProvider';
import { GiCommercialAirplane } from "react-icons/gi";
const themes = [
    'light',
    'dark',]
const Navbar = () => {

    // use theme from local storage if available or set light theme
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
    )

    // set theme state in localstorage on mount & also update localstorage on state change
    useEffect(() => {
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        // add custom data-theme attribute to html tag required to update theme using DaisyUI
        document.querySelector('html').setAttribute('data-theme', localTheme)
    }, [theme])

    const [isOpen, setIsOpen] = useState(false);
    const { user, handleLogout } = useContext(AuthContext)
    // console.log(user?.photoURL)
    return (
        <div className='sticky top-0 z-50 '>
            <nav className="relative bg-white shadow dark:bg-gray-800 ">
                <div className="w-11/12 py-4 mx-auto">
                    <div className="lg:flex justify-between">
                        <div className="flex items-center justify-between">
                            <div className='relative flex justify-center items-center'>
                                <img className='w-12' src="https://i.ibb.co.com/1KRMjSB/imagebb.png" alt="" />
                                <h1 className="text-2xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 drop-shadow-lg">Visa Navigator</h1>
                                <div className='absolute top-0 left-56 -ml-2'><span className='text-xl '><GiCommercialAirplane /></span></div>
                            </div>

                            <div className="flex lg:hidden">
                                <button
                                    onClick={() => setIsOpen(!isOpen)}
                                    type="button"
                                    className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    aria-label="toggle menu"
                                >
                                    {isOpen ? (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    ) : (
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-6 h-6"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4 8h16M4 16h16"
                                            />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        <div
                            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:flex lg:items-center ${isOpen
                                ? 'translate-x-0 opacity-100'
                                : 'opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0'
                                }`}
                        >
                            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-2 xl:mx-4 xl:text-lg">
                                <NavLink to={'/'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Home
                                </NavLink>
                                <NavLink to={'/all-visas'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    All visas
                                </NavLink>
                                <NavLink to={'/add-visa'}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    Add Visa
                                </NavLink>
                                <NavLink to={`/my-added-visas/${user?.email}`}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    My added visas
                                </NavLink>
                                <NavLink to={`/my-visa-application/${user?.email}`}
                                    className="px-2 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    My Visa applications
                                </NavLink>

                            </div>

                            <div className="flex items-center mt-4 lg:mt-0 gap-3">
                                {
                                    user && user?.email ? <div className='flex justify-between items-center gap-2'>
                                        <button
                                            type="button"
                                            className="flex items-center focus:outline-none"
                                            aria-label="toggle profile dropdown"
                                        >
                                            <a id="not-clickable">
                                                <div className="w-10 h-10 overflow-hidden border-2 border-gray-400 rounded-full">
                                                    <img
                                                        src={user?.photoURL}
                                                        className="object-cover w-full h-full"
                                                        alt="avatar"
                                                    />
                                                </div>
                                            </a>
                                            <Tooltip anchorSelect="#not-clickable">
                                                <div className="px-2 py-1  rounded text-sm">
                                                    {user?.displayName}
                                                </div>
                                            </Tooltip>
                                        </button>

                                        <button onClick={handleLogout} className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Logout</button>
                                    </div> : <div className='flex gap-2'>
                                        <Link to={'/auth/register'} className="px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Register</Link>
                                        <Link to={'/auth/login'} className=" px-4 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">Login</Link>
                                    </div>
                                }

                                <div className='flex-none'>


                                    <select
                                        name='theme'
                                        className='py-2 px-1 rounded border-2 focus-none outline-none'
                                        onChange={e => setTheme(e.target.value)}
                                        id=''
                                    >
                                        {themes.map(theme => (
                                            <option key={theme} value={theme}>
                                                {theme[0].toUpperCase() + theme.slice(1)}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
