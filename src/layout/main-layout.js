import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { CopyrightCircleOutlined } from "@ant-design/icons"
import { Layout, Menu, Typography, Grid } from "antd"
const { Header, Content, Footer } = Layout
const { Text } = Typography

const MainLayout = props => {
  const { className, children } = props

  const { useBreakpoint } = Grid
  const screens = useBreakpoint()

  return (
    <Layout className={"wrapper" + (screens.xs ? " responsive" : "")}>
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
      <Content className={"content " + className}>{children}</Content>
      <Footer>
        <div className="site-footer">
          <CopyrightCircleOutlined /> {new Date().getFullYear()} Dima Kostenyuk.{screens.xs ? <br /> : " "}
          <Text type="secondary" className="source-code">
            Built with React & Gatsby.{" "}
            <a href="https://github.com/dimak1/personal-site" target="_blank" rel="noopener noreferrer">
              View source
            </a>
            .
          </Text>
        </div>
      </Footer>
    </Layout>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MainLayout
