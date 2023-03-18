import { useEffect, useState } from "react";
const useTheme = () => {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<"light" | "dark">(
    ((localTheme === "light" || localTheme === "dark") && localTheme) || "light"
  );
  useEffect(() => {
    if (!localTheme) localStorage.setItem("theme", "light");
    else localStorage.setItem("theme", theme);
  }, [theme]);
  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  return { theme, toggleTheme };
};
export default useTheme;
