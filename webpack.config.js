const path = require('path');
var webpack = require('webpack')
const devMode = process.env.NODE_ENV !== "production";
const CssMinimizerWebpackPligin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const SVGSpriteSheetPlugin = require('webpack-sass-svg');
const miniSVGDataURI = require('mini-svg-data-uri');
const { web } = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');

 
module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	target: "web",
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
		hot: true,
		writeToDisk: true,
		open: 'chrome',
        inline: true,
        host: "localhost",
		liveReload: true,
        watchOptions: {
             poll: true
        }
	  },
	mode:'development',
	resolve: {
		alias: {
		'a': path.join(__dirname, 'src/')
		}
	  },
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [devMode ? "style-loader" : MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
					"sass-loader",
						]
				},
				{
					test: /\.(png|jpg|gif)$/i,
					use: [
					  {
						loader: 'url-loader',
						options: {
						  limit: 8192,
						},
					  },
					],
				  },
			{
				test: /\.svg$/,
				type: 'asset/inline',
				exclude: [ path.resolve(__dirname, "src/asserts/fonts")],
		       generator: {
		         dataUrl(content) {
		           content = content.toString();
		           return miniSVGDataURI(content);
		         }
	       },
				use: 'svgo-loader'
			  },
			  {
				test: /\.(?:ico|png|jpg|jpeg|gif)$/,
			  loader: "file-loader",
			  options: {
				outputPath: "assets/images",
				name: "[name].[ext]"
			  }
			},
			  {
				test: /\.(ttf|eot|woff|svg|woff2)$/,
				type: 'asset/resource',
				include: path.join(__dirname, "src/asserts/fonts"),
			  },
			{
				test: /\.pug$/,
				loader: 'pug-loader',
				options: {
					pretty: true
					}
				},
			
		]
	  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: "landing_page.html",
			template: 'src/pages/landing_page/landing_page.pug',
			chuncks: ["landing_page"]
		}),
		new HtmlWebpackPlugin({
			filename: "ui.html",
			template: 'src/pages/ui.pug',
			chuncks: ["ui"]
		}),
		new HtmlWebpackPlugin({
			filename: "cards.html",
			template: 'src/pages/cards.pug',
			chuncks: ["cards"]
		}),
		new HtmlWebpackPlugin({
			filename: "room_detailes.html",
			template: 'src/pages/room_detailes/room_detailes.pug',
			chuncks: ["room_detailes"]
		}),
		new HtmlWebpackPlugin({
			filename: "search_room.html",
			template: 'src/pages/search_room/search_room.pug',
			chuncks: ["search_room"]
		}),
		new HtmlWebpackInlineSVGPlugin(),
		new CssMinimizerWebpackPligin(),
		new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		  }),
		  new CopyPlugin({
            patterns: [
                {from: "src/pages/room_detailes/img", to: "img" },
                {from: "src/pages/landing_page/img", to: "img" },
                {from: "src/components/cards/room/img", to: "img" },
              ],
        }),
		new LiveReloadPlugin(),
		].concat(devMode ? [] : [new MiniCssExtractPlugin()]),

		optimization: {
			minimize: true,
		},
	
}