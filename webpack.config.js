const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'none',
    entry: './src/index.js',
    output:{
        //contenthas gives unique id to the file which prevents caching. 
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, 'dist'),
       
    },
    //generates new html template.
    plugins: [
        new HtmlWebpackPlugin({
            //use this file as from src
            template: "./src/template.html"
        })
    ],
    module:{
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|jpe?g|gif)?$/i,
                use:[
                    {
                        loader: 'file-loader'
                    }
                ]
            }
        ]
    }
}