import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { DarkModeToggle } from "../darkMode/darkModeToggle";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  return (
    <div className="flex md:min-w-[1350px] place-items-center justify-between mx-auto px-[5px] md:px-[40px] h-[83px] border-slate-200 border-b-[1px]">
      <a href="/">
        <div className=" bg-[url('./assets/images/Frame121.png')] w-[49px] h-[54px]" />
      </a>
      <div>
        {!isSignedIn ? (
          <ul>
            <li className="font-inter text-[16px] hover:text-[20px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-900 hover:text-emeral-00"
                    : "text-slate-500 hover:text-slate-900"
                }
              >
                Home
              </NavLink>
            </li>
          </ul>
        ) : (
          <ul className="flex relative md:gap-[16px] gap-[10px] md:p-[16px]">
            <li className="font-inter text-[16px] hover:text-[20px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-900 hover:text-emeral-400"
                    : "text-slate-500 hover:text-slate-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="font-inter text-[16px] hover:text-[20px]">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-900 hover:text-emeral-700"
                    : "text-slate-500 hover:text-slate-600"
                }
              >
                Poducts
              </NavLink>
            </li>
            <li className="font-inter text-[16px] hover:text-[20px]">
              <NavLink
                to="/user-config"
                className={({ isActive }) =>
                  isActive
                    ? "text-emerald-900 hover:text-emeral-700"
                    : "text-slate-500 hover:text-slate-600"
                }>
                About me
              </NavLink>
            </li>
          </ul>
        )}
      </div>
      <div>
        {isSignedIn ? (
          <>
            <div className="flex gap-4">
              {isSignedIn !== undefined && <DarkModeToggle />}
              <Link
                to="/"
                className="md:min-h-[48px] md:px-[40px] md:py-[12px] py-2 px-2 cursor-pointer bg-emerald-900 hover:bg-emerald-700 rounded-[8px] text-white"
              >
                <button onClick={() => signOut()} className="cursor-pointer">
                  {isSignedIn === undefined ? (
                    <div className="w-5 h-5 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
                  ) : (
                    "Log out"
                  )}
                </button>
              </Link>
            </div>
          </>
        ) : (
          <ul className="font-[inter] text-[16px] flex gap-[40px]">
            {isSignedIn !== undefined && (
              <>
                <li>
                  <DarkModeToggle />
                </li>
                <li>
                  <Link to="register">
                    <button className="my-[12px] cursor-pointer text-slate-900 hover:text-slate-500">
                      Register
                    </button>
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/login">
                <button className=" md:min-w-[135px] md:min-h-[48px] md:px-[40px] md:py-[12px] py-2 px-2 bg-emerald-900 hover:bg-emerald-700 cursor-pointer rounded-[8px] text-white">
                  {isSignedIn === undefined ? (
                    <div className="w-5 h-5 border-4 border-gray-300 border-t-primary rounded-full animate-spin mx-auto"></div>
                  ) : (
                    "Log in"
                  )}
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
