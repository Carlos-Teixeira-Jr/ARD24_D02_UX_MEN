import { DarkModeToggle } from "../darkMode/darkModeToggle";
import { Link } from "react-router-dom";

const Header = () => {
  const isSignedIn = true;

  return (
    <div className="flex place-items-center justify-between mx-auto px-[5px] md:px-[40px] h-[83px] border-slate-200 border-b-[1px]">
      <a href="/">
        <div className=" bg-[url('./assets/images/Frame121.png')] w-[49px] h-[54px]" />
      </a>
      <div>
        {!isSignedIn ? (
          <ul>
            <li className="font-[inter] text-[16px] p-[16px] text-emerald-900">
            <Link to="/">Home</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex md:gap-[16px] gap-[10px] md:p-[16px]">
            <li className="font-inter text-[16px] text-emerald-900">
              <a href="/">Home</a>
            </li>
            <li className="font-inter text-[16px] text-slate-500 hover:text-slate-900">
              <Link to="/">Poducts</Link>
            </li>
            <li className="font-inter text-[16px] text-slate-500 hover:text-slate-900">
              <Link to="#">About me</Link>
            </li>
          </ul>
        )}
      </div>
      <div>
        {isSignedIn ? (
          <button className="md:px-[40px] md:py-[12px] py-2 px-2 cursor-pointer bg-emerald-900 hover:bg-emerald-700 rounded-[8px] text-white">Log out</button>
        ) : (
          <ul className="font-[inter] text-[16px] flex gap-[40px]">
            <li>
              <DarkModeToggle/>
            </li>
            <li>
              <button className="my-[12px] cursor-pointer text-slate-900 hover:text-slate-500">
                Register
              </button>
            </li>
            <li>
              <button className=" md:px-[40px] md:py-[12px] py-2 px-2 bg-emerald-900 hover:bg-emerald-700 cursor-pointer rounded-[8px] text-white">
                Login
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
