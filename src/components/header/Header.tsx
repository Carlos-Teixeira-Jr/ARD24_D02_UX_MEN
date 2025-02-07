import { DarkModeToggle } from "../darkMode/darkModeToggle";

const Header = () => {
  const isSignedIn = false;

  return (
    <div className="flex place-items-center justify-between mx-auto px-5 md:px-[40px] h-[83px] border-slate-200 border-b-[1px]">
      <a href="/">
        <div className=" bg-[url('./assets/images/Frame121.png')] w-[49px] h-[54px]" />
      </a>
      <div>
<<<<<<< HEAD:src/pages/Header.tsx
        {!isSignedIn ? (
            <ul>
                <li className="font-[inter] text-[16px] p-[16px] text-emerald-900">
                <a href="#">Home</a>
                </li>
            </ul>
=======
        {!isUserLogger ? (
          <ul>
            <li className="font-[inter] text-[16px] p-[16px] text-emerald-900">
              <a href="#">Home</a>
            </li>
          </ul>
>>>>>>> 9fe7fde1427864bd5b28b776dae5dd3dc8a89fda:src/components/header/Header.tsx
        ) : (
          <ul className="flex gap-[16px] p-[16px]">
            <li className="font-inter text-[16px] text-emerald-900">
              <a href="#">Home</a>
            </li>
            <li className="font-inter text-[16px] text-slate-500 hover:text-slate-900">
              <a href="#">Poducts</a>
            </li>
            <li className="font-inter text-[16px] text-slate-500 hover:text-slate-900">
              <a href="#">About me</a>
            </li>
          </ul>
        )}
      </div>
      <div>
<<<<<<< HEAD:src/pages/Header.tsx
        {isSignedIn ? (
          <button className="px-[40px] py-[12px] cursor-pointer bg-emerald-900 hover:bg-emerald-700 rounded-[8px] text-white">Log out</button>
=======
        {isUserLogger ? (
          <button className="px-[40px] py-[12px] cursor-pointer bg-emerald-900 hover:bg-emerald-700 rounded-[8px] text-white">
            Log out
          </button>
>>>>>>> 9fe7fde1427864bd5b28b776dae5dd3dc8a89fda:src/components/header/Header.tsx
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
              <button className="md:px-[40px] md:py-[12px] py-2 px-5 bg-emerald-900 hover:bg-emerald-700 cursor-pointer rounded-[8px] text-white">
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
