import { NavLink } from "react-router-dom";

export function MobileMenu() {
  return (
    <nav className="bg-white fixed bottom-0 px-5 py-3 flex w-full justify-between items-center gap-5 text-2xl border-t md:hidden">
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
    </nav>
  );
}
