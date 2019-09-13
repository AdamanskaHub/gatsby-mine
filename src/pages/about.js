import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => {
    return (
        <div>
            <h1>About</h1>
            <p>My bio</p>
            <p>Need a dev? <Link to='/contact'>Contact me</Link></p>
        </div>
    )
}

export default AboutPage