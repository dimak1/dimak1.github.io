import React from "react"
import { Link } from "gatsby"
import { Typography, Icon, Button, Divider, Card, Timeline } from "antd"
import MainLayout from "../layout/main-layout"
import { skills } from "../data/skills.json"

const { Title, Paragraph } = Typography

const ResumePage = () => {
  let delay = 0

  const SkillsList = ({ title, data, icon = "" }) => (
    <div style={{ animationDelay: `${(delay += 0.1)}s` }} className="skill-card animated fadeInUp faster">
      <Card title={title} extra={<Icon type={icon} theme="outlined" className="" />}>
        <div className="border-c">
          <ul>
            {data.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </Card>
    </div>
  )

  return (
    <MainLayout className="resume">
      <Title className="animated fadeInDown">Resume</Title>
      <Divider className="divider animated fadeInLeft" />
      <Paragraph className="p title intro animated fadeIn slower">
        Enthusiastic software developer with experience building <br />
        websites and web applications for small businesses and large enterprises. <br />
        Proficient in all project phases with ability to work cross-functionally. <br />
        Exceptional team player with multiple recognitions.
      </Paragraph>
      <Divider className="divider-alt animated fadeInRight" />

      <Title className="animated flipInX">Skills</Title>

      <div className="all-skills">
        <SkillsList title="Code" icon="code" data={skills.code} />
        <SkillsList title="Design" icon="bg-colors" data={skills.design} />
        <SkillsList title="Develop" icon="branches" data={skills.develop} Z />
        <SkillsList title="Testing" icon="dashboard" data={skills.testing} />
        <SkillsList title="Tracking" icon="file-done" data={skills.tracking} />
        <SkillsList title="DevOps" icon="deployment-unit" data={skills.devOps} />
        <SkillsList title="Website" icon="global" data={skills.website} />
        <SkillsList title="Tools" icon="tool" data={skills.tools} />
        <SkillsList title="Analytics" icon="line-chart" data={skills.analytics} />
      </div>

      <Divider className="divider animated fadeInRight" />
      <Title className="animated flipInX delay-1s">Work</Title>

      <div className="work-timeline animated fadeInUp delay-1s">
        <Timeline mode="alternate">
          <Timeline.Item color="green">
            <span>Sept 2011 - Present</span>
            <p>
              Digital Designer and Website Developer @ Freelance<span> - Worldwide</span>
            </p>
            <span>
              - Design websites, logos, social media content and ads
              <br />
              - Develop and optimize websites, setup hosting
              <br />
              - Advise on targeting and customer segmentation for digital campaigns
              <br />
              <Icon type="tool" /> WordPress, PHP, HTML, CSS, Javascript, Photoshop, Sketch
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>Oct 2019 - March 2020</span>
            <p>
              Full-stack Developer @ Button Inc.<span> - Victoria, BC</span>
            </p>
            <span>
              - Work as part of Agile team on projects for BC government and private clients
              <br />
              - Develop web applications and create interactive user interfaces and experiences
              <Icon type="tool" /> Javascript, TypeScript, Node.js, React, GraphQL, PostgreSQL
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>March 2018 - Sept 2019</span>
            <p>
              Front-end Web Developer @ CIBC<span> - Toronto, ON</span>
            </p>
            <span>
              - Create responsive forms and reusable components
              <br />
              - Identify problems, determine the root cause, provide recommendations and solutions <br />
              <Icon type="tool" /> Javascript, Ember.js, HTML, CSS, inVision
              <br />
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>Jan 2013 - March 2018</span>
            <p>
              Back-end Web Developer @ CIBC <span> - Toronto, ON</span>
            </p>
            <span>
              - Design, develop, build and test web application systems
              <br />
              - Estimate tasks, create user stories and acceptance criteria in Jira, Confluence <br />
              - Prepare and present sprint demos, participate in sprint planning and retrospects as per Agile
              Methodology
              <br />
              <Icon type="tool" /> Java, Spring, jUnit, Maven
            </span>
          </Timeline.Item>
          <Timeline.Item dot={<Icon type="up-circle" />}></Timeline.Item>
        </Timeline>
      </div>

      <Divider className="divider-alt animated fadeInUp delay-2s" />
      {/* <Button type="primary" shape="round" icon="download">
        Download Resume
      </Button>
      <br />
      <br /> */}
      <Link to="/contact/" className="animated fadeInUp delay-2s">
        <Button type="secondary" shape="round" icon="mail" size="large">
          Contact Me
        </Button>
      </Link>
    </MainLayout>
  )
}

export default ResumePage
