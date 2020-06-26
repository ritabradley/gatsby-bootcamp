module.exports = {
    siteMetadata: {
        title: `The Great Gatsby Bootcamp`,
        author: `Rita Bradley`,
    },
    plugins: [
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: { path: `${__dirname}/src/posts`, name: `posts` },
        },
        `gatsby-transformer-remark`,
    ],
}
