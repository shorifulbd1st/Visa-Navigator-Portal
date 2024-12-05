import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../components/Home/Home";
import AllVisas from "../Page/AllVisas";
import AddVisa from "../Page/AddVisa";
import MyVisaApplication from "../Page/MyVisaApplication";
import MyAddedVisas from "../Page/MyAddedVisas";
import AuthLayout from "../Layouts/AuthLayout";
import Register from "../Page/Register";
import Login from "../Page/Login";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: '/all-visas',
                element: <AllVisas></AllVisas>
            },
            {
                path: '/add-visa',
                element: <AddVisa></AddVisa>
            },
            {
                path: '/my-added-visas',
                element: <MyAddedVisas></MyAddedVisas>
            },
            {
                path: '/my-visa-application',
                element: <MyVisaApplication></MyVisaApplication>
            }

        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/register',
                element: <Register></Register>
            },
            {
                path: '/auth/login',
                element: <Login></Login>
            }

        ]
    }
]);

export default router;