module.exports = {
    outputDir: './functions/public',
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        module: {
            rules: [
                {
                    test: /\.md$/,
                    loader: 'raw-loader',
                    exclude: /(node_modules)/
                },
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    exclude: /(node_modules)/
                }
            ]
        }
    }
};
