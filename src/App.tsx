import "./App.css";
import { Route, Routes } from "react-router-dom";
import { CreatePlant } from "./pages/create-plant";
import { PrivateRoute } from "./routes/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        {/* Rotas publicas ficam aqui */}
        <Route
          path="/create-plant"
          element={
            <PrivateRoute>
              <CreatePlant />
            </PrivateRoute>
          }
        >
        </Route>
      </Routes>
    </>
  );
}

export default App;
