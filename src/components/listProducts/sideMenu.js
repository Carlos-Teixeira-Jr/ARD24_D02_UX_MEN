import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export function SideMenu({ handleSelectedFilters }) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const categories = [
        {
            key: "outdoor",
            name: "outdoor",
            isChecked: selectedFilters.find((filter) => filter === "outdoor")
                ? true
                : false,
        },
        {
            key: "indoor",
            name: "indoor",
            isChecked: selectedFilters.find((filter) => filter === "indoor")
                ? true
                : false,
        },
        {
            key: "terracy & balcony",
            name: "terracy & balcony",
            isChecked: selectedFilters.find((filter) => filter === "terracy & balcony")
                ? true
                : false,
        },
        {
            key: "office desk",
            name: "office desk",
            isChecked: selectedFilters.find((filter) => filter === "terracy & balcony")
                ? true
                : false,
        },
    ];
    const handleCheckboxChange = (category) => {
        if (selectedFilters.includes(category.key)) {
            setSelectedFilters(selectedFilters.filter((filter) => filter !== category.key));
        }
        else {
            setSelectedFilters([...selectedFilters, category.key]);
        }
    };
    useEffect(() => {
        handleSelectedFilters(selectedFilters);
    }, [selectedFilters]);
    return (_jsx(_Fragment, { children: _jsxs("section", { className: "w-full md:w-60 border border-t-0 border-[#E2E8F0]", children: [_jsx("div", { className: "py-5 px-10 border-b border-b-[#E2E8F0]", children: _jsx("p", { className: "text-[#475569] font-inter font-normal text-[16px]", children: "Filter" }) }), _jsxs("div", { className: "pl-10 py-4 md:pt-8 pr-5 flex flex-col gap-6", children: [_jsx("h3", { className: "text-[#475569] font-inter font-normal text-[16px]", children: "Categories" }), _jsx("div", { className: "grid grid-cols-2 md:flex md:flex-col gap-5", children: categories.map((category) => (_jsxs("div", { className: "flex gap-2", children: [_jsx("input", { type: "checkbox", className: "w-7 h-7 border rounded-lg border-[#E2E8F0] cursor-pointer flex shrink-0", onClick: () => handleCheckboxChange(category) }), _jsx("p", { className: "text-[#64748B] font-inter font-normal text-[16px]", children: category.name })] }, category.key))) })] })] }) }));
}
