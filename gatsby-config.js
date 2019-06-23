require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {

    plugins: [
      {
        resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
        }
      },

      {
        resolve: `gatsby-plugin-typography`,
       },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`
        }
       },
       'gatsby-plugin-sharp',
       'gatsby-plugin-sass',
       {
         resolve: 'gatsby-transformer-remark',
         options: {
           plugins: [
             'gatsby-remark-relative-images',
           {
             resolve: 'gatsby-remark-images',
             options: {
               maxWidth: 750,
               linkkIMagesToOriginal: false
             }
           }
           ]
         }
       }
    ],

    siteMetadata: {
      title: "Brandon's portfolio",
      author: "Brandon Pampuch"
    }
  }

