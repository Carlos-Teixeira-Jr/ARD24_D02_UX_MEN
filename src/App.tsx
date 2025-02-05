import "./App.css";
import { Route, Routes } from "react-router-dom";
import { RegisterProductPage } from "./pages/register";
import { PrivateRoute } from "./routes/PrivateRoute";
import { EditProductPage } from "./pages/edit";
import { UserConfigPage } from "./pages/userConfig";

function App() {
  return (
    <>
      <Routes>
        {/* Rotas publicas ficam aqui */}
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
              <UserConfigPage/>
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
