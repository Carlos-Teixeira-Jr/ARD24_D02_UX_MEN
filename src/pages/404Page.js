import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import background from "../assets/images/img_plantasss.jpg";
export function PageNotFoundPage() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsxs("div", { className: "h-screen max-w-screen md:w-full  flex flex-col items-center justify-center", style: {
                    backgroundImage: `url(${background})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }, children: [_jsx("h1", { className: "text-6xl font-extrabold uppercase text-green-300", children: "404" }), _jsx("p", { className: "text-3xl font-extrabold uppercase bg-green-700 text-white px-6 py-3 mt-4 rounded-lg shadow-lg text-center", children: "Plant Not Found" }), _jsx("a", { href: "/", className: "mt-6 px-8 py-3 bg-green-600 text-white text-lg font-bold uppercase rounded-lg shadow-md hover:bg-green-700 transition hover:scale-105", children: "Voltar para a Home" })] }), _jsx(Footer, {})] }));
}
