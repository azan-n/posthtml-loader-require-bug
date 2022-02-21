const HtmlWebpackPlugin = require('html-webpack-plugin');
const posthtml = require('posthtml');

module.exports = {
    mode: 'production',
    entry: './index.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: __dirname + `/index.html`
        })
    ],

    module: {
        rules: [
            {
                test: /\.html$/i,
                // With PostHTML Loader Config inside this file
                // use: [
                //     "html-loader",
                //     {
                //         loader: 'posthtml-loader',
                //         // options: {
                //         //     plugins: function () {
                //         //         return [
                //         //             require('posthtml-highlight')({ inline: true })
                //         //         ]
                //         //     }
                //         // }
                //     }
                // ],

                // With PostHTML used in html-loader preprocessor option

                loader: "html-loader",
                options: {
                    preprocessor: (content, loaderContext) => {
                        posthtml([
                            require('posthtml-highlight')({ inline: true }),
                        ])
                            .process(content, { sync: true })
                            .then((result) => { return result.html })
                            .catch((error) => {
                                loaderContext.emitError(error);
                                return content;
                            })
                    }
                },
            },
        ],
    }
};