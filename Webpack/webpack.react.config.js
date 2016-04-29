var path = require('path');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'react');

module.exports= {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    //babel重要的loader在这里
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'My first react app'
        })
    ]
}