var gulp = require('gulp');
var postcss = require('gulp-postcss');

var cssnext = require('postcss-cssnext');
var shortcss = require('postcss-short');
//var autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function() {
  var plugins = [
    shortcss,
    cssnext
    //autoprefixer({browsers: ['> 1%'], cascade: false})
  ];
  return gulp.src('./src/css/main.css')
 //  .pipe(autoprefixer({
 //   browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
 // }))
 .pipe(postcss(plugins))
  .pipe(gulp.dest('./dist/css'));
});