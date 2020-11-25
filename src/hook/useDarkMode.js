import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const theme = window.localStorage.getItem("theme");
      return theme ? theme : null;
    }
  });
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
  }, [theme]);

  return [theme, toggleTheme];
};
