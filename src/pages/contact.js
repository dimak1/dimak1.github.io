import React from "react"
import { Typography, Button, Divider } from "antd"
import MainLayout from "../layout/main-layout"
// import { useStaticQuery, graphql } from "gatsby"
import { contact } from "../data/contact.json"

const { Title } = Typography

const ContactPage = () => {
  // const data = useStaticQuery(graphql`
  //   query ContactQuery {
  //     dataJson {
  //       contact {
  //         github
  //         linkedin
  //       }
  //     }
  //   }
  // `)

  return (
    <MainLayout className="contact">
      <Title>Contact</Title>
      <Divider />
      <Title level={3}>I'm available for freelance, let's get in touch.</Title>
      <Divider />
      <div className="profile-links">
        <a href="ma&#105;lt&#111;&#58;&#37;64&#37;6B%&#54;Fs%74en%79&#117;&#37;6&#66;&#64;gmail&#46;co&#109;">
          <Button shape="circle" icon="mail" size="large"></Button>
        </a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">
          <Button shape="circle" icon="github" size="large"></Button>
        </a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
          <Button shape="circle" icon="linkedin" size="large"></Button>
        </a>
      </div>
    </MainLayout>
  )
}

export default ContactPage
