import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const isBrowser = () => typeof window !== "undefined";

  const themelock = isBrowser() && window.localStorage.getItem("theme");
  const [theme, setTheme] = useState(themelock || "dark");
  const setMode = mode => {
    window.localStorage.setItem("theme", mode);
    setTheme(mode);
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    } else {
      setMode("dark");
    }
  }, []);

  return [theme, toggleTheme];
};
