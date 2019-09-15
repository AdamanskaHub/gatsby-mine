/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * 
 * localhost:8000/___graphql
 */

module.exports = {

  siteMetadata: {
    title: 'Emilie codes',
    author: 'Emilie'
  },

  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }

  ]
}
