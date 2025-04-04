import "./App.css";
import Home from "./pages/Home";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  matchRoutes,
} from "react-router-dom";
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
  {path: "/verify"},
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
  return (
    <>
      <RouteValidator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/verify" element={<VerifyEmail />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterUser />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/page-not-found" element={<PageNotFoundPage />} />
        <Route path="/forbidden-page" element={<ForbiddenPage />} />
        <Route path="verify-email" element={<VerifyEmail />} />
        
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
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route
          path="/products/new"
          element={
            <PrivateRoute>
              <RegisterProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/products/:id/edit"
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
