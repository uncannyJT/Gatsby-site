import * as React from "react"
import { Link } from 'gatsby'


const Layout = () => {
    return (
        <main>
            <title>Home Page</title>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
            <h1>this is my contact page</h1>
        </main>
        
    )
}

export default Layout
