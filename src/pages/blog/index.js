import * as React from 'react'
import Layout from '../../components/layout'
import {textColor} from "../../components/layout.module.css"
import { graphql } from 'gatsby'
import Seo from '../../components/seo'

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog Posts">
            <ol>{
                data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <p className={textColor}>Postdate: {node.frontmatter.date}</p>
                        <hr/>
                        <p>{node.excerpt}</p>
                    </article>
                ))
            }
            </ol>
        </Layout>
    )
}

export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM, DD YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog Page"/>
export default Blog