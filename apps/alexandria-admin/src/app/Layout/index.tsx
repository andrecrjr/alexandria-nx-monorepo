import React from "react";
import Aside from "../molecules/Nav";

type Props = {
    children: React.ReactElement
};

const Layout = ({children}: Props) => {
  return <div className="flex min-h-screen w-screen"><Aside />{children}</div>;
};

export default Layout;