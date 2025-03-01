import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
export function Toast({ toastProps: { message, type, show }, handleRemoveToast }) {
    let showToast = show;
    useEffect(() => {
        const timer = setTimeout(() => {
            handleRemoveToast({ show: false, message: "", type: "" });
        }, 5000);
        return () => clearTimeout(timer);
    }, [show, handleRemoveToast]);
    if (!showToast) {
        return null;
    }
    return (showToast && (_jsx("div", { className: `fixed top-5 right-5 px-10 py-5 rounded-lg shadow-lg text-white transition-all duration-500 ease-in-out transform ${type === "success" ? "bg-green-500" : "bg-red-500"} animate-[pulse_2s_ease-in-out_infinite] transition-discrete`, children: message })));
}
