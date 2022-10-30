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
        target: 'web',
        // externals: {
        //     jquery: 'jQuery',
        // },
        output: {
            publicPath: '',
        },
    })
    // Automatically binds $ = jquery, so we can use $ shorthands everywhere
    // .autoload({
    //     jquery: ['$', 'window.jQuery', 'jQuery'],
    // })
    .setPublicPath('./dist')
    .sass('src/style.scss', 'styles', sassOptions)
    .options({
        processCssUrls: false,
    })
    .copy('index.html', 'dist/index.html')
    .copy('src/images/**', 'dist/images/')
    .js('src/scripts/main.js', 'scripts')
    .browserSync({
        proxy: 'http://climate.test/dist/index.html',
        ui: false,
    });