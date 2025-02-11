import "./App.css";
import Home from "./pages/Home";
import { Routes, Route, useLocation, useNavigate, matchRoutes } from "react-router-dom";
import { EditProductPage } from "./pages/edit";
import { RegisterProductPage } from "./pages/register";
import { UserConfigPage } from "./pages/userConfig";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AboutUsPage } from "./pages/aboutUs";
import LoginForm from "./pages/loginForm";
import PlantNotFound from "./pages/pagina_4041";
import { useEffect } from "react";

const routes= [{path: "/page-not-found"}]


function RouteValidator() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(()=>{
    const match = matchRoutes(routes, location)
    if (!match) navigate("/page-not-found")
  },[location, navigate]) 
return null

}
function App() {
  return (
    <>
    <RouteValidator/>
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
         
        />
        <Route
          path="/page-not-found"
          element={
          <PlantNotFound/>
          }
        />
        <Route
          path="/loginForm"
          element={
            <LoginForm/>
          }
        />


        <Route
          path="/about-us"
          element={
            <AboutUsPage/>
          }
        />
        <Route
          path="/create-plant"
          element={
            <PrivateRoute>
              <RegisterProductPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/edit-plant"
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
