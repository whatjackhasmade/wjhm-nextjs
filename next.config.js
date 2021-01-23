const path = require(`path`);
const withPWA = require(`next-pwa`);

// other next config
const buildPath = stringDirectory => path.resolve(__dirname + `/` + stringDirectory);

module.exports = withPWA({
  images: {
    domains: [
      `cdn.dribbble.com`,
      `ghchart.rshah.org`,
      `localhost`,
      `whatjackhasmade-london.storage.googleapis.com`,
      `wjhm.noface.app`,
    ],
  },
  pwa: {
    dest: `public`,
    disable: process.env.NODE_ENV === `development`,
    register: true,
    sw: `service-worker.js`,
  },
  trailingSlash: true,
  webpack: config => {
    config.resolve.alias[`wjhm`] = buildPath(`src/components`);
    config.resolve.alias[`wjhmtypes`] = buildPath(`src/generated/types/wjhm.tsx`);
    config.resolve.alias[`atoms`] = buildPath(`src/components/atoms`);
    config.resolve.alias[`particles`] = buildPath(`src/components/particles`);

    // Support SVG loading https://stackoverflow.com/a/55180310
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: [`@svgr/webpack`],
    });

    return config;
  },
});
