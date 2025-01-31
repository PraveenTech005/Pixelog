import { useEffect, useState } from "react";
import { IoIosSunny, IoIosMoon } from "react-icons/io";

const Theme = () => {
  const [theme, setTheme] = useState(localStorage.getItem("Theme") || "dark");

  useEffect(() => {
    localStorage.setItem("Theme", theme);
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={handleTheme}
      className="border-2 p-2 rounded-full border-black dark:border-white"
    >
      {theme === "dark" ? (
        <IoIosSunny size={20} color="white" />
      ) : (
        <IoIosMoon size={20} color="black" />
      )}
    </button>
  );
};

export default Theme;
