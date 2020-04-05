module.exports = {
  siteMetadata: {
    title: `Dima K`,
    description: `Personal professional website`,
    author: `Dima Kostenyuk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-antd`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Personal Website of Dima K`,
        short_name: `Dima K`,
        start_url: `/`,
        background_color: `#f0f2f5`,
        theme_color: `#865aa4`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald\:300,400,500,700`, `Roboto Slab\:300,400,500,600,700`, `Roboto Condensed\:300,400,700`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
