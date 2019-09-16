import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
                fields {
                    slug
                }
              frontmatter {
                  title
                  date
              }
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {
                    data.allMarkdownRemark.edges.map((edge)=> {
                        return (
                            <li>
                                <h2><Link to={`/blog/${edge.node.fields.slug}`}>{edge.node.frontmatter.title}</Link></h2>
                                <p>{edge.node.frontmatter.date}</p>
                            </li>
                        )
                    }) 
                }
            </ol>
        </Layout>
    )
}

export default BlogPage