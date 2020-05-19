const { series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify-es').default;
const rename = require("gulp-rename");
const concat = require('gulp-concat');
const useref = require('gulp-useref');


function minifyСss() {
  return src('./src/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(dest('dist/css/'));
}

function minifyJS() {
  return src(['./src/js/*.js'])
        .pipe(uglify())
        .pipe(concat('main.min.js'))
        .pipe(dest('dist/js/'));
}

function minifyHtml() {
  return src('./src/*.html')
        .pipe(useref())
        .pipe(htmlmin({collapseWhitespace: true }))
        .pipe(dest('dist/'));
}

function minImages(){
  return src('./src/img/**/*.+(png|jpg|jpeg|svg)')
        .pipe(imagemin())
        .pipe(dest('dist/img'));
}

exports.build = series(minifyСss, minImages, minifyJS, minifyHtml);
exports.minifyJS = minifyJS;
exports.minifyHtml = minifyHtml;
exports.minifyСss = minifyСss;
exports.minImages = minImages;