import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineSearch } from 'react-icons/ai';
import { BsCameraVideo } from 'react-icons/bs';
import { FaUsers } from 'react-icons/fa';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Calls from '../../pages/calls';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

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
  getItem('Home', '/home', <AiOutlineHome />),
  getItem('Calls', '/calls', <BsCameraVideo />),
  getItem('Search', '/search', <AiOutlineSearch />),
  getItem('Connections', '/connections', <FaUsers />),
];

const AppLayout: React.FC = () => {
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
        <Content>
          <Calls />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
