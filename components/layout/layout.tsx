import React, { ReactNode } from "react";
import MainHeader from "./main-header";

const Layout: React.FC<{ children: ReactNode }> = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
