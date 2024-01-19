import * as React from "react"
import Layout from "../components/layout"
import Seo from '../components/seo'


const ContactPage = () => {
  return (
    <Layout pageHeading="Contact Info 📞" pageTitle= "Contact Page">
      <p1>Feel free to contact me via email or phone</p1>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact Page"/>

export default ContactPage
