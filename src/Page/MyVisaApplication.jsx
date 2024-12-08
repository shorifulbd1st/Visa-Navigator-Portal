import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import MySingleApplyVisa from './MySingleApplyVisa';

const MyVisaApplication = () => {
    const data = useLoaderData();
    const [myApplyVisa, setMyApplyVisa] = useState(data);
    // console.log(myVisa);
    return (
        <div className='w-11/12 mx-auto my-5'>
            {
                myApplyVisa.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                    {
                        myApplyVisa.map(singleVisa => <MySingleApplyVisa key={singleVisa._id}
                            singleVisa={singleVisa}
                            myApplyVisa={myApplyVisa}
                            setMyApplyVisa={setMyApplyVisa}
                        ></MySingleApplyVisa>)
                    }

                </div> : <div><p>You have not applied for a visa yet.</p></div>
            }
        </div>
    )
}

export default MyVisaApplication
