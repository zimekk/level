import HtmlWebpackPlugin from "html-webpack-plugin";
import * as path from "path";
import * as webpack from "webpack";
import env from "dotenv";

env.config({ path: path.resolve(__dirname, "../../.env") });

const dev = process.env.NODE_ENV === "development";

const { ModuleFederationPlugin } = webpack.container;

const config: webpack.Configuration = {
  devServer: {
    port: 8081,
  },
  entry: require.resolve("./src"),
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-typescript"],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "public"),
  },
  plugins: [
    new webpack.EnvironmentPlugin(["NODE_ENV"]),
    new ModuleFederationPlugin({
      name: "web",
      exposes: {
        ".": "./src",
        // "./App": "./src/App",
      },
      remotes: {
        // "@mofed/components": dev
        //   ? "components@//localhost:8085/components.js"
        //   : "components@components/components.js",
      },
      shared: ["react"],
    }),
    new HtmlWebpackPlugin(),
  ],
};

export default config;
