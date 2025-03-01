import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductsList } from "../components/listProducts/productsList";
import { SideMenu } from "../components/listProducts/sideMenu";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { MobileMenu } from "../components/header/MobileMenu";
export function ListProductsPage() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const { isSignedIn } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isSignedIn) {
            navigate("/");
        }
    }, [isSignedIn, navigate]);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(MobileMenu, {}), _jsxs("div", { className: "block md:flex", children: [_jsx(SideMenu, { handleSelectedFilters: (filters) => setSelectedFilters(filters) }), _jsx(ProductsList, { filters: selectedFilters })] }), _jsx(Footer, {})] }));
}
