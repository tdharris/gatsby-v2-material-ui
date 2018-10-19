const config = require("./site-config");

// dotenv
let activeEnv = process.env.ACTIVE_ENV || process.env.NODE_ENV || "development";
console.log(`Using environment config: '${activeEnv}'`);
require("dotenv").config({
  path: `.env.${activeEnv}`
});

module.exports = {
  siteMetadata: {
    title: config.title,
    description: config.description,
    siteUrl: config.url
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/utils/typography.js"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown-pages",
        path: `${__dirname}/src/md-pages`
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-autolink-headers",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 950,
              linkImagesToOriginal: false,
              backgroundColor: "#FAFAFA"
            }
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem"
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "dl"
            }
          }
        ]
      }
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: process.env.GA_TRACKING_ID,
        head: false,
        respectDNT: true
      }
    }
  ]
};
