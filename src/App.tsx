import "./App.css";
<<<<<<< HEAD
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { EditProductPage } from "./pages/edit";
import { RegisterProductPage } from "./pages/register";
import { UserConfigPage } from "./pages/userConfig";
import { PrivateRoute } from "./routes/PrivateRoute";
import { AboutUsPage } from "./pages/aboutUs";

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

=======
import React from 'react';
import LoginForm from './components/LoginForm';


const App: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    console.log('Email:', email);
    console.log('Senha:', password);
    //autenticação com Clerk pendente
  };

  return (
    <> 
    
      <LoginForm onLogin={handleLogin} />

    </>
  );
};

>>>>>>> main
export default App;
