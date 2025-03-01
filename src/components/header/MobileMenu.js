import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
export function MobileMenu() {
    const { isSignedIn } = useUser();
    return (_jsx("nav", { className: "fixed z-1 bottom-0 px-5 py-3 flex w-full justify-between items-center gap-5 text-2xl border-t md:hidden", children: isSignedIn ? (_jsxs("ul", { className: "flex justify-between w-full", children: [_jsx("li", { children: _jsx(NavLink, { to: "/", className: ({ isActive }) => isActive
                            ? "text-emerald-900 hover:text-emeral-600"
                            : "text-slate-500 hover:text-slate-900", children: "Home" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/products", className: ({ isActive }) => isActive
                            ? "text-emerald-900 hover:text-emeral-700"
                            : "text-slate-500 hover:text-slate-600", children: "Products" }) }), _jsx("li", { children: _jsx(NavLink, { to: "/user-config", className: ({ isActive }) => isActive
                            ? "text-emerald-900 hover:text-emeral-700"
                            : "text-slate-500 hover:text-slate-600", children: "About me" }) })] })) : (_jsx("ul", { className: "flex justify-around w-full", children: _jsx("li", { children: _jsx(NavLink, { to: "/", className: ({ isActive }) => isActive
                        ? "text-emerald-900 hover:text-emeral-600"
                        : "text-slate-500 hover:text-slate-900", children: "Home" }) }) })) }));
}
