const path = require('path');

// https://stackoverflow.com/a/34749873/4413709
function mergeDeep(target, ...sources) {
  function isObject(item) {
    return (item && typeof item === 'object' && !Array.isArray(item));
  }

  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

module.exports = {
  reactStrictMode: false,
  experimental: { esmExternals: 'loose' }, // Fix ES Module issues
  webpack: config => {
    config = mergeDeep(config,
      { resolve: { alias: { react: path.resolve('./node_modules/react') } } }, // Fix duplicate react runtime
    );
    config.module.rules.push({
      test: /\.svg$/,
      /*issuer: { // TODO fix that
        test: /\.jsx?$/,
      },*/
      use: ['@svgr/webpack', 'url-loader'],
    });
    return config;
  }
};
