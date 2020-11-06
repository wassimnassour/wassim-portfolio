require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "wassimnassour",
    author: "wassimnassour",
    description: "This Site Made With Love And React Gatsby ",
    url: "http://wassimnassour.netlify.app/",
    image: "/images/snape.jpg",
    twitterUsername: "@wassimnassour",
  },

  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Wassim Nassour Portfolio`,
        short_name: `Wassim`,
        description: `The application does cool things and makes your life better.`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/logo.png`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#fff`,
        localize: [
          {
            start_url: `/de/`,
            lang: `de`,
            name: `Die coole Anwendung`,
            short_name: `Coole Anwendung`,
            description: `Die Anwendung macht coole Dinge und macht Ihr Leben besser.`,
          },
        ],
      },
    },

    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
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

    {
      resolve: `gatsby-source-github-api`,
      options: {
        // token: required by the GitHub API
        token: process.env.GITHUB_LOGIN,

        // GraphQLquery: defaults to a search query
        graphQLQuery: `query ($author: String = "", $userFirst: Int = 0) {
    user(login: $author) {
      repositories(first: $userFirst, orderBy: {field: STARGAZERS, direction: DESC} privacy: PUBLIC, isFork: false) {
        edges {
          node {
            id
            primaryLanguage {
            name
            }
            homepageUrl
            name
            url
            stargazers {
              totalCount
            }

          }
        }
      }
    }
  }`,
        variables: {
          userFirst: 3,
          author: "wassimnassour",
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content`,
        name: `posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-images`],
      },
    },
  ],
};
