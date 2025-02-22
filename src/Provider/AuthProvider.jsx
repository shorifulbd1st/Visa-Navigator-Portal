import React, { createContext, useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from '../components/firebase/firebase.config';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const notify = (value, message) => {
        if (value == 'success')
            toast.success(`${message}`);
        else
            toast.error(`${message}`)

    };

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [newEmail, setNewEmail] = useState('');

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)

    }

    const handleRegister = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const handleLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }

    const handleLogout = () => {
        setLoading(true);
        signOut(auth).then(() => {
            notify('success', 'logout successfully');
        }).catch((error) => {
        });
    }

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }
    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                // console.log(currentUser)
                setUser(currentUser);
            }
            else {
                setUser(null)
            }
            setLoading(false);
        })
        return () => { unsubscribe() }
    }, [])



    const authInfo = {
        notify,
        user, setUser,
        loading,
        newEmail,
        setNewEmail,
        handleGoogleLogin,
        handleRegister,
        handleLogin,
        updateUserProfile,
        forgetPassword,
        handleLogout,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </AuthContext.Provider>
    )
}

export default AuthProvider
