require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const { BLOCKS, MARKS, INLINES } = require("@contentful/rich-text-types");
module.exports = {
  siteMetadata: {
    title: "wassimnassour",
    titleTemplate: "wassimnassour",
    author: "wassimnassour",
    description: "This Site Made With Love And React Gatsby ",
    url: "http://wassimnassour.netlify.app/",
    image: "/images/snape.jpg",
    twitterUsername: "@wassimnassour",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Poppins`,
          `source sans pro\:200,300,400,600,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    //add contentfull
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `k35f0etvf2j1`,

        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
