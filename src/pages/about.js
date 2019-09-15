import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                }
            }
        }
    `)

    return (
        <Layout>
            <h1>About</h1>
            <p>I'm {data.site.siteMetadata.author} and this is my bio</p>
            <p>Need a dev? <Link to='/contact'>Contact me</Link></p>
        </Layout>
    )
}

export default AboutPage