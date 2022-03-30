module.exports = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }
  ]
};

plugins: [
  {
    resolve: `gatsby-plugin-react-css-modules`,
    options: {
      filetypes: {
        ".scss": { syntax: `postcss-scss` },
      },
      exclude: `\/global\/`,
    },
  },
]

plugins: [
  {
    resolve: `gatsby-plugin-sass`
  },
]
