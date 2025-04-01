import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { ProductDetails } from "../components/products/productsDetails/productDetails";
import { useParams } from "react-router-dom";
import { MobileMenu } from "../components/header/MobileMenu";
import { API_URL } from "@/api/api";
export function ProductDetailsPage() {
    const [product, setProduct] = useState({
        name: "",
        subtitle: "",
        category: "",
        price: 0.0,
        discountPercentage: 0,
        description: "",
        img: "",
        highlighted: false
    });
    const urlParams = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/products/${urlParams.id}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    response
                        .json()
                        .then((data) => {
                        setProduct(data);
                    })
                        .catch((error) => {
                        console.error(error);
                    });
                }
                else {
                    console.error("Error fetching data:", response.statusText);
                }
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    return (_jsxs(_Fragment, { children: [_jsx(Header, {}), _jsx(MobileMenu, {}), _jsx(ProductDetails, { product: product }), _jsx(Footer, {})] }));
}
