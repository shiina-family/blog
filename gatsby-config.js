module.exports = {
  siteMetadata: {
    siteUrl: "https://blog.shiina.family",
    title: "blog",
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "./content/assets/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-prismjs`],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./content/assets",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    "gatsby-transformer-yaml",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "articles",
        path: "./content/blog/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "yaml",
        path: "./content/shiina/",
      },
    },
  ],
};