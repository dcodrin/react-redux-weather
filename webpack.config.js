module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: __dirname,
        publicPath: "/",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader",
            query: {
                presets: ["es2015", "react", "stage-1"]
            }
        }, {
            test: /\.scss$/,
            loader: "style!css!sass"
        }],
        resolve: {
            extensions: ["", ".js", ".jsx"]
        },
        devServer: {
            historyApiFallback: true,
            contentBase: "./"
        }
    }
}