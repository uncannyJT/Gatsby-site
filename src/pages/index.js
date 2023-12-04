import * as React from "react"
import Layout from '../components/layout'
import Seo from '../components/seo'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () => {
  return (
    <Layout pageTitle= "Home Page" pageHeading="Welcome to my Home 🏡">
      <p>Feel free to explore this space. I hope you find navigating my website as adventurous as Frodo's journey to Rivendell!</p>
      <StaticImage
        alt="Campfire gathering"
        style={{position: "relative"}}
        src="../images/campfire.jpg"
        
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page"/>

export default IndexPage
