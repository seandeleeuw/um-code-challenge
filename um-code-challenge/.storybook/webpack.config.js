const path = require("path");

module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  config.module.rules.push({
    test: /\.vue$/,
    use: ["vue-storybook", "vue-loader"],
    include: path.resolve(__dirname, "../")
  });

  return config;
};
