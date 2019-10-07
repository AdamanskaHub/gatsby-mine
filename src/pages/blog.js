import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss'

const BlogPage = () => {

    const data = useStaticQuery(graphql`
    query {
        allContentfulBlogPost (
          sort: {fields:publishedDate, order:DESC,}
        )
        
        {
          edges {
            node {
              title
              slug
              publishedDate(formatString: "YYYY MMMM DD")
            }
          }
        }
      }
    `)

    return (
        <Layout>
            <h1>Blog</h1>
            <ol className={blogStyles.posts}>
                {
                    data.allContentfulBlogPost.edges.map((edge)=> {
                        // I commented all content from contentful src fragment
                        return (
                            <li className={blogStyles.post}>
                                <h2><Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link></h2>
                                <p>{edge.node.publishedDate}</p>
                            </li>
                        )
                    }) 
                }
            </ol>
        </Layout>
    )
}

export default BlogPage