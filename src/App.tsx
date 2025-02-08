import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { EditProductPage } from "./pages/edit";
import { RegisterProductPage } from "./pages/register";
import { UserConfigPage } from "./pages/userConfig";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AboutUsPage } from "./pages/aboutUs";
import LoginForm from "./pages/loginForm";
import { ListProductsPage } from "./pages/listProducts";
import { ProductDetailsPage } from "./pages/productDetails";
import { PageNotFoundPage } from "./pages/404Page";
import { useEffect } from "react";

const validRoutes = [
  "/",
  "/loginForm",
  "/about-us",
  "/page-not-found",
  "products",
  "products/new",
  "products/:id/edit",
  "user-config",
];

function RouteValidator() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!validRoutes.includes(location.pathname)) {
      navigate("/page-not-found");
    }
  },[location.pathname, navigate]);

  return null;
}

function App() {
  return (
    <>
    <RouteValidator/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginForm" element={<LoginForm />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/page-not-found" element={<PageNotFoundPage />} />
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ListProductsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id"
          element={
            <PrivateRoute>
              <ProductDetailsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/new"
          element={
            <PrivateRoute>
              <RegisterProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/product/:id/edit"
          element={
            <PrivateRoute>
              <EditProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/user-config"
          element={
            <PrivateRoute>
              <UserConfigPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
