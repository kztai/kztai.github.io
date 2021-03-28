const path = require('path');
const fs = require('fs');

function resolve(dir) {
    return path.join(__dirname, dir)
}


module.exports = {
    devServer: {
        host: '14.gts.com',
        port: '8888'
    },

    configureWebpack: config => {
        config.resolve = {
            extensions: ['.js', '.vue', '.json', ".css"],
            alias: {
                'vue$': 'vue/dist/vue.esm.js',
                '@': resolve('src'),
            }
        }
    },

    css: {
        loaderOptions: {
            sass: {
                data: fs.readFileSync("src/assets/common.scss", "utf-8")
            }
        }
    }
};
