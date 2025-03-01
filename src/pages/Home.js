import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TopBannerContainer from "../components/home/TopBannerContainer";
import HintsBannerContainer from "../components/home/HintsBannerContainer";
import AboutBannerContainer from "../components/home/AboutBannerContainer";
import HighlightProductsBanner from "../components/home/HighlightProductsBanner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { MobileMenu } from "../components/header/MobileMenu";
const Home = () => {
    return (_jsxs("div", { children: [_jsx(MobileMenu, {}), _jsx(Header, {}), _jsx(TopBannerContainer, {}), _jsx(HintsBannerContainer, {}), _jsx(AboutBannerContainer, {}), _jsx(HighlightProductsBanner, {}), _jsx(Footer, {})] }));
};
export default Home;
