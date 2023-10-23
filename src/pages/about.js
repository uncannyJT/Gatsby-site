import * as React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
  return (
    <main>
      <h1>About Me</h1>
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
      <p>I'm a software engineer/developer that is aiming to break the ice through the ever-dynamic tech industry!</p>
      <Link to="/">👉 Back to Home Page</Link>
    </main>
  )
}
export const Head = () => <title>About Me</title>

export default AboutPage