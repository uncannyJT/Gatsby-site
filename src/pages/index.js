import * as React from "react"
import { Link } from 'gatsby'


const IndexPage = () => {
  return (
    <main>
      <h1>Welcome to my Gatsby site! 🤩</h1>
      <Link to="/about">👉 About Page</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>Stay tuned for more exciting updates!</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>

export default IndexPage
