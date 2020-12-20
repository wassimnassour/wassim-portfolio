require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    image: "/images/portfolio.png",
    defaultTitle: "wassimnassour",
    description:
      "Wassim Nassour Self-taught front-end developer . i built this Portfolio With React and Gatsby ",
    author: "@wassimnassour",
    twitterUsername: "@wassimnassour",
    url: "https://wassimnassour.vercel.app",
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
          `Poppins\:200,300,400,600,700,800,900`,
          `source sans pro\:200,300,400,600,700,800,900`,
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
            description
            primaryLanguage {
            name
            }
            forkCount
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
          userFirst: 5,
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
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850,
            },
          },
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              terminal: "carbon",
              theme: "material",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
