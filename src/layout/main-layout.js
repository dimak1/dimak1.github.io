import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Layout, Menu, Icon, Typography } from "antd"
const { Header, Content, Footer } = Layout
const { Text } = Typography

const MainLayout = props => {
  const { className, children } = props
  return (
    <Layout className="wrapper">
      <Header className="header">
        <Menu mode="horizontal" className="menu">
          <Menu.Item key="1">
            <Link to="/">About</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/resume/">Resume</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/contact/">Contact</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content
        className={className}
        style={{
          padding: "50px",
          margin: `auto`,
          maxWidth: 1200,
          minHeight: "calc(100vh - 64px - 69px)",
        }}
      >
        {children}
      </Content>
      <Footer className="site-footer">
        <Icon type="copyright" /> {new Date().getFullYear()} Dima Kostenyuk.{" "}
        <Text type="secondary">
          Built with React & Gatsby.{" "}
          <a href="https://github.com/dimak1/personal-site" target="_blank" rel="noopener noreferrer">
            View source
          </a>
          .
        </Text>
      </Footer>
    </Layout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
