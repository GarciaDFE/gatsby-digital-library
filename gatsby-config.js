module.exports = {
  siteMetadata: {
    title: `Digital Library`,
    description: `My library with my digital books`,
    siteUrl: `https://www.gatsby-digital-library.com`,
    author: `Marcial Garcia`,
    social: [
      {
        name: "twitter",
        url: "<link project in the Twitter>"
      },
      {
        name: "youtube",
        url: "<link project in the Youtube>"
      },
      {
        name: "facebook",
        url: "<link project in the Facebook>"
      },
      {
        name: "instagram",
        url: "<link project in the Instagram>"
      },
      {
        name: "whatsapp",
        url: "<link project in the Professional WhatsApp>"
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-firesource',
      options: {
        credential: require("./firebase.json"),
        types: [
          {
            type: 'Book',
            collection: 'books',
            map: doc => ({
              title: doc.title,
              summary: doc.summary,
              imageURL: doc.imageURL,
              author___NODE: doc.author.id
            }),
          },
          {
            type: 'Author',
            collection: 'authors',
            map: doc => ({
              name: doc.name
            }),
          },
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-digital-library`,
        short_name: `gatsby-digital-library`,
        start_url: `/`,
        background_color: `#FFFFFF`,
        theme_color: `#000CAA`,
        display: `template-ui`,
        icon: `src/images/globals/favicon.ico`, // 512x512px.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
      // Add any options here
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: 'Book',
        imagePath: 'imageURL',
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional
        color: `tomato`,
        // Disable the loading spinner in the middle view
        showSpinner: false,
      }
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
        ignore: [`**/styles.js`],
      },
    },
    `gatsby-plugin-offline`,
  ],
}
