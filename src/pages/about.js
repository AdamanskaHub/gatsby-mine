import React from 'react'
import { Link } from 'gatsby'
import Footer from '../components/footer'
import Header from '../components/header'

const AboutPage = () => {
    return (
        <div>
            <Header/>
            <h1>About</h1>
            <p>My bio</p>
            <p>Need a dev? <Link to='/contact'>Contact me</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage