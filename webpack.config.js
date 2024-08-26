const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // To handle CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // HTML template
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // Directory to serve
    },
    compress: true, // Enable gzip compression
    port: 9000, // Port to run the dev server
  },
};
