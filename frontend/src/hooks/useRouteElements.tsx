// src/hooks/useRouteElements.tsx
import { useRoutes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import NotFound from "../pages/NotFound/NotFound";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import ProductList from "../pages/ProductList/ProductList";
import Register from "../pages/Register/Register";

export const paths = {
    home: "/",
    login: "/login",
    register: "/register",
    products: "/products",
    productDetail: "/products/:nameId",
    cart: "/cart",
} as const;

export default function useRouteElements() {
    const routeElements = useRoutes([
        // Public routes
        {
            path: paths.home,
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: paths.products, element: <ProductList /> },
                { path: paths.productDetail, element: <ProductDetail /> },
                { path: paths.cart, element: <Cart /> },
            ],
        },

        // Auth routes
        {
            element: <AuthLayout />,
            children: [
                { path: paths.login, element: <Login /> },
                { path: paths.register, element: <Register /> },
            ],
        },

        // 404
        {
            path: "*",
            element: <NotFound />,
        },
    ]);

    return routeElements;
}
