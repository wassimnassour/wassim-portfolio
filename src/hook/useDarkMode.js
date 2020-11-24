import { useEffect, useState } from "react";
export const useDarkMode = () => {
  const [theme, setTheme] = useState(
    window.localStorage.getItem("theme") || null
  );
  console.log("theme ");

  console.log(theme, "theme ");
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
