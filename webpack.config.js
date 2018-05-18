const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './index.js',
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                minimize: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|svg|jpg|gif|ico)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'images/',
                        name: '[name]-[hash].[ext]'
                    }
                }
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'styles.css'
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};