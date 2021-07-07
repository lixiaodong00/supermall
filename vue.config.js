module.exports = {
    configureWebpack: {
        resolve: {
            extensions: [], // 配置不写的后缀名
            alias: {
                // 默认已经有一个src的别名@了
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
                // 'router': '@/router',

            }
        }
    }
}