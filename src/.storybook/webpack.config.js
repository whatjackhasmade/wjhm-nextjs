const path = require(`path`);

const quickPath = strVal => path.join(path.dirname(__dirname), strVal);

module.exports = ({ config }) => {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
      wjhm: quickPath(`components`),
      assets: quickPath(`assets`),
      atoms: quickPath(`components/atoms`),
      icons: quickPath(`components/atoms/icons`),
      components: quickPath(`components`),
      helpers: quickPath(`components/helpers`),
      styles: quickPath(`components/particles/styles`),
      mixins: quickPath(`components/particles/styles/mixins`),
      molecules: quickPath(`components/molecules`),
      organisms: quickPath(`components/organisms`),
      pages: quickPath(`components/pages`),
      particles: quickPath(`components/particles`),
      hooks: quickPath(`components/particles/hooks`),
      src: quickPath(``),
      routes: quickPath(`components/particles/constants/ROUTES.json`),
      templates: quickPath(`components/templates`),
    },
  };

  return config;
};
