import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation, useNavigate, matchRoutes, } from "react-router-dom";
import { EditProductPage } from "./pages/edit";
import { RegisterProductPage } from "./pages/register";
import { UserConfigPage } from "./pages/userConfig";
import RegisterUser from "./pages/registerUser";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AboutUsPage } from "./pages/aboutUs";
import LoginForm from "./pages/loginForm";
import { ListProductsPage } from "./pages/listProducts";
import { PageNotFoundPage } from "./pages/404Page";
import { useEffect } from "react";
import { ForbiddenPage } from "./pages/403Page";
import { VerifyEmail } from "./pages/verifyEmail/VerifyEmail";
import { ProductDetailsPage } from "./pages/productDetails";
const routes = [
    { path: "/" },
    { path: "/login" },
    { path: "/register" },
    { path: "/verify" },
    { path: "/about-us" },
    { path: "/page-not-found" },
    { path: "/forbidden-page" },
    { path: "/products" },
    { path: "/products/:id" },
    { path: "/products/new" },
    { path: "/products/:id/edit" },
    { path: "/user-config" },
];
function RouteValidator() {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const match = matchRoutes(routes, location);
        if (!match) {
            navigate("/page-not-found", { replace: true });
        }
    }, [location, navigate]);
    return null;
}
function App() {
    return (_jsxs(_Fragment, { children: [_jsx(RouteValidator, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(Home, {}) }), _jsx(Route, { path: "/verify", element: _jsx(VerifyEmail, {}) }), _jsx(Route, { path: "/login", element: _jsx(LoginForm, {}) }), _jsx(Route, { path: "/register", element: _jsx(RegisterUser, {}) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutUsPage, {}) }), _jsx(Route, { path: "/page-not-found", element: _jsx(PageNotFoundPage, {}) }), _jsx(Route, { path: "/forbidden-page", element: _jsx(ForbiddenPage, {}) }), _jsx(Route, { path: "verify-email", element: _jsx(VerifyEmail, {}) }), _jsx(Route, { path: "/products", element: _jsx(PrivateRoute, { children: _jsx(ListProductsPage, {}) }) }), _jsx(Route, { path: "/products/:id", element: _jsx(PrivateRoute, { children: _jsx(ProductDetailsPage, {}) }) }), _jsx(Route, { path: "/about-us", element: _jsx(AboutUsPage, {}) }), _jsx(Route, { path: "/products/new", element: _jsx(PrivateRoute, { children: _jsx(RegisterProductPage, {}) }) }), _jsx(Route, { path: "/products/:id/edit", element: _jsx(PrivateRoute, { children: _jsx(EditProductPage, {}) }) }), _jsx(Route, { path: "/user-config", element: _jsx(PrivateRoute, { children: _jsx(UserConfigPage, {}) }) })] })] }));
}
export default App;
