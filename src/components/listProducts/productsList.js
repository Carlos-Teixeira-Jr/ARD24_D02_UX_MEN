import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Card from "../commom/cards/card";
import { useNavigate } from "react-router-dom";
import { API_URL } from "@/api/api";
export function ProductsList({ filters }) {
    const [input, setInput] = useState("");
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_URL}/products`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                if (response.ok) {
                    setProducts(data);
                    setFilteredProducts(data);
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
    useEffect(() => {
        let filtered = products;
        if (input) {
            filtered.filter((produto) => produto.name.toLowerCase().includes(input.toLowerCase()));
            filtered = products.filter((produto) => {
                return produto.name.toLowerCase().includes(input.toLowerCase());
            });
        }
        if (filters.length > 0) {
            filtered = filtered.filter((produto) => {
                return filters.includes(produto.category);
            });
        }
        setFilteredProducts(filtered);
    }, [input, products, filters]);
    const handleFilterInputChange = (value) => {
        setInput(value);
    };
    return (_jsxs("section", { className: "pt-8 pb-26 px-7 w-full", children: [_jsxs("div", { className: "flex flex-col md:flex-row justify-center align-items-center items-center gap-7 mb-7", children: [_jsx("input", { className: "border p-3 rounded-lg border-[#E2E8F0] h-11.5 bg-[#F1F5F9] text-[#64748B] w-full", value: input, placeholder: "search by name", onChange: (e) => handleFilterInputChange(e.target.value) }), _jsx("button", { className: "my-[12px] cursor-pointer text-white  bg-emerald-900 hover:bg-emerald-700 p-3 rounded-lg text-nowrap px-10 py-3 w-full md:w-auto", onClick: () => navigate('/products/new'), children: "Add plant" })] }), _jsx("div", { className: "justify-center mx-auto flex flex-wrap gap-17 gap-y-25", children: filteredProducts.map((produto) => (_jsx(Card, { produto: produto }, produto.id))) })] }));
}
