import React from "react"
import { Link } from "gatsby"
import { Typography, Button, Divider, Card, Timeline, Row, Col } from "antd"
import {
  CodeOutlined,
  BgColorsOutlined,
  BranchesOutlined,
  DashboardOutlined,
  FileDoneOutlined,
  DeploymentUnitOutlined,
  GlobalOutlined,
  ToolOutlined,
  LineChartOutlined,
  ArrowRightOutlined,
  ClockCircleOutlined,
  MailOutlined,
} from "@ant-design/icons"

import MainLayout from "../layout/main-layout"
import { skills } from "../data/skills.json"
const { Title } = Typography

const ResumePage = () => {
  let delay = 0

  const SkillsList = ({ title, data, icon = "" }) => (
    <Col
      lg={{ span: 8 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
      style={{ animationDelay: `${(delay += 0.1)}s` }}
      className="skill-card animated fadeInUp faster"
    >
      <Card title={title} extra={icon}>
        <div className="border-c">
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>
    </Col>
  )

  return (
    <MainLayout className="resume">
      <Title className="animated fadeInDown">Resume</Title>

      <Divider className="divider animated fadeInLeft" />
      <Timeline mode="left" className="intro animated fadeIn">
        <Timeline.Item>
          Enthusiastic software developer with experience building websites and web applications for small businesses
          and large enterprises.
        </Timeline.Item>
        <Timeline.Item>Proficient in all project phases with ability to work cross-functionally.</Timeline.Item>
        <Timeline.Item>Exceptional team player with multiple recognitions.</Timeline.Item>
      </Timeline>
      <Divider className="divider-alt animated fadeInRight" />

      <Title level={2} className="animated flipInX">
        Skills
      </Title>

      <Row gutter={[64, { lg: 32, md: 32, sm: 24, xs: 24 }]} className="all-skills">
        <SkillsList title="Code" icon={<CodeOutlined />} data={skills.code} />
        <SkillsList title="Design" icon={<BgColorsOutlined />} data={skills.design} />
        <SkillsList title="Develop" icon={<BranchesOutlined />} data={skills.develop} />
        <SkillsList title="Testing" icon={<DashboardOutlined />} data={skills.testing} />
        <SkillsList title="Tracking" icon={<FileDoneOutlined />} data={skills.tracking} />
        <SkillsList title="DevOps" icon={<DeploymentUnitOutlined />} data={skills.devOps} />
        <SkillsList title="Website" icon={<GlobalOutlined />} data={skills.website} />
        <SkillsList title="Tools" icon={<ToolOutlined />} data={skills.tools} />
        <SkillsList title="Analytics" icon={<LineChartOutlined />} data={skills.analytics} />
      </Row>

      <Divider className="divider animated fadeInRight" />
      <Title level={2} className="animated flipInX delay-1s">
        Work
      </Title>

      <div className="work-timeline animated fadeInUp delay-1s">
        <Timeline mode="left">
          <Timeline.Item color="green">
            <span>March 2020 - Present | Maximus BC</span>
            <p>Application Developer</p>
          </Timeline.Item>
          <Timeline.Item color="green">
            <span>Sept 2011 - Present | Worldwide</span>
            <p>Digital Designer and Website Developer @ Freelance</p>
            <span>
              <div>- Design websites, logos, social media content and ads</div>
              <div>- Develop and optimize websites, setup hosting</div>
              <div>- Advise on targeting and customer segmentation for digital campaigns</div>
              <ToolOutlined /> WordPress, PHP, HTML, CSS, Javascript, Photoshop, Sketch <br />
              <a href="https://www.dimakwebsites.com" target="_blank" rel="noopener noreferrer">
                View Portfolio <ArrowRightOutlined />
              </a>
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>Oct 2019 - March 2020 | Victoria, BC</span>
            <p>Full-stack Developer @ Button Inc.</p>
            <span>
              <div>- Work as part of Agile team on projects for BC government and private clients</div>
              <div>- Develop web applications and create interactive user interfaces and experiences</div>
              <ToolOutlined /> Javascript, TypeScript, Node.js, React, GraphQL, PostgreSQL
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>March 2018 - Sept 2019 | Toronto, ON</span>
            <p>Front-end Web Developer @ CIBC</p>
            <div>- Create responsive forms and reusable components</div>
            <div>- Identify problems, determine the root cause, provide recommendations and solutions</div>
            <ToolOutlined /> Javascript, Ember.js, HTML, CSS, inVision
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>Jan 2013 - March 2018 | Toronto, ON</span>
            <p>Back-end Web Developer @ CIBC</p>
            <div>- Design, develop, build and test web application systems</div>
            <div>- Estimate tasks, create user stories and acceptance criterias</div>
            <div>
              - Prepare and present sprint demos, participate in sprint planning and retrospects as per Agile
              Methodology
            </div>
            <ToolOutlined /> Java, Spring, jUnit, Maven
          </Timeline.Item>
          <Timeline.Item dot={<ClockCircleOutlined />}></Timeline.Item>
        </Timeline>
      </div>

      <Divider className="divider-alt animated fadeInUp delay-2s" />
      <Link to="/contact/" className="animated fadeInUp delay-2s">
        <Button type="secondary" shape="round" icon={<MailOutlined />} size="large">
          Contact Me
        </Button>
      </Link>
    </MainLayout>
  )
}

export default ResumePage
