import React from "react";
import { Header, Footer } from "../index";
import { GlobalStyle } from "../../globelStyle";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
