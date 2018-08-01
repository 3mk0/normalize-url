var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        "normalizeUrl": "./index.js"
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'NormalizeUrl'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: {
                    "presets": [
                        ["es2015", {
                            "modules": false
                        }]
                    ],
                    "plugins": ["babel-plugin-transform-class-properties"]
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            include: /\.min\.js$/,
            minimize: false
        })
    ]
};