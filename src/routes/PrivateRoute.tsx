import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";

interface IPrivateRoute {
  children: ReactNode
}

export function PrivateRoute({children}: IPrivateRoute) {
  const {isSignedIn} = useAuth();
  console.log("🚀 ~ PrivateRoute ~ isSignedIn:", isSignedIn)

  return isSignedIn ? <>{children}</> : <Navigate to="/forbidden-page" replace />
}