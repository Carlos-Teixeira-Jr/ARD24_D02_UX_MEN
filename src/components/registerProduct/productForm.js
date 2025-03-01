import { jsxs as _jsxs, jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import plantImage from "../../assets/images/plant.svg";
import { PlantCategory } from "../../interfaces/CreatePlantInterface";
import { formatDiscount } from "../../utils/masks/formatDiscount";
import { formatPrice } from "../../utils/masks/formatPrice";
import { validateDiscount } from "../../utils/validators/validateDiscount";
import { validateName } from "../../utils/validators/validateName";
import { validatePrice } from "../../utils/validators/validatePrice";
export function ProductForm({ productData, onSubmit, mode }) {
    const [formData, setFormData] = useState({
        name: "",
        subtitle: "",
        category: "",
        price: "",
        discountPercentage: "",
        description: "",
        img: "",
        highlighted: false,
    });
    const [formDataErrors, setFormDataErrors] = useState({
        name: "",
        subtitle: "",
        category: "",
        price: "",
        discountPercentage: "",
        description: "",
        img: "",
    });
    const inputs = [
        {
            key: "name",
            value: formData.name,
            placeholder: "Echinocereus Cactus",
            label: "Name",
            errorMsg: formDataErrors.name,
        },
        {
            key: "subtitle",
            value: formData.subtitle,
            placeholder: "A majestic addition to your plant collection",
            label: "Plant subtitle",
            errorMsg: formDataErrors.subtitle,
        },
        {
            key: "category",
            value: formData.category,
            placeholder: "Cactus",
            label: "Category",
            errorMsg: formDataErrors.category,
        },
        {
            key: "price",
            value: formData.price,
            placeholder: "$",
            label: "Price",
            errorMsg: formDataErrors.price,
        },
        {
            key: "discountPercentage",
            value: formData.discountPercentage,
            placeholder: "%",
            label: "Discount percentage",
            errorMsg: formDataErrors.discountPercentage,
        },
        {
            key: "description",
            value: formData.description,
            placeholder: "Ladyfinger cactus...",
            label: "Description",
            errorMsg: formDataErrors.description,
        },
        {
            key: "img",
            value: formData.img,
            placeholder: "Echinocereus Cactus",
            label: "Image URL",
            errorMsg: formDataErrors.img,
        },
    ];
    const categorySelectOptions = useMemo(() => Object.values(PlantCategory).map((category) => ({
        label: category.charAt(0).toUpperCase() + category.slice(1),
        value: category,
    })), []);
    useEffect(() => {
        if (mode === "edit" && productData) {
            setFormData(productData);
        }
    }, [mode, productData]);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormDataErrors({
            name: "",
            subtitle: "",
            category: "",
            price: "",
            discountPercentage: "",
            description: "",
            img: "",
        });
        let newFormDataErrors = {
            name: "",
            subtitle: "",
            category: "",
            price: "",
            discountPercentage: "",
            description: "",
            img: "",
        };
        if (!validateName(formData.name).isValid) {
            newFormDataErrors.name = validateName(formData.name).errorMsg;
            setFormDataErrors({
                ...newFormDataErrors,
                name: validateName(formData.name).errorMsg,
            });
        }
        if (!validateName(formData.subtitle).isValid) {
            newFormDataErrors.subtitle = validateName(formData.subtitle).errorMsg;
            setFormDataErrors({
                ...newFormDataErrors,
                subtitle: validateName(formData.subtitle).errorMsg,
            });
        }
        if (formData.category === "") {
            newFormDataErrors.category = "Select category";
            setFormDataErrors({
                ...newFormDataErrors,
                category: "Select category",
            });
        }
        if (!validatePrice((formData.price).toString()).isValid) {
            newFormDataErrors.price = validatePrice((formData.price).toString()).errorMsg;
            setFormDataErrors({
                ...newFormDataErrors,
                price: validatePrice((formData.price).toString()).errorMsg,
            });
        }
        if (!validateDiscount(formData.discountPercentage.toString()).isValid) {
            if (!validateDiscount(formData.discountPercentage.toString()).isValid) {
                newFormDataErrors.discountPercentage = validateDiscount(formData.discountPercentage.toString()).errorMsg;
                setFormDataErrors({
                    ...newFormDataErrors,
                    discountPercentage: validateDiscount(formData.discountPercentage.toString())
                        .errorMsg,
                });
            }
        }
        if (formData.description === "") {
            newFormDataErrors.description = "Enter description";
            setFormDataErrors({
                ...newFormDataErrors,
                description: "Enter description",
            });
        }
        if (formData.img === "") {
            newFormDataErrors.img = "Enter image URL";
            setFormDataErrors({
                ...newFormDataErrors,
                img: "Enter image URL",
            });
        }
        if (Object.values(newFormDataErrors).some((error) => error !== "")) {
            setFormDataErrors(newFormDataErrors);
            return;
        }
        else {
            const formatedPrice = (formData.price).toString().replace("$", "").replace(",", ".");
            const formatedDiscount = (formData.discountPercentage).toString().replace("%", "");
            const parsedFormData = {
                ...formData,
                price: parseFloat(formatedPrice),
                discountPercentage: Number(formatedDiscount),
            };
            onSubmit(parsedFormData);
        }
    };
    return (_jsx(_Fragment, { children: _jsxs("main", { className: "flex md:flex-row flex-col gap-5 md:gap-14", children: [_jsxs("div", { className: "flex-1 md:pt-8.5 md:pl-16 p-5 flex flex-col gap-5", children: [_jsxs("div", { className: "gap-1 flex flex-col w-2/3", children: [_jsxs("h1", { className: "font-secondary text-titles font-bold text-4xl", children: [mode === "create" ? "Register" : "Edit", " your plant"] }), _jsx("p", { className: "font-inter font-normal", children: "Lorem ipsum dolor sit amet consectetur. Turpis vitae at et massa neque." })] }), _jsxs("form", { className: "flex flex-col gap-5", onSubmit: (e) => handleSubmit(e), children: [inputs.map((input) => (_jsxs("div", { className: "flex flex-col gap-2", children: [_jsx("label", { className: "text-[#334155] font-inter font-medium", children: input.label }), input.key !== "description" && input.key !== "category" ? (_jsxs(_Fragment, { children: [_jsx("input", { value: input.value.toString(), placeholder: input.placeholder, className: "border p-3 rounded-lg border-[#E2E8F0] h-11.5  text-[#64748B]", onChange: (e) => {
                                                        if (input.key === "price") {
                                                            setFormData({
                                                                ...formData,
                                                                [input.key]: formatPrice(e.target.value),
                                                            });
                                                        }
                                                        else if (input.key === "discountPercentage") {
                                                            setFormData({
                                                                ...formData,
                                                                [input.key]: formatDiscount(e.target.value),
                                                            });
                                                        }
                                                        else {
                                                            setFormData({
                                                                ...formData,
                                                                [input.key]: e.target.value,
                                                            });
                                                        }
                                                    } }), input.errorMsg !== "" && (_jsx("span", { className: "text-red-500 text-sm", children: input.errorMsg }))] })) : input.key === "description" ? (_jsxs(_Fragment, { children: [_jsx("textarea", { value: input.value.toString(), placeholder: input.placeholder, className: "border p-3 rounded-lg border-[#E2E8F0] h-48.5  text-[#64748B]", onChange: (e) => setFormData({
                                                        ...formData,
                                                        [input.key]: e.target.value,
                                                    }) }), input.errorMsg !== "" && (_jsx("span", { className: "text-red-500 text-sm", children: input.errorMsg }))] })) : (_jsxs(_Fragment, { children: [_jsxs("select", { value: input.value, className: "border p-3 rounded-lg border-[#E2E8F0] h-11.5 text-[#64748B] cursor-pointer", onChange: (e) => setFormData({
                                                        ...formData,
                                                        [input.key]: e.target.value,
                                                    }), children: [_jsx("option", { value: formData.category, className: "cursor-pointer", disabled: true, children: formData.category
                                                                ? formData.category
                                                                : "Select category" }), categorySelectOptions.map((category) => (_jsx("option", { value: category.value, onClick: () => setFormData({
                                                                ...formData,
                                                                category: category.value,
                                                            }), children: category.label }, category.label)))] }), input.errorMsg !== "" && (_jsx("span", { className: "text-red-500 text-sm", children: input.errorMsg }))] }))] }, input.key))), _jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "checkbox", id: "highlighted", className: "w-6 h-6 cursor-pointer", checked: formData.highlighted, onChange: () => setFormData({
                                                ...formData,
                                                highlighted: !formData.highlighted,
                                            }) }), _jsx("p", { className: "text-[#334155] font-inter font-normal", children: "highlight product" })] }), _jsxs("button", { className: "bg-primary text-[#FCFCFC] p-3 rounded-lg mt-3 mb-4 font-inter font-semibold cursor-pointer", type: "submit", children: [mode === "create" ? "Register" : "Save to edit", " plant"] })] })] }), _jsx("div", { className: "flex-1 bg-gradient-to-b from-black/0 to-black/40", children: _jsx("img", { src: plantImage, className: "w-full h-full object-cover" }) })] }) }));
}
