import React from "react"
import { Typography, Button, Divider } from "antd"
import MainLayout from "../layout/main-layout"
import { contact } from "../data/contact.json"

const { Title } = Typography

const ContactPage = () => {
  return (
    <MainLayout className="contact">
      <Title className="animated fadeInDown">Contact</Title>
      <Divider className="divider animated fadeInLeft" />
      <Title level={3} className="title animated fadeIn slower">
        I'm available for freelance, let's get in touch.
      </Title>
      <Divider className="divider-alt animated fadeInRight" />
      <div className="profile-links animated fadeInUp delay-05s">
        <a href="ma&#105;lt&#111;&#58;&#37;64&#37;6B%&#54;Fs%74en%79&#117;&#37;6&#66;&#64;gmail&#46;co&#109;">
          <Button shape="round" icon="mail" size="large">
            Email
          </Button>
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          <Button shape="round" icon="github" size="large">
            GitHub
          </Button>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <Button shape="round" icon="linkedin" size="large">
            LinkedIn
          </Button>
        </a>
      </div>
    </MainLayout>
  )
}

export default ContactPage
