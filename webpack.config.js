const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true"))
});

module.exports = {
  entry: {
    main: path.join(__dirname, "src/index.tsx")
  },
  output: {
    pathinfo: true,
    path: path.join(__dirname, "build"),
    filename: "bundle.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      src: path.resolve("./src")
    }
  },
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || "localhost",
      port: process.env.PORT || 3000,
      server: {
        baseDir: "./build",
        index: "index.html"
      }
    }),
    new HtmlWebpackPlugin({
      title: "React Examples",
      template: "src/index.html",
      filename: "index.html"
    }),
    new CopyWebpackPlugin([
      {
        from: path.join(__dirname, "src/data"),
        to: path.join(__dirname, "build/data")
      },
      {
        from: path.join(__dirname, "src/fonts"),
        to: path.join(__dirname, "build/fonts")
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node-modules/"
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              // minimize: true,
              url: false
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|png|svg|webp)$/,
        loader: "url-loader",
        options: {
          limit: 25000
        }
      }
    ]
  },
  devtool: "source-map",
  mode: "development"
};
