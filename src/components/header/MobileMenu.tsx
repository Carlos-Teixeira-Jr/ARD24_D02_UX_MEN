import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

export function MobileMenu() {
  const { isSignedIn } = useUser();

  return (
    <nav className="fixed z-1 bottom-0 px-5 py-3 flex w-full justify-between items-center gap-5 text-2xl border-t md:hidden">
      {isSignedIn ? (
        <ul className="flex justify-between w-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-900 hover:text-emeral-600"
                  : "text-slate-500 hover:text-slate-900"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-900 hover:text-emeral-700"
                  : "text-slate-500 hover:text-slate-600"
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/user-config"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-900 hover:text-emeral-700"
                  : "text-slate-500 hover:text-slate-600"
              }
            >
              About me
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="flex justify-around w-full">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-emerald-900 hover:text-emeral-600"
                  : "text-slate-500 hover:text-slate-900"
              }
            >
              Home
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
}
