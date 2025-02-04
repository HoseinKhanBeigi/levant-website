module.exports = {
    siteMetadata: {
        siteUrl: `https://levant-landing.uat.kian.digital`,
    },
    flags: {
        FUNCTIONS: true,
    },
    plugins: [
        // TypeScript support (native in Gatsby v3+)
        `gatsby-plugin-typescript`,


        // Google Tag Manager
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    'G-CRLY3Y8M2F', // Replace with your Google Analytics ID
                ],
                pluginConfig: {
                    head: true, // Puts the script in the head of the document
                    respectDNT: true, // Respects "Do Not Track" browser settings
                },
            },
        },

        // SCSS/SASS support
        `gatsby-plugin-sass`,

        // Image handling
        `gatsby-plugin-image`,
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,

        // Manifest for PWA
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `لوانت سویت`,
                short_name: `Levant`,
                start_url: `/`,
                background_color: `#ffffff`,
                theme_color: `#0058ff`,
                display: `standalone`,
                icon: `assets/images/levant-fav.svg`, // Adjusted path
            },
        },

        // Offline support
        `gatsby-plugin-offline`,

        // React Helmet for SEO
        `gatsby-plugin-react-helmet`,

        // Meta Redirects (should remain last)
        `gatsby-plugin-meta-redirect`,
    ],
};
