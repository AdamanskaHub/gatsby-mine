
const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {

  const { createPage } = actions

  // Getting the path to the template
  const blogTemplate = path.resolve(`./src/templates/blog.js`)
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  // Get markdown data
  const res = await graphql(`
    query {
      allContentfulBlogPost {
        edges{
          node{
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach((edge)=>{
      createPage ({
          component: blogTemplate,
          path: `/blog/${edge.node.slug}`,
          context: {
              slug: edge.node.slug
          }
      })
  })
}