import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>Contact</h1>
            <p>My contact details</p>
            <p>Check out my <a href='https://twitter.com/Vectosaur'>Twitter</a></p>
            <Footer />
        </div>
    )
}

export default ContactPage