import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import About from "../pages/about";
import Users from "../pages/users";
import Blogs from "../pages/blogs";
import ErrorPage from "../Utilites/ErrorPage";
import Settings from './../pages/commons/Settings/Settings';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",  // Use a relative path
                element: <Signin />,
            },
            {
                path: "signup",
                element: <Signup />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: <WithNavbar />,
        children: [
            {
                path: "",
                element: <Home />,
            },

            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "setting",
                element: <About />,
            },
        ],
    },
]);
