arbre.app
===
![Deploy](https://github.com/arbre-app/arbre.app/actions/workflows/deploy.yml/badge.svg)

Source code of the website **[arbre.app](https://arbre.app)**.

## Development

The installation works as follows:

1. `npm install` to fetch and install the dependencies
2. `npm run build-dependency` to build `insee-deces-front` locally (the package is not published)
3. `npm run favicons` to generate the various favicons formats
4. `npm run legacy` to unpack the legacy static files

Then:
* `npm start` to launch the local (gatsby) development server, with hot reloading
* `npm run test:develop` to start the interactive Cypress end-to-end testing environment
* `npm run build` to create a production ready bundle in `public/`
* `npm run test:build` to run the end-to-end tests against the production bundle
