import "./App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { EditProductPage } from "./pages/edit";
import { RegisterProductPage } from "./pages/register";
import { UserConfigPage } from "./pages/userConfig";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AboutUsPage } from "./pages/aboutUs";
import LoginForm from "./pages/loginForm";
import PlantNotFound from "./pages/pagina_4041";


function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home/>
          }
        />
        <Route
          path="/404"
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
