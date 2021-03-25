const path = require('path');
const MiniCssExtraPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'none',
    entry: './index.js',
    output:{
        filename:'[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: [
                    "style-loader", 
                    "css-loader"
                ]
            }
        ]
    },
    plugins:[
        new MiniCssExtraPlugin(),
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
    
}