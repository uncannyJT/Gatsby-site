import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Seo from '../components/seo'

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            <ol>{
                data.allFile.nodes.map(node => (
                    <li key={node.name}>
                        {node.name}
                    </li>
                ))
            }
            </ol>
        </Layout>
    )
}

export const query = graphql`
query BlogQuery {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog Page"/>
export default Blog