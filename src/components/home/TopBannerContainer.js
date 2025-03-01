import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
const TopBannerContainer = () => {
    return (_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 justify-items-end", children: [_jsxs("div", { className: "col-span-1 md:mr-[89px] w-[90%] md:w-[524px] ml-[112px] mt-12 md:mt-[117px] gap-6", children: [_jsx("h1", { className: "font-secondary font-bold text-[24px] md:text-[64px]", children: "Discover Your Green Side" }), _jsx("p", { className: "my-6 font-primary w-[90%] md:w-[487px]", children: "We are your one-stop destination for all things green and growing. Our website offers a wide array of stunning plants, ranging from vibrant flowers  to lush indoor foliage, allowing you to create your very own green oasis. " }), _jsx(Link, { to: "/products", children: _jsx("button", { className: "cursor-pointer mb-2 md:mb-0 w-[90%] md:w-auto px-10 py-3 bg-emerald-900 hover:bg-emerald-700 text-white rounded-[8px]", children: "Shop now" }) })] }), _jsx("div", { className: "col-span-1 bg-[url('./assets/images/plant.jpg')] bg-center bg-cover h-[200px] md:h-[636px] w-full md:w-[720px] " })] }));
};
export default TopBannerContainer;
