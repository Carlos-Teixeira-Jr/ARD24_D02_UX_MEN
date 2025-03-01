import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { AboutUsDevsBanner } from "../components/aboutUs/aboutUsDevsBanner";
import { AboutUsTopBanner } from "../components/aboutUs/aboutUsTopBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";
export function AboutUsPage() {
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(MobileMenu, {}), _jsx(AboutUsTopBanner, {}), _jsx(AboutUsDevsBanner, {}), _jsx(Footer, {})] }));
}
