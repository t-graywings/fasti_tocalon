const path = require('path');
const {src, dest, watch, series, parallel} = require('gulp');
const sass = require('gulp-sass');
const webpackStream = require('webpack-stream');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config');

const scssRootPath = path.resolve(__dirname, 'src/client/scss/style.scss');
const scssPath = path.resolve(__dirname, 'src/client/scss');
const cssDest = path.resolve(__dirname, 'dist/client/css');

const tsRootPath = path.resolve(__dirname, 'src/client/ts/main.tsx');
const tsPath = path.resolve(__dirname, 'src/client/ts');
const jsDest = path.resolve(__dirname, 'dist/client/js');

const expressRootPath = path.resolve(__dirname, 'src/server/*.ts');
const expressDest = path.resolve(__dirname, 'dist/server')

const compileSass =
  () => src(scssRootPath)
    .pipe(sass({
      outputStyle: 'expanded'
    }).on('error', sass.logError))
    .pipe(dest(cssDest));

const watchSassFiles =
  () => watch(scssPath, compileSass);

const compileJs =
  () => src(tsRootPath)
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(dest(jsDest));

const watchJsFiles =
  () => watch(tsPath, compileJs);

const buildSass = series(compileSass, watchSassFiles, function(done){done();})
const buildJs = series(compileJs, watchJsFiles, function(done){done();})

const buildAll = parallel(buildJs, buildSass, function(done){done();})

exports.default = buildAll
