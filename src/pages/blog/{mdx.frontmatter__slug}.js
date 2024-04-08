import * as React from 'react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = () => {
  return (
    <Layout pageHeading="Cool Blog Posts">
      <p>My blog post contents will go here (some time soon).</p>
    </Layout>
  );
};

export const Head = () => <Seo title="Some Quality Blog Posts" />

export default BlogPost