const mix = require('laravel-mix');
const nodeSass = require('node-sass');
const path = require('path');

// We replace the default Dart Sass implementation with Node Sass, which is slower to install but compiles faster
const sassOptions = {
    implementation: nodeSass,
};


mix
    // Disables OS notifications
    .disableNotifications()
    // We have to explicitly tell the transpiler to also transpile code imported from node_modules
    // jQuery is an external dependency so it shouldn't try to require it locally
    .webpackConfig({
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: ['@babel/preset-env'],
                            },
                        },
                    ],
                    include: /node_modules/,
                },
            ],
        },
        target: 'node',
        externals: {
            jquery: 'jQuery',
        },
        output: {
            publicPath: '',
        },
    })
    // Automatically binds $ = jquery, so we can use $ shorthands everywhere
    .autoload({
        jquery: ['$', 'window.jQuery', 'jQuery'],
    })
    .setPublicPath('./dist')
    .sass('src/style.scss', 'styles', sassOptions)
    .options({
        processCssUrls: false,
    })
    .js('src/index.js', 'scripts')
    .browserSync({
        proxy: 'http://climate.test',
        ui: false,
    });

// if (mix.inProduction()) {
//     mix
//         .copyDirectory('resources/images', 'public/images')
//         .copyDirectory('resources/fonts', 'public/fonts')
//         .version();
// } else {
//     // We use .env file from site
//     mix
//         .env('../../../../.env')
//         .browserSync({
//             proxy: 'http://climate.test',
//             ui: false,
//         });
// }