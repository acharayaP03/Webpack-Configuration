const path = require('path');

const Config = require('./webpack.config');
const merge = require('webpack-merge');


//since we will using dev server, we dont need html-webpack-plugin while on dev mode.

module.exports = merge(Config, {
    mode: 'production',
    output:{
        //contenthas gives unique id to the file which prevents caching. 
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/'
    },
    //all common modules/rules and plugin will be used from .config.js file.
})