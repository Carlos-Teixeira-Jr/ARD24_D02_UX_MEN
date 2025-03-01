import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import DarkModeIcon from "../../assets/icons/darkModeIcon";
import LightModeIcon from "../../assets/icons/lightModeIcon";
export function DarkModeToggle() {
    const [isDark, setIsDark] = useState(typeof window !== "undefined" && localStorage.getItem("theme") === "dark");
    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDark]);
    return (_jsx("button", { className: `p-2 border-2 rounded-lg border-emerald-900 cursor-pointer ${isDark && "border-white"}`, onClick: () => setIsDark(!isDark), children: isDark ? (_jsx(LightModeIcon, { className: `${isDark && "fill-white"}` })) : (_jsx(DarkModeIcon, { className: `${!isDark && "fill-emerald-900"}` })) }));
}
