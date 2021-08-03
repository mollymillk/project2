const path = require('path');
var webpack = require('webpack');
const CssMinimizerWebpackPligin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

 
module.exports = {
	mode: 'development',
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'scripts.js',
	},
	devServer: {
		contentBase: './dist',
	},
	module: {
		rules: [
		  {
			test: /\.(scss|css)$/,
			use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
		  },
		  {
			test: /\.(svg|png|gif|jpg)$/,
			loader: 'file-loader',
			options: {
				name: '[name].[ext]'
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
			},
			{
				test: /jquery.+\.js$/,
				use: [{
					loader: 'expose-loader',
					options: 'jQuery'
				},{
					loader: 'expose-loader',
					options: '$'
				}]
			  }
		]
	  },
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/pages/landing_page.pug'
		}),
		new CssMinimizerWebpackPligin(),
		new MiniCssExtractPlugin(),
		new webpack.ProvidePlugin({
			identifier: ['module1', 'property1'],
			$: 'jquery',
			jQuery: 'jquery',
		  })
	],
	optimization: {
		minimize: true,
	  },
	
}
