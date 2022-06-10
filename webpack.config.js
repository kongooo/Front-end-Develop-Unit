const HtmlWebpackPlugin = require("html-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/src/index.html`,
  filename: "index.html",
  inject: "body",
});

module.exports = {
  mode: "development",
  entry: `${__dirname}/src/index.tsx`,
  output: {
    path: `${__dirname}/dist`,
    filename: "[name].js",
    clean: true,
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ],
  },
  devServer: {
    port: 8008,
    static: "./dist",
  },
  optimization: {
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [HTMLWebpackPluginConfig],
};
