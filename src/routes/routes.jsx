import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";
import Users from "../pages/users";
import Blogs from "../pages/blogs";
import ErrorPage from "../Utilites/ErrorPage";
import Settings from './../pages/commons/Settings/Settings';
import Table from "../pages/about/Table";
import AddNewCharge from "../pages/commons/Settings/DeliverySettings/AddNewCharge";
import AddNewSlider from './../pages/commons/Settings/SliderSetting/AddNewSlider';
import AddNewUser from "../pages/commons/Settings/UserControlSettings/AddNewUser";
import Category from "../pages/Category/Category";
import Products from "../pages/Products/Products";
import NewCategory from "../pages/Category/NewCategory";
import Profile from "../pages/auth/Profile";
import Writers from "../pages/Writers/Writers";

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
            {
                path: "table",
                element: <Table />,
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
                path: "profile",
                element: <Profile />,
            },

            {
                path: "settings",
                element: <Settings />,
            },
            {
                path: "settings/new-delivery",
                element: <AddNewCharge />,
            },
            {
                path: "settings/new-sliders",
                element: <AddNewSlider />,
            },
            {
                path: "settings/user-control",
                element: <AddNewUser />,
            },
            {
                path: "category",
                element: <Category />,
            },
            {
                path: "category/add-new",
                element: <NewCategory />,
            },
            {
                path: "products",
                element: <Products />,
            },
            {
                path: "writers",
                element: <Writers />,
            },

        ],
    },
]);
