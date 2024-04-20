'use client'
import React, { useState,ReactNode }   from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import  Searchbar from 'framework7-react';
import DataChart from './lineCart';
import {SearchIcon} from './SearchIcon'
const { Header, Sider, Content } = Layout;
import {Input} from "@nextui-org/react";
import {CodeSandboxOutlined,DashboardOutlined,ShoppingCartOutlined,TeamOutlined,MailOutlined,CustomerServiceOutlined} from "@ant-design/icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { color } from 'framer-motion';
import { faMagnifyingGlass,faUser ,faMoneyBill,faChartSimple,faPercent,faSquarePollVertical,faEnvelopesBulk,faPeopleGroup,faHeadset} from '@fortawesome/free-solid-svg-icons';
import TopProd from './topProd';
interface CustomTheme {
  token: {
    colorBgContainer: string;
    borderRadiusLG: number;
    colorBgBase:string;
  };
}
interface NavBarProps {
  children: ReactNode;
}
const NavBar: React.FC <NavBarProps>= ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const customTheme: CustomTheme = {
    token: {
      colorBgContainer: 'transparent', // Example background color
      borderRadiusLG: 8,
      colorBgBase: '#0f172a' // Example border radius
    },
  };
  return (
    <Layout>
      <div className="demo-logo-vertical bg-white" >
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu
          theme="light"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <DashboardOutlined/>,
              label: 'dashboard',
              
            },
            {
              key: '2',
              icon: <ShoppingCartOutlined />,
              label: 'inventory',
            },
            {
              key: '3',
              icon: <TeamOutlined />,
              label: 'suppliers',
            },
            {
              key: '4',
              icon: <CodeSandboxOutlined/>,
              label: 'orders',
            },
            {
              key: '5',
              icon: <MailOutlined />,
              label: 'Marketing',
            },
            {
              key: '6',
              icon: <CustomerServiceOutlined />,
              label: 'support',
            },
            
          ]}
          style={{ paddingTop: '40px',
           
          }}
        />
      </Sider>
      </div>
      <Layout>
        <Header style={{ padding: 0, background: customTheme.token.colorBgContainer}}>
          <div className=' inline-flex'>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:'green-500',
            }}
          />
          <Input
          classNames={{
            base: "max-w-full sm:max-w-[12rem] h-10 mt-3 ml-2",
            mainWrapper: "h-full ",
            input: "text-small ",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-full ",
          }}
          placeholder="Type to search..."
          size="sm"
          startContent={<SearchIcon size={18} />}
          type="search"
        />
        </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            height:1020,
            background: customTheme.token.colorBgContainer,
            borderRadius: customTheme.token.borderRadiusLG,
          }}
        >
        {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default NavBar;