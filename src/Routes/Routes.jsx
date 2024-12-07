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
import PrivateRouter from "./PrivateRoute";
import VisaDetails from "../Page/VisaDetails";
import UpdateVisa from "../Page/UpdateVisa";


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
                element: <AllVisas></AllVisas>,
                loader: () => fetch("http://localhost:5000/allVisa")
            },
            {
                path: '/visa-details/:id',
                element: <PrivateRouter><VisaDetails></VisaDetails></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/allVisa/${params.id}`)
            },
            {
                path: '/add-visa',
                element: <PrivateRouter><AddVisa></AddVisa></PrivateRouter>
            },
            {
                path: '/my-added-visas/:email',
                element: <PrivateRouter><MyAddedVisas></MyAddedVisas></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/myAddedVisa/${params.email}`)
            },
            {
                path: '/my-visa-application/:email',
                element: <PrivateRouter><MyVisaApplication></MyVisaApplication></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/applyVisa/${params.email}`)
            },
            {
                path: '/update/:id',
                element: <UpdateVisa></UpdateVisa>,
                loader: ({ params }) => fetch(`http://localhost:5000/allVisa/${params.id}`)
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