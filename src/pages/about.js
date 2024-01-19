import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const AboutPage = () => {
  return (
    <Layout pageHeading="About Me 📖" pageTitle="About Page">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>I'm a software engineer/developer that is aiming to break the ice through the ever-dynamic tech industry!</p>
    </Layout>
  )
}

export const Head = () => <Seo title="About Page"/>

export default AboutPage