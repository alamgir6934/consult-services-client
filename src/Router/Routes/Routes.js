import Main from "../../Layouts/Main";
import Enrolled from "../../Pages/Enrolled/Enrolled";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Reviews from "../../Pages/Reviews/Reviews";
import ServicesAllCart from "../../Pages/Services/ServicesAllCart";
import SignUp from "../../Pages/SignUp/SignUp";

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
                element: <Reviews></Reviews>

            },
            {
                path: '/enroll/:id',
                element: <Enrolled></Enrolled>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
        ]
    }

])

export default router;