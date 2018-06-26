module.exports = {
  pathPrefix: `/kontext`,
  siteMetadata: {
    title: 'Kontext',
    subtitle: 'Interaktionen, zwischen Text und Leser'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: "markdown-pages",
      },
    },
  ],
}
