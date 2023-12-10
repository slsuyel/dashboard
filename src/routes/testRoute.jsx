import { createBrowserRouter, Routes, Route } from "react-router-dom";
import WithOutnavbar from "../layouts/WithOutnavbar";
import category from "../pages/auth/category";
import products from "../pages/auth/products";
import Table from "../pages/about/Table";
import ErrorPage from "../Utilites/ErrorPage";

const data = [
    {
        "_id": "6576063e5db547b857871126",
        "role": "admin",
        "path": [
            { "id": 1, "path": "dashboard" },
            { "id": 2, "path": "dashboard/category" },
            { "id": 3, "path": "dashboard/products" },
            { "id": 4, "path": "dashboard/table" },
        ]
    }
];

const generateRoutes = (data) => {
    const routes = [];
    data.forEach((item) => {
        item.path.forEach((pathItem) => {
            routes.push({
                path: `/${pathItem.path}`,
                element: <Route element={category} />,
            });
        });
    });

    return routes;
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <WithOutnavbar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Routes>{generateRoutes(data)}</Routes>,
            },
        ],
    },
]);
