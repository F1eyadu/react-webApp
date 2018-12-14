const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AutoDllPlugin = require('autodll-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: {
        bundle: path.resolve(__dirname, './../src/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        'presets': ['es2015', "react"]
                    }
                },
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ['file-loader']
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: 'postcss-loader'
                    }
                ]
            }
        ]
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname, '../src')
        },
        extensions: ['.js', '.jsx', '.css', '.styl']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html')
        }),
        new AutoDllPlugin({
            inject: true,
            debug: true,
            filename: '[name]_hash.js',
            path: './dll',
            entry: {
                vendor: ['react', 'react-dom']
            }
        }),
        new webpack.optimize.SplitChunksPlugin()
    ]
}