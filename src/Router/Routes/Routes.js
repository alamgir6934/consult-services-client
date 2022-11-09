import Main from "../../Layouts/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
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
            }
        ]
    }

])

export default router;