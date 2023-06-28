import React, { FC } from 'react';

interface LayoutProps {
  children?: any;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return <div className="w-screen h-screen overflow-hidden">{children}</div>;
};

export default Layout;
