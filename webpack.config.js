var path = require('path');

module.exports = {
    entry: './assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // Add the JSHint loader and babel loader
    module: {
        rules: [{
                test: /\.js$/, // Выполнить загрузчик на всех файлах .js
                exclude: /node_modules/, // игнорировать все в папке node_modules
                use: 'jshint-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }
};