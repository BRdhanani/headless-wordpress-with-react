import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import Routes from "./Routes";
import {  Layout, Menu  } from 'antd';
const { Header } = Layout;

class App extends React.Component {
  render() {
    return (
      <div className="App container">
        <Router>
          <Layout className="layout">
            <Header>
              <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '64px' }}
              >
                <Menu.Item key="1">
                  Home
                  <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                  Blogs
                  <Link to="/posts" />
                </Menu.Item>
                <Menu.Item key="3">
                  About Us
                  <Link to="/about" />
                </Menu.Item>
              </Menu>
            </Header>
          </Layout>
          <Routes />
        </Router>
      </div>
    );
  }}
export default App;