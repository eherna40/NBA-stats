// Dependencies
import webpack from 'webpack'
import path from 'path'
import ChunksPlugin from 'webpack-split-chunks'

// Environment
const isDevelopment = process.env.NODE_ENV !== 'production'
// Paths
const PATHS = {
    index: path.join(__dirname, 'src/index'),
    build: path.join(__dirname, '/src/public'),
    src: path.join(__dirname, 'src')
}

const getDevtool = () => 'cheap-module-eval-source-map';

const getEntry = () => {
    const entry = [PATHS.index];

    if (isDevelopment) {
        entry.push('webpack-hot-middleware/client?reload=true')
    }

    return entry
}

const getOutput = () => ({
    path: PATHS.build,
    publicPath: '/',
    filename: '[name].bundle.js'
})

const getPlugins = () => {
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: (m) => /node_modules/.test(m.context)
        })
    ]

    if (isDevelopment) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoEmitOnErrorsPlugin()
        )
    } else {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    screw_ie8: true,
                    warnings: false
                }
            })
        )
    }

    return plugins;
}

const getLoaders = () => ({
    loaders: [
        {
            test: /\.js?$/,
            loaders: ['babel-loader'],
            include: PATHS.src
        },
        {
            test: /(\.css)$/,
            loaders: ['style-loader', 'css-loader']
        },
        {
            test: /\.(png|jpe?g|gif|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        // path where the images will be saved
                        name: 'assets/img/[name].[ext]'
                    }
                },
                {
                    loader: 'image-webpack-loader',
                    options: {
                        mozjpeg: {
                            quality: 65
                        },
                        pngquant: {
                            quality: "10-20",
                            speed: 4
                        },
                        svgo: {
                            plugins: [
                                {
                                    removeViewBox: false
                                },
                                {
                                    removeEmptyAttrs: false
                                }
                            ]
                        },
                        gifsicle: {
                            optimizationLevel: 7,
                            interlaced: false
                        },
                        optipng: {
                            optimizationLevel: 7,
                            interlaced: false
                        }
                    }
                }
            ]
        }
    ]
})

// Webpack config
export default {
    devtool: getDevtool(),
    entry: getEntry(),
    output: getOutput(),
    plugins: getPlugins(),
    module: getLoaders()
};













