
const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField} = actions

    if(node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')
        // console.log(JSON.stringify(node, undefined, 4))

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
    
}

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
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach((edge)=>{
      createPage ({
          component: blogTemplate,
          path: `/blog/${edge.node.fields.slug}`,
          context: {
              slug: edge.node.fields.slug
          }
      })
  })
}