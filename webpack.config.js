const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.tsx',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        contentBase: path.join(__dirname, './dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css',
        }),
    ]
};