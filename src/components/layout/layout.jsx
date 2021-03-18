import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, Main } from "../index";
import { GlobalStyle } from "../../globelStyle";
import { theme } from "../../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
