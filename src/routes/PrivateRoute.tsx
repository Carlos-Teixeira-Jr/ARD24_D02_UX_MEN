import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";

interface IPrivateRoute {
  children: ReactNode
}

export function PrivateRoute({children}: IPrivateRoute) {
  // const {isSignedIn} = useAuth();
  // Determina se o usuário está logado ou não;
  const isSignedIn = true;

  return isSignedIn ? <>{children}</> : <Navigate to="/forbidden-page" replace />
}