const path = require('path')
const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");
const TSConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const tsConfig = path.resolve(__dirname, './tsconfig.json')


module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-app",
    projectName: "header",
    webpackConfigEnv,
    argv,
    resolve: {
      modules: ['.', 'node_modules'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  });

  return merge(defaultConfig, {
    resolve: {
      alias: {
        events: 'events',
      },
      extensions: ['.tsx', '.ts'],
      plugins: [new TSConfigPathsPlugin({ configFile: tsConfig })],
    },
    module: {
      rules: [
        {
          test: /\.html$/i,
          type: "asset/resource",
          generator: {
            filename: "[name][ext]"
          }
        },
        {
          test: /\.(png|jpg|svg)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024 // Inline images under 10KB
            }
          },
          generator: {
            filename: 'images/[name]-[hash][ext]'
          }
        }
      ]
    }
  });
};
