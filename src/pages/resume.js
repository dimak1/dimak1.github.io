import React from "react"
import { Typography, Icon, Button, Divider, Card, Timeline } from "antd"
import MainLayout from "../layout/main-layout"
// import { useStaticQuery, graphql } from "gatsby"
import { skills } from "../data/skills.json"

const { Title } = Typography

const SkillsList = ({ title, data, icon = "" }) => (
  <div className="skill-card">
    <Card title={title} extra={<Icon type={icon} />}>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Card>
  </div>
)

const ResumePage = () => {
  return (
    <MainLayout className="resume">
      <Title>Resume</Title>
      <Divider />
      <Title level={2}>Highlights</Title>
      <p>
        Extensive experience in all phases of Software Development Life Cycle (SDLC) and have worked using Waterfall and
        Agile / Scrum methodologies. I have worked on websites and applications for small business and large
        enterprises.
      </p>
      <Divider />
      <Title>Technical Skills</Title>

      <div className="all-skills">
        <SkillsList title="Code" icon="code" data={skills.code} />
        <SkillsList title="Design" icon="bg-colors" data={skills.design} />
        <SkillsList title="Develop" icon="branches" data={skills.develop} />
        <SkillsList title="Testing" icon="dashboard" data={skills.testing} />
        <SkillsList title="Tracking" icon="file-done" data={skills.tracking} />
        <SkillsList title="DevOps" icon="deployment-unit" data={skills.devOps} />
        <SkillsList title="Tools" icon="tool" data={skills.tools} />
        <SkillsList title="Analytics" icon="line-chart" data={skills.analytics} />
      </div>
      <Divider />
      <Title>Work Experience</Title>
      <div className="work-timeline">
        <Timeline mode="alternate">
          <Timeline.Item color="green">
            <p>Full-stack Developer @ Button Inc.</p>
            <div>Oct 2019 - Present</div>
            <span>
              - Work as part of Agile team on projects for public and private sectors
              <br />
              - Develop web applications and create interactive user interfaces and experiences
              <Icon type="tool" /> Javascript, TypeScript, Node.js, React, GraphQL, PostgreSQL
            </span>
          </Timeline.Item>
          <Timeline.Item color="green">
            <span>Sept 2011 - Present</span>
            <p>Digital Designer and Website Developer @ Freelance</p>
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
            <span>March 2018</span>
            <p>Front-End Web Developer @ CIBC</p>
            <span>
              - Create responsive pages and components using <br />
              - Identify problems, determine the root cause, provide recommendations and solutions <br />
              <Icon type="tool" /> Javascript, Ember.js, HTML, CSS, inVision
            </span>
          </Timeline.Item>
          <Timeline.Item color="grey">
            <span>Jan 2013</span>
            <p>Back-End Web Developer @ CIBC</p>
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
      <Divider />

      <Button type="primary" shape="round" icon="download">
        Download Resume
      </Button>
      <br />
      <br />
      <Button type="secondary" shape="round" icon="mail">
        Contact Me
      </Button>
    </MainLayout>
  )
}

export default ResumePage
