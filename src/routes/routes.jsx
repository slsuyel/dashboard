import { createBrowserRouter } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import Signin from "../pages/auth/Signin";
import Signup from "../pages/auth/Signup";
import WithNavbar from "../layouts/WithNavbar";
import Home from "../pages/home";

import ErrorPage from "../Utilites/ErrorPage";
import Settings from '../pages/Settings/Settings';

import AddNewCharge from "../pages/Settings/DeliverySettings/AddNewCharge";
import AddNewSlider from '../pages/Settings/SliderSetting/AddNewSlider';
import AddNewUser from "../pages/Settings/UserControlSettings/AddNewUser";
import Category from "../pages/Category/Category";
import Products from "../pages/Products/Products";
import NewCategory from "../pages/Category/NewCategory";
import Profile from "../pages/auth/Profile";
import Writers from "../pages/Writers/Writers";
import Orders from "../pages/Orders/Orders";
import Customers from "../pages/Customers/Customers";
import Visitor from "../pages/Visitor/Visitor";
import Multimedia from "../pages/Multimedia/Multimedia";
import Pages from "../pages/Pages/Pages";
import NewProduct from "../pages/Products/NewProduct";
import OrdersListView from "../pages/Customers/OrdersListView";
import FeaturedCategory from "../pages/FeaturedCategory/FeaturedCategory";
import Download from "../pages/Download/Download";
import NewDocumentAdd from "../pages/Download/NewDocumentAdd";
import PhotoCategoryAdd from "../pages/Multimedia/PhotoCategoryAdd";
import ViewPhotoCategory from "../pages/Multimedia/ViewPhotoCategory";

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
                path: "products/new",
                element: <NewProduct />,
            },
            {
                path: "writers",
                element: <Writers />,
            },
            {
                path: "orders",
                element: <Orders />,
            },
            {
                path: "customers",
                element: <Customers />,
            },
            {
                path: "customers/details",
                element: <OrdersListView />,
            },
            {
                path: "visitor",
                element: <Visitor />,
            },
            {
                path: "featured-category",
                element: <FeaturedCategory />,
            },
            {
                path: "multimedia",
                element: <Multimedia />,
            },
            {
                path: "multimedia/add",
                element: <PhotoCategoryAdd />,
            },
            {
                path: "multimedia/photo-gallery",
                element: <ViewPhotoCategory />,
            },
            {
                path: "pages",
                element: <Pages />,
            },
            {
                path: "download",
                element: <Download />,
            },
            {
                path: "download/new",
                element: <NewDocumentAdd />,
            },

        ],
    },
]);
