module.exports = {
  siteMetadata: {
    siteUrl: "https://arbre.app",
    title: "arbre.app",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-translate-urls",
      options: {
        translations: {
          en: require("./src/i18n/en.json"),
          fr: require("./src/i18n/fr.json"),
        },
        defaultLocale: "fr",
      },
    },
  ],
};
