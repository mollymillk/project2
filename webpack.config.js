const path = require('path');
var webpack = require('webpack')
const CssMinimizerWebpackPligin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const SVGSpriteSheetPlugin = require('webpack-sass-svg');
const miniSVGDataURI = require('mini-svg-data-uri');
const { web } = require('webpack');

 
module.exports = {
	mode:'development',
	target: "web",
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		hot: true,
		port: 9000,
		writeToDisk:true,
		open: 'chrome',
        inline: true,
        host: "localhost",
        watchOptions: {
            poll: true
        }
	  },
	resolve: {
		alias: {
		'a': path.join(__dirname, 'src/')
		}
	  },
	module: {
		rules: [
			{
				test: /\.(scss|css)$/,
				use: [ 
					'style-loader',
					MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'sass-loader'
					]
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
				test: /\.(png|jpg|gif)$/i,
				include: path.join(__dirname, "src/asserts/img"),
					loader: 'file-loader',
				  },
			  {
				test: /\.(ttf|eot|woff|svg|woff2)$/,
				include: [ path.join(__dirname, "./src/asserts/fonts")],
				use: {
				  loader: "url-loader",
				  options: {
					name: '[name].[ext]',
					outputPath: 'fonts/',
					esModule: false
				  }
				}
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
		new HtmlWebpackInlineSVGPlugin(),
		new CssMinimizerWebpackPligin(),
		new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
		new CleanWebpackPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		  })
	],
	optimization: {
		minimize: true,
	  },
	
}