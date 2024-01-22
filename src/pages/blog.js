import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

const Blog = () => {
    return (
        <Layout pageTitle="Blog Posts">
            <p>Find out what's new in my blog posts here!</p>
        </Layout>
    )
}
export const Head = () => <Seo title="Blog Page"/>
export default Blog