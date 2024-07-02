import React from "react";
import Aside from "../molecules/Nav";
import { Header } from "../molecules/Header";

type Props = {
    children: React.ReactElement
};

const Layout = ({children}: Props) => {
  return <div className="flex-1 md:flex min-h-screen w-screen"><Aside /><Header/>{children}</div>;
};

export default Layout;