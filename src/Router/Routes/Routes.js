import Main from "../../Layouts/Main";
import Blogs from "../../Pages/Blog/Blogs";
import Enrolled from "../../Pages/Enrolled/Enrolled";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import ServicesAllCart from "../../Pages/Services/ServicesAllCart";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute"

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/service',
                element: <ServicesAllCart></ServicesAllCart>,
            },
            {
                path: '/review',
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>

            },
            {
                path: '/enroll/:id',
                element: <PrivateRoute><Enrolled></Enrolled></PrivateRoute>,
                loader: ({ params }) => fetch(`https://consult-service-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            }
        ]
    }

])

export default router;