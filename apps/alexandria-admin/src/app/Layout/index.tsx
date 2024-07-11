import React from 'react';
import Aside from '../molecules/Header/Nav';
import { Header } from '../molecules/Header';
import { Toaster } from '@alexandria/shadcn-ui/components/ui/toaster';

type Props = {
  children?: React.ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex-1 md:flex min-h-screen w-screen">
      <Aside />
      <Header />
      {children}
      <Toaster />
    </div>
  );
};

export default Layout;
