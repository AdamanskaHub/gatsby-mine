import React from "react"
import { Link } from 'gatsby'

const IndexPage = () => {
    return (
        <div>
            <h1>Hello</h1>
            <h2>Hello again</h2>
            <p>Need a dev? <Link to='/contact'>Contact me</Link></p>
        </div>
    )
}

export default IndexPage