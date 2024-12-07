import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../Page/Loading';

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    if (loading) return <Loading></Loading>
    if (!user) {
        console.log('user not login')
        return <Navigate to='/auth/login'></Navigate>
    }
    return (
        <div>
            {children}
        </div>
    )
}

export default PrivateRouter
