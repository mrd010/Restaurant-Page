const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve("./dist"),
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(otf|ttf|woff)$/i,
        type: "asset/resource",
      },
    ],
  },
};
