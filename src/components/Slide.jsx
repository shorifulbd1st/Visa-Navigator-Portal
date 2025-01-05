/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const Slide = ({ title, image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[38rem] rounded-lg overflow-hidden'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-gray-900/70'>
                <div className='text-center w-3/5 '>
                    <h2 className='text-3xl font-semibold text-white lg:text-4xl'>{title}</h2>
                    <h1 className='text-lg  text-white lg:text-xl'>
                        {text}
                    </h1>
                    <br />
                    <Link
                        to='/all-visas'
                        className='w-20 px-5 py-4 mt-4 text-sm font-medium text-white capitalize transition-colors duration-300 transform bg-gray-600 opacity-60 rounded-md lg:w-auto hover:bg-gray-500 focus:outline-none focus:bg-gray-500'
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Slide