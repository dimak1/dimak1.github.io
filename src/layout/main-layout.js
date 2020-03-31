import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { useMediaQuery } from "react-responsive"
import { Layout, Menu, Icon, Typography } from "antd"
const { Header, Content, Footer } = Layout
const { Text } = Typography

const MainLayout = props => {
  const { className, children } = props
  const isMobile = useMediaQuery({ query: "(max-width : 768px)" })

  return (
    <Layout className={"wrapper" + (isMobile ? " mobile" : "")}>
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
          <Icon type="copyright" /> {new Date().getFullYear()} Dima Kostenyuk.{isMobile ? <br /> : " "}
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
