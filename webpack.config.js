const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './asset/index.html',
	filename: 'index.html',
	inject: 'body',
});

module.exports = {
	mode: 'none',
	entry: './src/app.js',
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
		hot: true,
		open: false,
	},
	stats: {
		colors: true,
		logging: 'verbose',
	},
	plugins: [HtmlWebpackPluginConfig],
};
