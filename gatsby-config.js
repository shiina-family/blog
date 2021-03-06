module.exports = {
  siteMetadata: {
    title: "Shiina",
    description: "THE SHIINA FAMILY BLOG",
    siteUrl: "https://blog.shiina.family",
    author: "@tenzyumasuda",
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-typescript",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "shiina - blog",
        short_name: "ShiinaBlog",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#0076FF",
        display: "minimal-ui",
        icon: "./static/icon.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: ["gatsby-remark-prismjs"],
      },
    },
    {
      resolve: "gatsby-plugin-sharp",
      options: {
        defaults: {
          placeholder: "blurred",
          quality: 90,
        },
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static",
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