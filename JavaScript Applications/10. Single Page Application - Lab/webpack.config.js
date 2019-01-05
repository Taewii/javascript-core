const path = require('path');
const copyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        alias: {
            handlebars: 'handlebars/dist/handlebars.min.js'
        }
    },
    plugins: [
        new copyWebpackPlugin([
            {
                from: './src/views',
                to: 'views'
            },
            {
                from: './src/css',
                to: 'css'
            },
            {
                from: './src/lib',
                to: 'lib'
            }
        ])
    ]
};