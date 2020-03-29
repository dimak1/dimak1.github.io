import React from "react"
import { Link } from "gatsby"
import "animate.css"

// import Layout from "../components/layout"
import MainLayout from "../layout/main-layout"
import { Typography, Button, Divider } from "antd"

const { Title, Paragraph } = Typography

const IndexPage = () => (
  <MainLayout className="home">
    <div className="content">
      <Title className="name animated fadeInDown">Dima Kostenyuk</Title>
      <Divider className="divider animated fadeInLeft" />
      <Title level={2} className="title animated fadeIn slower">
        I'm a full-stack developer
        <br />
        with a passion for technology and design.
      </Title>
      <Divider className="divider-alt animated fadeInRight" />

      <Paragraph className="p title animated flipInX delay-05s">
        I like to solve challenges by learning new things.
        <br />I freelance as website designer & developer. I enjoy traveling, listenting to house music and capturing
        beautiful moments.
        <br />
        <br />
        Currently living in Victoria, British Columbia, Canada.
      </Paragraph>
      <br />
      <br />
      <div className="animated fadeInUp delay-1s">
        <Link to="/contact/">
          <Button shape="round" icon="mail" size="large">
            Contact Me
          </Button>
        </Link>
        <br />
        <br />
        <Link to="/resume/">
          <Button shape="round" icon="profile" size="large">
            Resume
          </Button>
        </Link>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
