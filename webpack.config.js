const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const webpackConfig = {
  plugins: [
      /**
       * All files inside webpack's output.path directory will be removed once, but the
       * directory itself will not be. If using webpack 4+'s default configuration,
       * everything under <PROJECT_DIR>/dist/ will be removed.
       * Use cleanOnceBeforeBuildPatterns to override this behavior.
       *
       * During rebuilds, all webpack assets that are not used anymore
       * will be removed automatically.
       *
       * See `Options and Defaults` for information
       */
      new CleanWebpackPlugin(),
  ],
};

module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader"
        ]
      }
    ]
  },
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    }),
    /**
     * All files inside webpack's output.path directory will be removed once, but the
     * directory itself will not be. If using webpack 4+'s default configuration,
     * everything under <PROJECT_DIR>/dist/ will be removed.
     * Use cleanOnceBeforeBuildPatterns to override this behavior.
     *
     * During rebuilds, all webpack assets that are not used anymore
     * will be removed automatically.
     *
     * See `Options and Defaults` for information
     */
    new CleanWebpackPlugin(),
  ],
  devServer: {
    open: true
  }
};
