import { useEffect, useState } from "react";
import DarkModeIcon from "../../assets/icons/darkModeIcon";
import LightModeIcon from "../../assets/icons/lightModeIcon";


export function DarkModeToggle() {
  const [isDark, setIsDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <button
      className={`p-2 border-2 rounded-lg border-emerald-900 cursor-pointer ${isDark && "border-white"}`}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? (
        <LightModeIcon className={`${isDark && "fill-white"}`} />
      ) : (
        <DarkModeIcon className={`${!isDark && "fill-emerald-900"}`} />
      )}
    </button>
  );
}
