const Header = () => {
  const isSignedIn = false;

  return (
    <div className="flex place-items-center justify-between mx-auto px-[40px] h-[83px] border-slate-200 border-b-[1px]">
      <div className=" bg-[url('./assets/images/Frame121.png')] w-[49px] h-[54px]">
      </div>
      <div>
        {!isSignedIn ? (
            <ul>
                <li className="font-[inter] text-[16px] p-[16px] text-emerald-900">
                <a href="#">Home</a>
                </li>
            </ul>
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
        {isSignedIn ? (
          <button className="px-[40px] py-[12px] cursor-pointer bg-emerald-900 hover:bg-emerald-700 rounded-[8px] text-white">Log out</button>
        ) : (
          <ul className="font-[inter] text-[16px] flex gap-[40px]">
            <li>
              <button className="my-[12px] cursor-pointer text-slate-900 hover:text-slate-500">Register</button>
            </li>
            <li>
              <button className="px-[40px] py-[12px] bg-emerald-900 hover:bg-emerald-700 cursor-pointer rounded-[8px] text-white">Login</button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Header;
