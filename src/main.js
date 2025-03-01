import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ClerkProvider } from "@clerk/clerk-react";
const clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
createRoot(document.getElementById("root")).render(_jsx(StrictMode, { children: _jsx(ClerkProvider, { publishableKey: clerkKey, afterSignOutUrl: "/", children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }) }));
