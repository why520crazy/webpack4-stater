module.exports = function (env, argv) {
    // console.log(`env:${JSON.stringify(env)},argv:${JSON.stringify(argv)}`)
    return {
        mode: 'development',
        entry: {
            app: './src/app.js',
            site: './src/site.js',
            vendor: './src/vendor.js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: 'initial',
                        name: 'vendor',
                        priority: 10,
                        enforce: true
                    },
                    common: {
                        chunks: 'all',
                        name: 'common'
                    }
                }
            }
        }
    }
}

// module.exports =  {
//     mode: 'development',
//     entry: {
//         app: './src/app.js',
//         site: './src/site.js'
//     }
// }