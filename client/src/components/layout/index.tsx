import React, { useState } from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { BsCameraVideo } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import type { MenuProps } from 'antd';

import Calls from '~/pages/calls';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];
interface ILayoutProps {
  children: any;
}

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(
    'Home',
    '/home',
    <Link to="/">
      <AiOutlineHome />
    </Link>
  ),
  getItem(
    'Calls',
    '/calls',
    <Link to="/calls">
      <BsCameraVideo />
    </Link>
  ),
  getItem('Search', '/search', <AiOutlineSearch />),
  getItem('Connections', '/connections', <FaUsers />),
];

const AppLayout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', minWidth: '100vw' }}>
      <Sider collapsible collapsed={true} theme="light">
        <div className="" />
        <Menu
          theme="light"
          defaultSelectedKeys={['1']}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
