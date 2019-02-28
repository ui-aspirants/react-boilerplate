const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.config');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge(base, {
    mode: 'production',
    optimization: {
        minimize: true
    },
    plugins: [
        new Visualizer({
            filename: './statistics.html' // statistics.html will view the bundle.js usages.
        }),
        new webpack.DefinePlugin({
            process: {
                env: {
                    'API_URL': JSON.stringify(config.PRODUCTION.API_URL),
                }
            }
        })
    ],
});