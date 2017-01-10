var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/repeat-template.js',
    output: {
        path: __dirname,
        filename: '/dist/repeat-template.js'
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                test: path.join(__dirname, 'src'),
                query: {
                    presets: 'es2015',
                },
            }
        ]
    }
};
