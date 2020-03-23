import React from "react"
import { Link } from "gatsby"

// import Layout from "../components/layout"
import MainLayout from "../layout/main-layout"
import { Typography, Button, Divider, Icon } from "antd"

const { Title, Paragraph } = Typography

const IndexPage = () => (
  <MainLayout className="home">
    <div className="content">
      <Title className="name">Dima Kostenyuk</Title>
      <Divider />

      <Title level={2}>
        I'm a <strong>full-stack developer</strong>
        <br />
        with a passion for technology and design.
      </Title>
      <Title level={3}>
        I like to solve challenges by learning new things.
        <br />I freelance as website designer & developer. My goal is to create best online experiences.
      </Title>
      <Paragraph className="about-me">
        I'm into traveling <Icon type="car" />, good vibes <Icon type="customer-service" /> and capturing beautiful
        moments <Icon type="camera" /> <Icon type="video-camera" />
        Currently living in Victoria, British Columbia, Canada.
      </Paragraph>

      <Divider />
      <div className="home-actions">
        <Link to="/resume/">
          <Button type="primary" shape="round" icon="profile" size="large">
            Resume
          </Button>
        </Link>{" "}
        <Link to="/contact/">
          <Button type="primary" shape="round" icon="mail" size="large">
            Contact Me
          </Button>
        </Link>
      </div>
    </div>
  </MainLayout>
)

export default IndexPage
