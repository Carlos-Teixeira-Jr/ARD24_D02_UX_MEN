import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
export function PrivateRoute({ children }) {
    const { isSignedIn } = useUser();
    if (isSignedIn !== undefined) {
        return (isSignedIn ? _jsx(_Fragment, { children: children }) : _jsx(Navigate, { to: "/forbidden-page", replace: true }));
    }
}
