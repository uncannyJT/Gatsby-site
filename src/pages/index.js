import * as React from "react"
import Layout from '../components/layout'


const IndexPage = () => {
  return (
    <Layout pageTitle= "Home Page" pageHeading="Welcome to my Home">
      <p>This is main hub where you will intially 'spawn in'.</p>
    </Layout>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
