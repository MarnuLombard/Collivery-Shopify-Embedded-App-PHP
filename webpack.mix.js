const mix = require('laravel-mix');
const {CompileRoutes} = require('@mds-tech/compile_routes')

const compileRoutes = new CompileRoutes({outputPath: 'resource/js/routes.js'});

// Compile our routes js file
// Watch our routes php files in order to recompile js routes
if (Mix.isWatching() || Mix.isPolling()) {
  compileRoutes.watch({
    routesGlob: './routes/**/*.php',
    pollingInterval: 700, // ms
  });
}

// Initial compile on startup
compileRoutes.compile();

mix
.sass('resources/sass/app.scss', 'public/css/')
.ts('resources/js/app.js', 'public/js')
.react()
.webpackConfig({
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
    },

})
.sourceMaps()
.version();
