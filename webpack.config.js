// module.exports = {
//     entry: {
//         popup: './src/popup/popup.js',
//         options: './src/popup/options.js',
//         leetcode: './src/popup/script/leetcode.js',
//         leetcodecn: './src/popup/script/leetcodecn.js'
//     },
//     output: {
//         filename: '[name].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /.css$/,
//                 use: [
//                     'style-loader',
//                     'css-loader'
//                 ]
//             }
//         ]
//     },
//     mode: 'production'
// }




module.exports = {
    entry: {
        popup: {
            import: [
                './src/popup/popup.js',
                './src/popup/daily-review.js'
            ],
            filename: 'popup.js'
        },
        options: './src/popup/options.js',
        leetcode: './src/popup/script/leetcode.js',
        leetcodecn: './src/popup/script/leetcodecn.js',
        background: './src/background.js',
        reminder: './src/content-scripts/reminder.js',
        // 添加 GitHub Star 加载脚本
        githubStar: {
            import: './src/popup/script/loadGithubStar.js',
            filename: 'loadGithubStar.js'
        }
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    // mode: 'production'
    // 开发模式，代码不会被压缩
    // mode: 'development',
    // // 生成源码映射，方便调试
    // devtool: 'source-map',
    // // 关闭代码最小化
    // optimization: {
    //     minimize: false
    // }
}