import React from "react";

import Header from "./Header";
import Foot from "./Foot";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>

      <Foot />
      
    </>
  );
};

export default Layout;
