import React from "react";
import { ThemeProvider } from "styled-components";
import { Header, Footer, Main, Alert } from "../index";
import { GlobalStyle } from "../../globelStyle";
import { theme } from "../../theme";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Alert />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
