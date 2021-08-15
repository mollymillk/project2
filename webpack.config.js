const path = require('path');
var webpack = require('webpack')
const CssMinimizerWebpackPligin = require('css-minimizer-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

 
module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.js',
	},
	devServer: {
		publicPath: 'http://localhost:8080/',
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
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
		  },
		{
			test: /\.(png|jpg|gif|svg)$/,
			use: { 
			loader: "file-loader", 
		}
		},
		  {
		  test: /\.(ttf|eot|woff|svg|woff2)$/,
		  use: {
		  loader: "file-loader",
		  options: {
			name: '[name].[ext]',
			outputPath: 'fonts/'
		  		}
			}
		  },
			{
			test: /\.pug$/,
			loader: 'pug-loader',
			options: {
				pretty: true
				}
			}
		]
	  },
	plugins: [
		new HtmlWebpackPlugin({
			filename: "landing_page.html",
			template: 'src/pages/landing_page.pug',
			chuncks: ["landing_page"]
		}),
		new HtmlWebpackPlugin({
			filename: "ui.html",
			template: 'src/pages/ui.pug',
			chuncks: ["ui"]
		}),
		new HtmlWebpackInlineSVGPlugin(),
		new CssMinimizerWebpackPligin(),
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			$: 'jquery',
			jQuery: 'jquery'
		  }),
		  new CopyPlugin({
			patterns: [
			  { from: "src/components/form_elements/checkbox/img", to: "img/" }
			],
		  }),
	],
	optimization: {
		minimize: true,
	  },
	
}
