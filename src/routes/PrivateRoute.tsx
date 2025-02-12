import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useUser } from "@clerk/clerk-react";

interface IPrivateRoute {
  children: ReactNode
}

export function PrivateRoute({children}: IPrivateRoute) {
  const {isSignedIn} = useUser();
  console.log("🚀 ~ PrivateRoute ~ isSignedIn:", isSignedIn)

  if (isSignedIn !== undefined) {
    return (
      isSignedIn ? <>{children}</> : <Navigate to="/forbidden-page" replace />
    ) 
  }
}