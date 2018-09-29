const overrideJsTsLoader = require('./react-app-rewire-js-ts');
const rewireCssModules = require('./react-app-rewire-css');
const AntDesignThemePlugin = require('antd-theme-webpack-plugin');
const path = require('path');
const lessPluginOptions = {
  stylesDir: path.join(__dirname, './src/styles/less'),
  antDir: path.join(__dirname, './node_modules/antd'),
  varFile: path.join(__dirname, './src/styles/less/theme-vars.less'),
  mainLessFile: path.join(__dirname, './src/styles/less/index.less'),
  themeVariables: ['@primary-color'],
  indexFileName: 'index.html',
  generateOnce: false, // generate color.less on each compilation
};

/* config-overrides.js */
module.exports = function override(config, env) {
  // (config, env, babelPlugins = [])
  config = overrideJsTsLoader(config, env);

  // polyfills
  config.entry = ['babel-polyfill', ...config.entry];

  // css, sass, less
  config = rewireCssModules(config, env);

  // ForkTsCheckerWebpackPlugin overide
  config.plugins.forEach((plugin, idx) => {
    try {
      const objectName = plugin.constructor.name;
      if (objectName === 'ForkTsCheckerWebpackPlugin') {
        const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
        config.plugins[idx] = new ForkTsCheckerWebpackPlugin({
          ...plugin.options,
          workers: ForkTsCheckerWebpackPlugin.TWO_CPUS_FREE,
          memoryLimit: 2048,
        });
      }
    } catch (error) {}
  });

  // webpack-bundle-analyzer
  if (process.env.WEBPACK_ANALYZER) {
    const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
      .BundleAnalyzerPlugin;
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  // config.plugins.push(new AntDesignThemePlugin(lessPluginOptions));

  return config;
};
