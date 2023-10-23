import * as React from "react"
import { Link } from 'gatsby'


const Layout = ({pageTitle, pageHeading}) => {
    return (
        <main>
            <title>{pageTitle}</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
            <h1>{pageHeading}</h1>
        </main>
        
    )
}

export default Layout
