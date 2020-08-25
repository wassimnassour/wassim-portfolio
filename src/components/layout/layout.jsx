import React from "react";
import { Header, Footer, Main } from "../index";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../globelStyle";
import { useDarkMode } from "../../hook/useDarkMode";
import { lightTheme, darkTheme } from "../../theme";

const Layout = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} theme={theme} />

      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
