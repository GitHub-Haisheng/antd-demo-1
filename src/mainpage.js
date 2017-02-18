import React from "react";
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Link} from 'react-router';
import "./mainPage.less";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


export default class mainPage extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        theme:'dark'
      }
    }

    changeTheme(value) {
      this.setState({
        theme: value ? 'dark' : 'light',
      });
    }

    render() {
      const logoStyle = {
        width: 120,
        height: 31,
        background: "#333",
        borderRadius: 6,
        margin: "16px 28px 16px 0",
        float: "left"
      }

        return (
            <Layout>
                <Header className="header">
                    <div className="logo" style={logoStyle}>

                    </div>
                </Header>
                <Content style={{
                    padding: '0 50px'
                }}>
                    {/* <Breadcrumb style={{
                        margin: '12px 0'
                    }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Layout style={{
                        padding: '24px 0',
                        background: '#fff'
                    }}>
                        <Sider width={200} style={{
                            background: '#fff'
                        }}>
                            <Menu theme={this.state.theme} mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{
                                height: '100%'
                            }}>
                                <SubMenu key="sub1" title={< span > <Icon type="user"/>subnav 1 < /span>}>
                                    <Menu.Item key="1">option1</Menu.Item>
                                    <Menu.Item key="2"><Link to="/welcome">lalal</Link></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub2" title={< span > <Icon type="laptop"/>subnav 2 < /span>}>
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu key="sub3" title={< span > <Icon type="notification"/>subnav 3 < /span>}>
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>

                        </Sider>
                        <Content style={{
                            padding: '0 24px',
                            minHeight: 280
                        }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{
                    position:"absolute",
                    bottom:0,
                    width:"100%",
                }}>
                  <div style={{  textAlign: 'center'}}>
                      Ant Design ©2017 Created by lxr
                  </div>
                </Footer>
            </Layout>
        )
    }
}
