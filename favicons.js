var fs = require("fs");
var favicons = require("favicons"),
  source = "src/images/logo.svg",
  output = "static/",
  configuration = {
    path: "/",
    appName: "arbre.app",
    appShortName: "arbre.app",
    appDescription: null,
    developerName: "Florian Cassayre",
    developerURL: "https://florian.cassayre.me",
    dir: "auto",
    lang: "fr-FR",
    background: "#fff",
    theme_color: "#fff",
    appleStatusBarStyle: "black-translucent",
    display: "standalone",
    orientation: "any",
    scope: "/",
    start_url: "/?homescreen=1",
    preferRelatedApplications: false,
    relatedApplications: undefined,
    version: "1.0",
    logging: false,
    pixel_art: false,
    loadManifestWithCredentials: false,
    manifestMaskable: false,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: true,
      favicons: true,
      firefox: true,
      windows: true,
      yandex: true,
    },
  },
  callback = function (error, response) {
    if (error) {
      console.log(error.message);
      return;
    }
    [response.images, response.files].forEach(files => files.forEach(({ name, contents }) => {
      fs.writeFileSync(output + name, contents);
    }));
    console.log(response.html.join("\n"));
  };

favicons(source, configuration, callback);
