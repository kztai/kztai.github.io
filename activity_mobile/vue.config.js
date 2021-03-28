const path = require('path');
const fs = require('fs');

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    devServer: {
        host: '14.gts.com',
        port: '85'
    },

    configureWebpack: config => {
        // config.resolve = {
        //     extensions: ['.js', '.vue', '.json', ".css"],
        //     alias: {
        //         'vue$': 'vue/dist/vue.esm.js',
        //         '@': resolve('src'),
        //     }
        // }

        // config.entry = {
        //     app: ["babel-polyfill", "./src/main.js"]
        // };

        config.resolve = {
            extensions: ['.js', '.vue', '.json', ".css"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            }
        };
            config.module.rules.push(
                {
                    test: /\.(cur)(\?\S*)?$/,
                    loader: 'url-loader',
                    // todo: 这种写法有待调整
                    query: {
                        limit: 10000,
                        name: path.posix.join('static', '[name].[hash:7].[ext]')
                    }
                },
                // {
                //     test: /\.less$/,
                //     loader: "style-loader!css-loader!less-loader"
                // }
            )
    },
    css: {
        loaderOptions: {
            sass: {
                // data: fs.readFileSync('src/assets/zhl-style1.scss', 'utf-8')
                data: `@import 'src/assets/kzt-style.scss';`,
            },
            // less: {
            //     data: fs.readFileSync('src/assets/var_kzt.less', 'utf-8')
            //     // data: `@import 'src/assets/var_kzt.less';`,
            // }
        }
    }
};