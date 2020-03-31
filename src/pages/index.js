import React from "react"
import { Link } from "gatsby"
import "animate.css"

// import Layout from "../components/layout"
import MainLayout from "../layout/main-layout"
import { Typography, Button, Divider, Row, Col } from "antd"

const { Title, Paragraph } = Typography

const IndexPage = () => (
  <MainLayout className="home">
    <Title className="name animated fadeInDown">Dima Kostenyuk</Title>
    <Divider className="divider animated fadeInLeft" />
    <Title level={2} className="title animated fadeIn slower">
      I'm a full-stack developer with a passion for technology and design.
    </Title>
    <Divider className="divider-alt animated fadeInRight" />

    <Paragraph className="about-me animated flipInX delay-05s">
      I like to solve challenges by learning new things. I freelance as website designer & developer. I enjoy traveling,
      listenting to house music and capturing beautiful moments. Currently living in Victoria, British Columbia, Canada.
    </Paragraph>
    <br />
    <Row gutter={[32, 12]} className="animated fadeInUp delay-1s">
      <Col lg={{ span: 4 }} md={{ span: 6 }} sm={{ span: 8 }}>
        <Link to="/contact/">
          <Button shape="round" icon="mail" size="large">
            Contact Me
          </Button>
        </Link>
      </Col>
      <Col sm={{ span: 12 }}>
        <Link to="/resume/">
          <Button shape="round" icon="profile" size="large">
            Resume
          </Button>
        </Link>
      </Col>
    </Row>
  </MainLayout>
)

export default IndexPage
