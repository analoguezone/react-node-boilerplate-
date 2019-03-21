const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const outputDirectory = "dist";
module.exports = {
	devtool: "inline-source-map",
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(jsx|js)$/,
				loader: require.resolve("babel-loader"),
				exclude: /(node_modules)/,
				options: {
					cacheDirectory: true
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			{
				test: /\.(gif|png|jpe?g|svg)$/i,
				use: [
					"file-loader",
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
								quality: 65
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: true
							},
							pngquant: {
								quality: "65-90",
								speed: 4
							}
						}
					}
				]
			}
		]
	},
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			"/api": "http://localhost:8080"
		}
	},
	plugins: [
		new CleanWebpackPlugin({ outputDirectory }),
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		})
	]
};
