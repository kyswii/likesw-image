"use strict";

import webpack from 'webpack';
import path from 'path';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import { getIfUtils, removeEmpty } from 'webpack-config-utils';

import proxy from 'node-http-proxy';

const rootPath = path.join(__dirname, './');

const devServer = {
    contentBase: [
        path.join(rootPath, 'docs'),
        path.join(rootPath, 'build'),
        path.join(rootPath, 'node_modules'),
    ],
    host: process.env.IP,
    port: parseInt(process.env.PORT),
    proxy: {
        '/images': {
            target: 'http://localhost:10010/',
            secure: false,
        }
    }
}

export default (env) => {
    const { ifWatch, ifBuild } = getIfUtils(env, ['build', 'watch']);

    return {
        context: path.join(__dirname, 'src'),
        entry: {
            app: path.join(__dirname, '/src/app.js'),
            vendors: [

            ]
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: `js/[name]${ ifBuild('.[chunkhash]', '') }.js`,
            publicPath: ''
        },
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loaders: 'babel-loader',
                    query: {
                        presets: [
                            'es2015',
                            'react'
                        ]
                    }
                },
                {
                    test: /\.css$/,
                    loader: 'style!css'
                },
                // {
                //     test: /\.scss$/,
                //     loader: 'style!css!sass'
                // },
                { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }

            ]
        },
        resolve: {
            extensions: ['.js', '.jsx', 'json']
        },
        devtool: 'sourcemap',
        plugins: [
            new HtmlwebpackPlugin({
                title: 'Likesw-image',
                template: path.join(__dirname, './src/index.html'),
                filename: 'index.html',
                minify: {
                    minifyJS: false,
                    removeComments: true,
                    minifyCSS: false,
                }
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify('production')
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: env.production
            })
        ],
        devServer,
    };
}