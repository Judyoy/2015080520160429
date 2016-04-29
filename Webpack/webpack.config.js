var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
//Template的文件夹路径
var TEM_PATH = path.resolve(APP_PATH, 'templates');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var webpack=require("webpack");
module.exports = {
    //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字
//    entry: APP_PATH+"/es6/index.js",
    entry: {
        app: path.resolve(APP_PATH, './es6/index.js'),
        mobile: path.resolve(APP_PATH, './es6/mobile.js'),
        //添加要打包在vendors里面的库
        vendors: ['jquery', 'moment']
    },
    devtool: 'eval-source-map',
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true
    },
    /*既然常用webpack做React一类的SPA，那么一个典型的例子就是前后端分离。后端是一个RESTful的server不管用什么写的。假定在本机他是类似http://localhost:5000/api/*这类的请求，现在添加配置让ajax请求可以直接proxy过去。*/
//    devServer: {
//        hot: true,
//        inline: true,
//        //其实很简单的，只要配置这个参数就可以了
//        proxy: {
//            '/api/*': {
//                target: 'http://localhost:5000',
//                secure: false
//            }
//        }
//    },
    //输出的文件名 合并以后的js会命名为bundle.js
    output: {
        path: BUILD_PATH,
        //注意 我们修改了bundle.js 用一个数组[name]来代替，他会根据entry的入口文件名称生成多个js文件，这里就是(app.js,mobile.js和vendors.js)
        filename: '[name].js'
//        filename: 'bundle.js'
    },
    module: {
        perLoaders: [
            {
                test: /\.jsx?$/,
                include: APP_PATH,
                loader: 'jshint-loader'
            }
        ],
        loaders: [
            {
                test: /\.css$/,
                    loaders: ['style', 'css?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.less/,
                loaders: ['style', 'css?sourceMap', 'less?sourceMap'],
                include: APP_PATH
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=40000'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                include: APP_PATH,
                query: {
                    presets: ['es2015']
                }
            },
        ]
    },
    //配置jshint的选项，支持es6的校验
    jshint: {
        "esnext": true
    },
    //添加我们的插件 会自动生成一个html文件
    plugins: [
        //创建了两个HtmlWebpackPlugin的实例，生成两个页面
        new HtmlwebpackPlugin({
            title: 'Hello World app',
            template: path.resolve(TEM_PATH, 'index.html'),
            filename: 'index.html',
            //chunks这个参数告诉插件要引用entry里面的哪几个入口
            chunks: ['app', 'vendors'],
            //要把script插入到标签里
            inject: 'body'
        }),
        new HtmlwebpackPlugin({
            title: 'Hello Mobile app',
            template: path.resolve(TEM_PATH, 'mobile.html'),
            filename: 'mobile.html',
            chunks: ['mobile', 'vendors'],
            inject: 'body'
        }),
        //provide $, jQuery and window.jQuery to every script
        //添加全局插件
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        }),
        //这个使用uglifyJs压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize: true}),
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]
};


















/**
 * Created by l on 2016/4/26.
 *//*
module.exports = {
    entry:[
        './app/main.js'
    ],
    output: {
        path: __dirname + '/assets/',
        publicPath: "/assets/",
        filename: 'bundle.js'
    },
    module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'react-hot!jsx-loader?harmony'
        },
        { test: /\.jsx?$/, loaders: ['jsx?harmony']}
    ]
}
};
path: 打包文件存放的绝对路径
 publicPath: 网站运行时的访问路径
 filename: 打包后的文件名 */