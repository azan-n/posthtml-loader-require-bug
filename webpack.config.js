const HtmlWebpackPlugin = require('html-webpack-plugin');

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
                use: [
                    "html-loader",
                    {
                        loader: 'posthtml-loader',
                        // options: {
                        //     plugins: function () {
                        //         return [
                        //             require('posthtml-highlight')({ inline: true })
                        //         ]
                        //     }
                        // }
                    }
                ],
            },
        ],
    }
};