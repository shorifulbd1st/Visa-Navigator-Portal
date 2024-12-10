import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Page/Loading';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()
    // console.log(location)
    if (loading) return <Loading></Loading>
    if (!user) {
        // console.log('user not login')
        return <Navigate state={{ from: location.pathname }} to='/auth/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRouter
