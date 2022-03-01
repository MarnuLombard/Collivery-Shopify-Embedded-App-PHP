const mix = require('laravel-mix');
const {CompileRoutes} = require('@mds-tech/compile_routes');
const fs = require('fs');

const compileRoutes = new CompileRoutes({outPath: 'resources/js/routes.ts'});

/** @typedef {import('laravel-mix/src/Mix')} Mix */
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
.ts('resources/js/app.tsx', 'public/js')
.react()
.webpackConfig({
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.vue', '.ts', '.tsx'],
  },
  devtool: 'inline-source-map',

}).sourceMaps().version();

Mix.config.hmrOptions = {
  https: {
    key: fs.readFileSync('/Volumes/Docker/nginx/certs/live/mds-integrated-test.collivery.co.za/privkey.pem'),
    cert: fs.readFileSync('/Volumes/Docker/nginx/certs/live/mds-integrated-test.collivery.co.za/fullchain.pem'),
  },
  host: process.env.APP_DOMAIN,
  port: 8080,
};
