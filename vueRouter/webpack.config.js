var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        './js/main': path.resolve(__dirname, './src/main.js'),
        './js/dynamicRouter': path.resolve(__dirname, './src/dynamicRouter.js'),
        './js/nestedRouter': path.resolve(__dirname, './src/nestedRouter.js'),
        './js/nameRouter': path.resolve(__dirname, './src/nameRouter.js'),
        './js/namedViews': path.resolve(__dirname, './src/namedViews.js'),
        './js/transitionEffect': path.resolve(__dirname, './src/transitionEffect.js'),
        './js/scrollActive': path.resolve(__dirname, './src/scrollActive.js'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: 'dist/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: {   //抽离vue中的css
                //         css: ExtractTextPlugin.extract({
                //             use: 'css-loader',
                //             fallback: 'vue-style-loader'
                //
                //         })
                //     }
                //     // other vue-loader options go here
                // }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader?name=images/[hash].[ext]',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            // {
            //     test: '/\.css$/',
            //     loader: ExtractTextPlugin.extract({   //抽离vue中的css
            //         use: [
            //             {
            //                 loader: 'css-loader'
            //             }
            //         ]
            //     })
            // }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin(['dist']),   //删除dist目录下的无用的文件
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        // new ExtractTextPlugin({   //这个不添加allChunks参数的话，不会抽离chunk的css
        //     filename: './dist/css/[name].css',
        //     // allChunks:true,
        // })
    ])
}
