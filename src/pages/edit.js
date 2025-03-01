import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { ProductForm } from "../components/registerProduct/productForm";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Toast } from "../components/toast/toast";
import { MobileMenu } from "../components/header/MobileMenu";
import { useNavigate } from "react-router-dom";
export function EditProductPage() {
    const [productData, setProductData] = useState({
        name: "",
        subtitle: "",
        category: "",
        price: "",
        discountPercentage: "",
        description: "",
        img: "",
        highlighted: false,
    });
    const [showToast, setShowToast] = useState({
        show: false,
        message: "",
        type: "",
    });
    const navigate = useNavigate();
    useEffect(() => {
        const productId = window.location.pathname.split("/")[2];
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/products/${productId}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setProductData(data);
                }
                else {
                    console.error("Error fetching data:", response.statusText);
                    setShowToast({
                        show: true,
                        message: "Error fetching data",
                        type: "error",
                    });
                }
            }
            catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);
    const handleEditProduct = async (formData) => {
        const formDataPayload = {
            name: formData.name,
            subtitle: formData.subtitle,
            category: formData.category,
            price: Number(formData.price),
            discountPercentage: Number(formData.discountPercentage),
            description: formData.description,
            img: formData.img,
            highlighted: formData.highlighted,
        };
        try {
            const response = await fetch(`http://localhost:3001/products/${productData.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formDataPayload),
            });
            if (response.ok) {
                setShowToast({
                    show: true,
                    message: "Success on editing product!",
                    type: "success",
                });
                navigate(`/products/${productData.id}/edit`);
            }
            else {
                console.error("Error on editing product", response.statusText);
                setShowToast({
                    show: true,
                    message: "Error on editing product",
                    type: "error",
                });
            }
        }
        catch (error) {
            console.error("Error:", error);
        }
    };
    return (_jsxs("div", { children: [_jsx(Header, {}), _jsx(MobileMenu, {}), _jsx(ProductForm, { productData: productData, onSubmit: handleEditProduct, mode: "edit" }), showToast.show && (_jsx(Toast, { toastProps: showToast, handleRemoveToast: setShowToast })), _jsx(Footer, {})] }));
}
